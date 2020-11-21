module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    // Aliases tests
    "components(.*)$": "<rootDir>/src/components$1",
    "Helpers(.*)$": "<rootDir>/src/Helpers$1",
  },
};
