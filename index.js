if (process.argv.length < 3) {
  process.argv.push('build')
  console.log(`No command specified, defaulting to 'build'`)
}
require('@3xpo/create-index/dist/index.js')
