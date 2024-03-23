if (process.argv.length < 3) {
  process.argv.push('build');
  console.log(`No command specified, defaulting to 'build'`);
}
globalThis._no_boxen_createindex = 1;
require('@3xpo/create-index/dist/index.cjs');
