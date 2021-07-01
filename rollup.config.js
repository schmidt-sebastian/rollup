import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import typescriptPlugin from '@rollup/plugin-typescript';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
        input: 'index.ts',
        output: {
                file: 'bundle.js',
                format: 'iife',
                sourcemap: true
        },
        plugins: [
                resolve(),
                typescriptPlugin(),  
                commonjs(),
		    terser({
		      format: {
		        comments: false
		      },
		      mangle: { toplevel: true },
		      compress: false
		    }),

  visualizer({sourcemap:true})
        ]
};
