// rollup.config.js https://www.npmjs.com/package/@rollup/plugin-typescript
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es'
  },  
  plugins: [
    typescript({declaration:true, lib: ["es2020","es5","es6", "dom"], target: "es5"}),
    babel({ babelHelpers: 'bundled' })
  ],
  external: ["angular", "react"]
};