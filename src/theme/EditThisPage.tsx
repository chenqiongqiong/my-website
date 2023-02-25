import React from 'react';
import URI from 'urijs';
import { usePluginData } from '@docusaurus/useGlobalData';
import { useLocation } from '@docusaurus/router';
import Translate from '@docusaurus/Translate';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { EditorData } from './Editor';

interface EditThisPageProps {
  editUrl: string;
}

export default function EditThisPage({ editUrl }: EditThisPageProps) {
  const { pathname } = useLocation();
  const activePlugin = useActivePlugin();

  const getPath = () => {
    if (activePlugin) {
      const {
        pluginData: { path },
      } = activePlugin;

      const relativePath = new URI(pathname).relativeTo(path + '/');
      return '';
    }
  };

  const editPath = getPath();

  return (
    <>
      {editPath && (
        <>
          <a href={editPath} target='_blank' rel='noreferrer noopener'>
            Open in editor
          </a>
          <span className='margin-horiz--sm'>|</span>
        </>
      )}
      <a href={editUrl} target='_blank' rel='noreferrer noopener'>
        <Translate
          id='theme.common.editThisPage'
          description='The link label to edit the current page'
        >
          Open on GitHub
        </Translate>
      </a>
    </>
  );
}
