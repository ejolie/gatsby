module.exports = {
  rootDir: `../`,
  roots: [`<rootDir>/integration-tests`],
  testPathIgnorePatterns: [
    `/examples/`,
    `/www/`,
    `/dist/`,
    `/node_modules/`,
    `__tests__/fixtures`,
    `.cache`,
  ],
  transform: { "^.+\\.js$": `<rootDir>/jest-transformer.js` },
}
