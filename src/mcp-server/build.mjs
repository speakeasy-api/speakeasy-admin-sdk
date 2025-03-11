import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./src/mcp-server/mcp-server.mts'],
  outfile: './bin/mcp-server.mjs',
  sourcemap: true,
  platform: 'node',
  format: 'esm',  // ✅ Keep ESM output
  target: 'node20', // ✅ Ensures compatibility with modern ESM
  minify: false,
  bundle: true, // ✅ Fully bundle all dependencies from node_modules
  external: ['node:*'], // ✅ Keep only built-in Node modules external
  banner: {
    js: `#!/usr/bin/env node\nimport { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
  },
  loader: {
    '.cjs': 'js', // ✅ Convert CommonJS files to ESM
    '.js': 'js',
  },
});
