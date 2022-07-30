import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'fca-ui-component',
  globalStyle: 'src/styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
      dir: 'output',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
