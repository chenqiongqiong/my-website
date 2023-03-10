import React, { useEffect, useState } from 'react';

import base64 from 'base-64';
import utf8 from 'utf8';
import URI from 'urijs';

import clsx from 'clsx';
import { usePluginData } from '@docusaurus/useGlobalData';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

import { lowlight } from 'lowlight/lib/core';
import c from 'highlight.js/lib/languages/c';
import javascript from 'highlight.js/lib/languages/javascript';
import markdown from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import rust from 'highlight.js/lib/languages/rust';
import shell from 'highlight.js/lib/languages/shell';

import { useEditor, ReactNodeViewRenderer } from '@tiptap/react';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import { Octokit } from '@octokit/core';
import { components } from '@octokit/openapi-types';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';
import { RestEndpointMethods } from '@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types';
import { RequestError } from '@octokit/request-error';

import htmlStringify from 'rehype-stringify';
import htmlParse from 'rehype-parse';
import htmlParseUrl from 'rehype-urls';
import htmlToMarkdown from 'rehype-remark';
import markdownStringify from 'remark-stringify';
import markdownParse from 'remark-parse';
import markdownParseFrontmatter from 'remark-frontmatter';
import markdownUnwrapImages from 'remark-unwrap-images';
import markdownAbsoluteImages from '@pondorasti/remark-img-links';
import markdownExtractFrontmatter from 'remark-extract-frontmatter';
import markdownToHtml from 'remark-rehype';
import { unified } from 'unified';
import yaml from 'yaml';

import EditorMenu from '../EditorMenu';
import EditorPage from '../EditorPage';
import EditorLogin from '../EditorLogin';
import EditorCodeBlock from '../EditorCodeBlock';

import 'highlight.js/styles/github.css';
import './styles.css';

interface GitHub {
  api?: RestEndpointMethods;
  user?: string;
}

type GitHubContent = components['schemas']['content-file'];

lowlight.registerLanguage('c', c);
lowlight.registerLanguage('javascript', javascript);
lowlight.registerLanguage('markdown', markdown);
lowlight.registerLanguage('python', python);
lowlight.registerLanguage('rust', rust);
lowlight.registerLanguage('shell', shell);

export interface EditorOptions {
  authorizationClientId: string;
  authorizationTokenUrl: string;
  authorizationMethod: 'GET' | 'POST';
  contentOwner: string;
  contentRepo: string;
  contentDocsPath: string;
  contentStaticPath: string;
  editorPath: string;
}

export interface EditorData {
  editorBasePath: string;
}

interface EditorProps {
  options: EditorOptions;
  className?: string;
}

