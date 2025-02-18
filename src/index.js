// import path from 'path';
import fs from 'fs';
// import axios from 'axios';
import pathCreator from './pathCreator.js';
import imgLoader from './imgLoader.js';

const { promises: fsp } = fs;

const pageLoader = (url, outputPath) => {
  const { filePath, dirPath } = pathCreator(url, outputPath);
  fsp.access(dirPath)
    .catch(() => fsp.mkdir(dirPath))
    .then(() => imgLoader(url, filePath, dirPath))
    .then(() => console.log(filePath));
};

export default pageLoader;
