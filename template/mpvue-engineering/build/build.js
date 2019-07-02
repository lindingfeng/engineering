require('./check-versions')()

const chalk = require('chalk')
const argvLast = process.argv[process.argv.length - 1]
if (argvLast === 'swan' || argvLast === 'tt' || argvLast === 'wx' || argvLast === 'my') {
  console.log(chalk.red('请输入需要构建的project. eg: npm run build 项目名称'));
  process.exit(0);
}
process.env.NODE_ENV = 'production'
process.env.PLATFORM = process.argv[process.argv.length - 2] || 'wx'
process.env.PROJECT_NAME = argvLast || 'demo'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var utils = require('./utils')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, '*'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    if (process.env.PLATFORM === 'swan') {
      utils.writeFrameworkinfo()
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
