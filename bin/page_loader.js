#!/usr/bin/env node

import { program } from 'commander';
import pageLoader from '../src/index.js';

program
  .description('Page loader utility')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')
  .option('-o, --output [dir]', 'output dir: (default: "current dir")', process.cwd())
  .argument('<url>')
  .action((url, options) => {
    pageLoader(url, options.output);
  });

program.parse(process.argv);
