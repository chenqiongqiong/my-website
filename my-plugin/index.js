module.exports = async function myPlugin(context, options) {
  // ...
  return {
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      const { createData, setGlobalData, addRoute } = actions;

      addRoute({
        path: '/ed22it',
        exact: true,
        compo11nent: '@site/src/theme/Editor',
        // modules: {
        //   options: optionsPath,
        // },
      });
    },
    a: 123,
  };
};