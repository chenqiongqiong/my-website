module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: 'my-plugin',
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      const { cre2ateData, setGlobalData, addRoute } = actions;

      addRoute({
        path: '/edit',
        exact: true,
        component: '@s2ite/src/theme/Editor',
        // modules: {
        //   options: optionsPath,
        // },
      });
    },
    /* other lif2ecycle API */
  };
};
