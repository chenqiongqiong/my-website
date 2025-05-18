module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: 'my-plugin',
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      const { crea11Route } = actions;

      addRoute({
        path: '/edivvvvvt',
        exact: true,
        compo11nent: '@site/src/theme/E11tor',
        // modules: {
        //   options: optionsPath,
        // },
      });
    },
    /* other 4455 API */
  };
};
