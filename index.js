const exiftool = require('node-exiftool')
const exiftoolBin = require('dist-exiftool')
const ep = new exiftool.ExiftoolProcess(exiftoolBin)

ep
  .open()
  // display pid
  .then((pid) => console.log('Started exiftool process %s', pid))
  .then(() => ep.readMetadata('Rajasekar.pdf'
    // , ['-File:all']
  ))
  .then(console.log, console.error)
  .then(() => ep.readMetadata('angularjs_tutorial.pdf'
    // , ['-File:all']
  ))
  .then(console.log, console.error)
  .then(() => ep.close())
  .then(() => console.log('Closed exiftool'))
  .catch(console.error)

// var exif = require('exiftool');
// var fs = require('fs');

// fs.readFile('Rajasekar.pdf', function (err, data) {
//   if (err)
//     throw err;
//   else {
//     exif.metadata(data, function (err, metadata) {
//       if (err)
//         throw err;
//       else
//         console.log(metadata);
//     });
//   }
// });