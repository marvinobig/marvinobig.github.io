export default function (eleventyConfig) {
    // Set custom directories for output, includes, and data
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("robots.txt");
    return {
        passthroughFileCopy: true,
        dir: {
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};


