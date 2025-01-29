import path from 'path';
import fs from 'fs';
import axios from 'axios';

const { promises: fsp } = fs;

const fileNameCreator = (url, outputPath) => {
  const urlSplit = url.split('://');
  const deleteSymbols = urlSplit[1].replace(/[^a-zA-Z0-9]/g, '-');
  const fileName = `${deleteSymbols}.html`;
  const pathToFile = path.resolve(outputPath, fileName);
  return pathToFile;
};

const pageLoader = (url, outputPath) => {
  const pathWriteFile = fileNameCreator(url, outputPath);
  axios.get(url).then((urlData) => {
    fsp.writeFile(pathWriteFile, urlData.data);
  }).catch((err) => console.log(err));
  console.log(pathWriteFile);
  return pathWriteFile;
};

export default pageLoader;
