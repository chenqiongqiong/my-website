module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: 'my-plugin',
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      const { createData, setGlobalData, addRoute } = actions;

      addRoute({
        path: '/edit',
        exact: true,
        component: '@site/src/theme/Editor',
        // modules: {
        //   options: optionsPath,
        // },
      });
    },
    /* other lifecycle API */
  };
};