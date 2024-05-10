module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')({
        // Add autoprefixer options here
        tailwindcss: {},
        autoprefixer: {},
      }),
      // Add any other PostCSS plugins here
    ]
  }
  