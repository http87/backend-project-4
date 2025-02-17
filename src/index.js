// import path from 'path';
import fs from 'fs';
// import axios from 'axios';
import pathCreator from './pathCreator.js';
import imgLoader from './imgLoader.js';
import dirCreator from './dirCreator.js';

const { promises: fsp } = fs;

const pageLoader = (url, outputPath) => {
  const { filePath, dirPath } = pathCreator(url, outputPath);
  if (!fs.existsSync(dirPath)) {
    const promiseDirCreator = fsp.mkdir(dirPath);
  }
  return imgLoader(url, filePath, dirPath).then(() => {
    console.log(filePath);
  });
};

export default pageLoader;
