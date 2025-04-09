export default function (eleventyConfig) {
    // Set custom directories for output, includes, and data
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    eleventyConfig.addCollection("latest", function (collectionApi) {
        return collectionApi.getFilteredByTag("post").sort(function (a, b) {
            return b.date - a.date;
        }).slice(0, 4);
    });

    eleventyConfig.addFilter("germanDate", function (dateInput) {
        const dateObj = new Date(dateInput);
        const germanDays = [
            "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
        ];
        const germanMonths = [
            "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
            "August", "September", "Oktober", "November", "Dezember"
        ];

        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const weekday = dateObj.getDay();

        return `${germanDays[weekday]}, ${day}. ${germanMonths[month]} ${year}`;
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input : "src",
            includes: "_includes",
            data: "_data",
            output: "dist"
        }
    };
};


