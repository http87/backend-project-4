import fs from 'fs';
import axios from 'axios';
import path from 'path';
import * as cheerio from 'cheerio';
import { URL } from 'url';

const { promises: fsp } = fs;

const imgCreator = (imgUrl, newSrc) => axios.get(imgUrl, { responseType: 'arraybuffer' })
  .then((response) => fsp.writeFile(newSrc, response.data));

const imgSrcChangerAndImgCreator = (hostname, html, dirPath) => {
  const $ = cheerio.load(html);
  const hostnameReplace = hostname.replace(/[^a-zA-Z0-9]/g, '-');
  $('img').each((i, img) => {
    const oldSrc = img.attribs.src;
    const srcReplace = oldSrc.replace(/\//g, '-');
    const newSrc = `${hostnameReplace}${srcReplace}`;
    const imgUrl = path.join(oldSrc, oldSrc);
    imgCreator(imgUrl, newSrc);
    $(this).attr('src', newSrc);
  });
  const htmlData = $.html();
  return htmlData;
};

const imgLoader = (url, filePath, dirPath) => {
  const { hostname } = new URL(url);
  const result = axios.get(url)
    .then(() => fsp.readFile(path.join(process.cwd(), '__fixtures__/test.html'), 'utf-8'))
    .then((data) => {
      const htmlData = imgSrcChangerAndImgCreator(hostname, data, dirPath);
      return fsp.writeFile(filePath, htmlData);
    }).catch((err) => console.log(err));
  return result;
};

export default imgLoader;
