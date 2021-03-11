module.exports = {
  clearMocks: true,
  preset: 'ts-jest/presets/js-with-ts',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.test.js', '*.test.ts']
}
