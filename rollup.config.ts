// rollup.config.js https://www.npmjs.com/package/@rollup/plugin-typescript
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
// https://www.npmjs.com/package/@rollup/plugin-alias
// import alias from '@rollup/plugin-alias';
// https://www.npmjs.com/package/@rollup/plugin-node-resolve
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },  
  plugins: [
    typescript({declaration:true, lib: ["es2020","esNext","es5","es6", "dom"], target: "es5"}),
    babel({ babelHelpers: 'runtime' }),
    nodeResolve()
  ],
  external: ["lodash","webpack","babel","ts-node","typescript","jquery-ui","jquery-ui-dist","jquery","angular", "react","karma","eslint"]
};