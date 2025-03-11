import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./src/mcp-server/mcp-server.mts'],
  outfile: './bin/mcp-server.mjs',
  sourcemap: true,
  platform: 'node',
  format: 'esm',
  minify: false,
  bundle: true,
  packages: 'external',
  external: ['node:*'],
  banner: {
    js: '#!/usr/bin/env node',
  },
})