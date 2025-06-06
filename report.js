const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/42772182-1502658b-885c-4e8e-9f31-9bd3bc31e488?access_key=${process.env.access_key}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/ in the current working directory.
        } 
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
    