import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'app/index.js',
  dest: 'public/bundle.js',
  format: 'iife',
  plugins: [
    nodeResolve({
      jsnext: true,
      module: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: ['node_modules/symbol-observable/**']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};