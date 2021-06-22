module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        fonts:'Assistant\ :Bold,Light,700',
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-plugin-fontawesome-css`
  ]
};
