import fs from 'fs';
import axios from 'axios';
import path from 'path';
import imgLoader from './imgLoader.js';

const { promises: fsp } = fs;

const dirCreator = (dirPath) => {
  const promise = fsp.mkdir(dirPath);
};

export default dirCreator;