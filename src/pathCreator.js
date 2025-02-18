import path from 'path';

const pathCreator = (url, outputPath) => {
  const urlSplit = url.split('://');
  const deleteSymbols = urlSplit[1].replace(/[^a-zA-Z0-9]/g, '-');
  const fileName = `${deleteSymbols}.html`;
  const dirName = `${deleteSymbols}_file`;
  const dirPath = path.resolve(outputPath, dirName);
  const filePath = path.resolve(outputPath, fileName);
  return { filePath, dirPath };
};

export default pathCreator;
