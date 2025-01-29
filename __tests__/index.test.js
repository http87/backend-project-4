import os from 'os';
import fs from 'fs';
import path from 'path';
import pageLoader from '../src/index.js';

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
