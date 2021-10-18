// rollup.config.js https://www.npmjs.com/package/@rollup/plugin-typescript
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  sourcemap: true,
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [
    typescript({lib: ["es2020","es2015","es5", "dom"], target: "es2015"}),
    babel({ babelHelpers: 'bundled' })
  ],
  external: ["angular", "react"]
};