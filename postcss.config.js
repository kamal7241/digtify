module.exports = {
  plugins: [
    // require('autoprefixer'), // Apply vendor prefixes
    // require('postcss-at-rules-variables'), // Allow imports in conditional blocks
    // require('postcss-conditionals'), // Add conditional rule processing
    // require('rtlcss') // Convert only when needed


    // require('autoprefixer'), // Apply vendor prefixes
    // require('rtlcss') // Convert only when needed

    // require('autoprefixer'),
    // require('postcss-rtl')({
    //   // Enable flipping for the .rtl class only
    //   onlyDirection: 'rtl',
    //   // Add a custom selector, so it only affects the .rtl block
    //   addPrefix: true,
    // })

    // require('autoprefixer'),
    // require('postcss-rtl')({
    //   // Only process CSS inside the .rtl selector
    //   // onlyDirection: 'rtl',  // Only generate RTL
    //   addPrefix: '.rtl-prefix',  // No prefix needed, we'll handle scoping manually
    //   processUrls: false,  // Skip URL flipping
    //   processKeyFrames: false,  // Skip keyframe conversion
    //   // blacklist: ['ltr'],  // Prevent rtlcss from affecting the .ltr block
    // })
  ]
};