export default function Editor({ options = {}, className }: EditorProps) {
  const [announcement, setAnnouncement] = useState('');
  const [pullrequest, setPullrequest] = useState('');

  const [contentFrontmatter, setContentFrontmatter] = useState({});

  const [github, setGithub] = useState({} as GitHub);
  const [syncing, setSyncing] = useState(false);
  const [savedContent, setSavedContent] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [dirty, setDirty] = useState(false);

  const {
    authorizationClientId,
    authorizationTokenUrl,
    authorizationMethod,
    contentOwner,
    contentRepo,
    contentDocsPath,
    contentStaticPath,
  } = options;

  const { pathname } = useLocation();
  const editorBasePath = '';

  const filePath = '';
  const contentPath = '';
  const contentBranch = `edit/${contentPath.replace(/[/.]/g, '-')}`;

  const authorizationCodeUrl = 'https://github.com/login/oauth/authorize';
  const authorizationScope = 'public_repo';

  const editor = useEditor({
    extensions: [
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(EditorCodeBlock);
        },
      }).configure({ lowlight }),
      Document,
      Dropcursor,
      HardBreak,
      Heading,
      History,
      HorizontalRule,
      Italic,
      Image,
      Link.configure({ openOnClick: false }),
      ListItem,
      OrderedList,
      Paragraph,
      Text,
    ],
    autofocus: 'start',
    onUpdate({ editor }) {
      setCurrentContent(editor.getHTML());
    },
  });

  const requestAuthorizationCode = (redirectUrl) => {
    // const url = new URI(authorizationCodeUrl)
    //   .query({
    //     client_id: authorizationClientId,
    //     scope: authorizationScope,
    //     redirect_uri: redirectUrl,
    //   })
    //   .toString();

    // window.location.replace(url);
  };

  const requestAuthorizationToken = async (code: string): Promise<Response> => {
    switch (authorizationMethod) {
      case 'GET':
        return fetch(authorizationTokenUrl + code)
          .then((response) => response.json())
          .then((data) => data.token);
      case 'POST':
        return fetch(authorizationTokenUrl, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ code }),
        })
          .then((response) => response.json())
          .then((data) => data.token);
    }
  };

  const requestAuthorization = async () => {
    const url = new URI();
    const { code } = URI.parseQuery(url.query());

    if (code) {
      const urlWithoutCode = url.removeQuery('code').toString();
      window.history.replaceState(window.history.state, '', urlWithoutCode);
      const token = await requestAuthorizationToken(code);
      const OctokitRest = Octokit.plugin(restEndpointMethods);
      const { hook, rest: api } = new OctokitRest({ auth: token });

      hook.error('request', async (error) => {
        if (error instanceof RequestError && error.status === 403) {
          // TODO: Change to more graceful solution then just re-request.
          await requestAuthorization();
        } else {
          throw error;
        }
      });

      const {
        data: { login: user },
      } = await api.users.getAuthenticated();

      return { api, user };
    } else {
      requestAuthorizationCode(url);
    }
  };

  const createRepo = async () => {
    const {
      data: {
        name: originRepo,
        owner: { login: originOwner },
      },
    } = await github.api.repos.createFork({
      owner: contentOwner,
      repo: contentRepo,
    });

    return await new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        github.api.repos
          .get({
            owner: originOwner,
            repo: originRepo,
          })
          .then((repo) => {
            clearInterval(interval);
            resolve(repo);
          })
          .catch((error) => {
            if (error.status !== 404) {
              reject(error);
            }
          });
      }, 1000);
    });
  };

  const requestRepo = async (owner, repo) => {
    let response;

    try {
      response = await github.api.repos.get({
        owner,
        repo,
      });
    } catch (error) {
      // TODO: Follow 301 response in case repo was renamed
      if (error.status === 404 && owner !== contentOwner) {
        response = await createRepo();
      } else {
        throw error;
      }
    }

    const {
      data: {
        name: originRepo,
        owner: { login: originOwner },
        parent: upstream,
      },
    } = response;

    // Sanity check to verify the repo is indeed a fork
    if (originOwner !== contentOwner) {
      if (upstream) {
        const {
          name: upstreamRepo,
          owner: { login: upstreamOwner },
        } = upstream;
        if (upstreamOwner !== contentOwner && upstreamRepo !== contentRepo) {
          throw `Repo is not a fork of ${contentOwner}/${contentRepo}`;
        }
      } else {
        throw `Repo is not a fork of ${contentOwner}/${contentRepo}`;
      }
    }

    return { owner: originOwner, repo: originRepo };
  };

  const createBranch = async (owner, repo, branch) => {
    const {
      data: { default_branch: contentDefaultBranch },
    } = await github.api.repos.get({
      owner: contentOwner,
      repo: contentRepo,
    });

    const {
      data: {
        commit: { sha },
      },
    } = await github.api.repos.getBranch({
      owner: contentOwner,
      repo: contentRepo,
      branch: contentDefaultBranch,
    });

    await github.api.git.createRef({
      owner,
      repo,
      sha,
      ref: `refs/heads/${branch}`,
    });
  };

  const requestBranch = async (owner, repo, branch) => {
    try {
      await github.api.repos.getBranch({
        owner,
        repo,
        branch,
      });
    } catch (error) {
      // TODO: Follow 301 response in case branch was renamed
      if (error.status === 404) {
        await createBranch(owner, repo, branch);
      } else {
        throw error;
      }
    }

    return branch;
  };

  const requestContent = async (owner, repo, branch, path) => {
    // TODO: Allow user to create content on 404 response
    const { data: response } = await github.api.repos.getContent({
      owner,
      repo,
      path,
      ref: `refs/heads/${branch}`,
    });

    const { content: data } = response as GitHubContent;
    const markdown = utf8.decode(base64.decode(data));

    const staticContentBaseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${contentStaticPath}/`;

    const markdownToHtmlProcessor = unified()
      .use(markdownParse)
      .use(markdownParseFrontmatter, ['yaml'])
      .use(markdownExtractFrontmatter, { yaml: yaml.parse, remove: true })
      .use(markdownUnwrapImages)
      .use(markdownAbsoluteImages, { absolutePath: staticContentBaseUrl })
      .use(markdownToHtml)
      .use(htmlStringify);

    const { data: frontMatter, value: html } =
      await markdownToHtmlProcessor.process(markdown);

    setContentFrontmatter(frontMatter);
    editor.chain().setContent(html).focus('start').run();
    setSavedContent(editor.getHTML());
    setCurrentContent(editor.getHTML());
  };

  const requestCommit = async (owner, repo, branch, path) => {
    const staticContentBaseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${contentStaticPath}/`;
    const removeImageBaseUrl = (url) => {
      const imageUrl = new URI(url);
      return imageUrl.relativeTo(staticContentBaseUrl).toString();
    };

    const html = editor.getHTML();
    const htmlToMarkdownProcessor = unified()
      .use(htmlParse)
      .use(htmlParseUrl, removeImageBaseUrl)
      .use(htmlToMarkdown)
      .use(markdownStringify, {
        bullet: '-',
        rule: '-',
        listItemIndent: 'mixed',
      });

    let { value: markdown } = await htmlToMarkdownProcessor.process(html);

    if (contentFrontmatter) {
      const frontmatter = yaml.stringify(contentFrontmatter);
      markdown = `---\n${frontmatter}---\n\n${markdown}`;
    }

    const data = base64.encode(utf8.encode(markdown));

    setSyncing(true);
    const { data: response } = await github.api.repos.getContent({
      owner,
      repo,
      path,
      ref: `refs/heads/${branch}`,
    });

    const { sha } = response as GitHubContent;

    setAnnouncement('Saving changes...');
    await github.api.repos.createOrUpdateFileContents({
      owner,
      repo,
      branch,
      path,
      sha,
      content: data,
      message: `Edit ${contentPath}`,
    });

    setSavedContent(html);

    setAnnouncement('Changes have been saved, syncing with GitHub...');
    await new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        github.api.repos
          .getContent({
            owner,
            repo,
            path,
            ref: `refs/heads/${branch}`,
          })
          .then(({ data: response }) => {
            const { sha: remoteSha } = response as GitHubContent;

            if (remoteSha != sha) {
              // Remote file is updated
              clearInterval(interval);
              setSyncing(false);
              setAnnouncement('Changes have been saved');
              resolve(null);
            }
          })
          .catch((error) => {
            if (error.status !== 404) {
              setSyncing(false);
              setAnnouncement('An error occured during sync');
              reject(error);
            }
          });
      }, 1000);
    });
  };

  const requestPull = async (owner, branch) => {
    const head = `${owner}:${branch}`;

    const { data: pulls } = await github.api.pulls.list({
      owner: contentOwner,
      repo: contentRepo,
      state: 'open',
      head,
    });

    // TODO: Allow user to update existing pull requests
    if (pulls.length) {
      setPullrequest(pulls[0].html_url);
      setAnnouncement('Changes already submitted');
    } else {
      setAnnouncement('Submitting changes...');
      const {
        data: { default_branch: contentDefaultBranch },
      } = await github.api.repos.get({
        owner: contentOwner,
        repo: contentRepo,
      });

      // TODO: Allow user to write a pull request title and description
      const {
        data: { html_url },
      } = await github.api.pulls.create({
        owner: contentOwner,
        repo: contentRepo,
        base: contentDefaultBranch,
        head,
        title: `Edit ${contentPath}`,
      });
      setPullrequest(html_url);
      setAnnouncement('Changes submitted');
    }
  };

  const init = async () => {
    // const github = await requestAuthorization();
    // setGithub(github);
  };

  const open = async () => {
    const { owner, repo } = await requestRepo(github.user, contentRepo);
    const branch = await requestBranch(owner, repo, contentBranch);
    await requestContent(owner, repo, branch, contentPath);
  };

  const save = async () => {
    if (dirty) {
      const { owner, repo } = await requestRepo(github.user, contentRepo);
      const branch = await requestBranch(owner, repo, contentBranch);
      await requestCommit(owner, repo, branch, contentPath);
    }
  };

  const submit = async () => {
    const { owner, repo } = await requestRepo(github.user, contentRepo);
    const branch = await requestBranch(owner, repo, contentBranch);
    if (dirty) {
      await requestCommit(owner, repo, branch, contentPath);
    }
    await requestPull(owner, branch);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
    setAnnouncement('Getting ready...');
    // init();
    setAnnouncement('Ready to edit');
  }, []);

  // useEffect(() => {
  //   if (github.user && github.api) {
  //     open();
  //   }
  // }, [github]);

  useEffect(() => {
    setDirty(currentContent !== savedContent);
  }, [currentContent, savedContent]);

  return (
    <>
      <Head>
        <title>Editor | {filePath}</title>
      </Head>
      {true ? (
        <div className={clsx('editor', className)}>
          <div className='editor__announcements padding-horiz--md padding-vert--xs'>
            {announcement}
          </div>
          <EditorMenu
            editor={editor}
            save={save}
            submit={submit}
            dirty={false}
            syncing={syncing}
            pullrequest={pullrequest}
          />
          <EditorPage editor={editor} />
        </div>
      ) : (
        <EditorLogin />
      )}
    </>
  );
}
