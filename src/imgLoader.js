import fs from "fs";
import axios from "axios";
import path from "path";
import * as cheerio from "cheerio";
import urlParse, { URL } from 'url';

const { promises: fsp } = fs;

const imgSrcChanger = (hostname, html, dirPath) => {
  const $ = cheerio.load(html);
  $("img").each(function() {
    const hostnameReplace = hostname.replace(/[^a-zA-Z0-9]/g, '-');
    const oldSrc = $(this).attr('src');
    const srcReplace = oldSrc.replace(/\//g, '-');
    const newSrc = `${dirPath}/${hostnameReplace}${srcReplace}`;
    $(this).attr("src", newSrc);
  });
  return $.html();
};

const imgLoader = (url, filePath, dirPath) => {
  const address = new URL(url);
  const hostname = address.hostname;

  return axios.get(url).then((response) => {
    // const html = response.data;
    return fsp.readFile(path.join(process.cwd(), '__fixtures__/test.html'), 'utf-8');
  }).then((html) => {
    const htmlWithNewImgSrc = imgSrcChanger(hostname, html, dirPath);
    return fsp.writeFile(filePath, htmlWithNewImgSrc);
  }).catch((err) => console.log(err));
};

export default imgLoader;
