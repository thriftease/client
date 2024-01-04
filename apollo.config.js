// apollo.config.js
require("dotenv").config();
module.exports = {
  client: {
    service: {
      name: 'thriftease',
      // URL to the GraphQL API
      url: process.env.API_URL,
    },
    // Files processed by the extPension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
};