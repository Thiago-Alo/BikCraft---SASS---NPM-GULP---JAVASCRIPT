const Jimp = require("jimp");
const fs = require('fs');
const imagens = fs.readdirSync('./imagens/');

imagens.forEach(function(arquivo) {
  Jimp.read('imagens/' + arquivo).then(function(imagem) {
    imagem
    .cover(1000, 400)
    .greyscale()
    .write('images_otimizadas/' + arquivo);
  }).catch(function(err) {
    console.error(err);
  });
});

//node js/components/jimp/jimp.js
