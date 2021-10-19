// rollup.config.js https://www.npmjs.com/package/@rollup/plugin-typescript
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
// https://www.npmjs.com/package/@rollup/plugin-alias
import alias from '@rollup/plugin-alias';
// https://www.npmjs.com/package/@rollup/plugin-node-resolve
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es'
  },  
  plugins: [
    typescript({declaration:true, lib: ["es2020","es5","es6", "dom"], target: "es5"}),
    babel({ babelHelpers: 'bundled' }),
    nodeResolve(),
    alias({
      entries: [
        { find: 'utils', replacement: '../../../utils' },
        { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
      ]
    })
  ],
  external: ["angular", "react"]
};