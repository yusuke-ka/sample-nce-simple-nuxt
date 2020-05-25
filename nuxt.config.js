module.exports = {
  modules: [
    [
      "nuxt-custom-elements",
      {
        polyfill: true,
        entries: [
          {
            name: "ComponentHelloWorld",
            tags: [
              {
                name: "ComponentHelloWorld",
                path: "@/pages/index",
                options: {
                  props: {},
                  shadow: false,
                },
              },
            ],
          },
        ],
      },
    ],
  ],
};
