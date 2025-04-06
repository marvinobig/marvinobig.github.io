module.exports = function (eleventyConfig) {
    // Set custom directories for input, output, includes, and data
    eleventyConfig.addPassthroughCopy("styles/style.css");
    return {
        passthroughFileCopy: true,
        dir: {
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};


