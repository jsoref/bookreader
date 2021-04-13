/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'tests/karma/*/*.test.js', type: 'module' },
      ],
      reporters: ['progress', 'coverage'],
      preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'src/iaux-*/*.js': ['coverage']
      },
      coverageReporter: {
        includeAllSources: true,
        dir: 'coverage-karma/',
        reporters: [
          { type: "html", subdir: "html" },
          { type: 'text-summary' }
        ]
      },
      esm: {
        nodeResolve: true,
      },
      // you can overwrite/extend the config further
    }),
  );
  return config;
};
