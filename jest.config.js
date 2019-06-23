/* eslint-disable max-len */
module.exports = {
    setupFiles: ["<rootDir>/client/__tests__/setup.js"],
    collectCoverageFrom: [
        "<rootDir>/client/src/**/*.{js,jsx}",
        "!<rootDir>/client/src/**/index.js",
        "!<rootDir>/client/src/config/*.js",
        "!<rootDir>/client/tests/**/*.(spec|test).{js,jsx}"
    ],
    moduleNameMapper: {
        ".+\\.(css|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "jest-transform-stub",
        "^@components/(.*)$": "<rootDir>/client/src/components/$1",
        "^@helpers/(.*)$": "<rootDir>/client/src/helpers/$1",
        "^@reducers/(.*)$": "<rootDir>/client/src/reducers/$1",
        "^@actions/(.*)$": "<rootDir>/client/src/actions/$1",
        "^@constant/(.*)$": "<rootDir>/client/src/constants/$1",
        "^@containers/(.*)$": "<rootDir>/client/src/containers/$1",
        "^@utils/(.*)$": "<rootDir>/client/src/utils/$1",
        "^@config/(.*)$": "<rootDir>/client/src/config/$1",
        "^@base/(.*)$": "<rootDir>/client/public/$1"
    },
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules",
        "<rootDir>/server/",
        "<rootDir>/client/src/index.jsx",
        "<rootDir>/client/src/store/configureStore.js",
        "<rootDir>/client/e2e-tests/"
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
    testMatch: [
        "<rootDir>/client/__tests__/**/*.(spec|test).{js,jsx}",
    ],
    transform: {
        "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
};
