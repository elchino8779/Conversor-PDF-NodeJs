const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const libre = require('libreoffice-convert');
libre.convertAsync = require('util').promisify(libre.convert);

const files = fs.readdirSync(path.join(__dirname, '/input'));

async function ConvertToPDF(file) {
  const ext = '.pdf';
  const inputPath = path.join(__dirname, `/input/${file}`);

  const name = file.split('.')[0];
  const outputPath = path.join(__dirname, `/output/${name}${ext}`);

  const docxBuf = await fsPromises.readFile(inputPath);

  let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

  await fsPromises.writeFile(outputPath, pdfBuf);
}

files.forEach((file) =>
  ConvertToPDF(file)
    .then(function () {
      console.log(`Archivo ${file} convertido exitosamente!`);
      console.log('');
    })
    .catch(function (err) {
      console.log(`Error al convertir el archivo ${file}`);
      console.log('');
    })
);
