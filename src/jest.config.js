module.exports = {
    preset: 'react-native',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css$': 'jest-css-modules',
    },
    transformIgnorePatterns: [
        "/node_modules/( )",
    ],
};
