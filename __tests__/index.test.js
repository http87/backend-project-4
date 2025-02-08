import os from 'os';
import fs from 'fs';
import path from 'path';
import pageLoader from '../src/index.js';
import imgLoader from '../src/imgLoader.js';

const { promises: fsp } = fs;
const url = 'https://ru.hexlet.io/courses';
let tmpDir;

beforeEach(async () => {
  tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

test('create file', async () => {
  const filePath = await pageLoader(url, tmpDir);
  expect(filePath).not.toBeNull();
});

test('cheerio', async () => {
  const pathHTML = path.join(process.cwd(), '__fixtures__/test.html');
  const html = await fsp.readFile(pathHTML, 'utf-8');
  await imgLoader(html);
});
