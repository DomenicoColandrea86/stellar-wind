'use strict';

const nodemon = require('nodemon');
const path = require('path');
const chalk = require('chalk');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction)
    require('./config/bundler.js')();

nodemon({
    execMap: {
        js: 'node'
    },
    script: path.join(__dirname, 'src/app/index'),
    ignore: [],
    watch: !isProduction ? ['src/app/*'] : false,
    ext: 'js'
}).on('restart', () => {
    console.log(chalk.green('Backend restarted!'));
});
