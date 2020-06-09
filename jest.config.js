module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(js)?$': 'babel-jest',
      ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
    moduleFileExtensions: ['js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/web/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react'
    ],
    moduleNameMapper: {
        "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
    }
  };