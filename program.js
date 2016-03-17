//==============================
//beep boop challege 1 of 14
//==============================

// console.log('beep boop');


//==============================
//meet pipe challege 2 of 14
//==============================

// var fs = require('fs');
// var article = process.argv[2]
//
// fs.createReadStream(article).pipe(process.stdout);


//==============================
// input output challenge 3 of 14
//==============================

// process.stdin.pipe(process.stdout)


//==============================
//Transform challenge 4 of 14
//==============================

// var through = require('through2');
// var transform = through(write);
//
// function write(buffer, encoding, next) {
//   var buffer = buffer.toString().toUpperCase();
//   this.push(buffer);
//   next();
// }
//
// function end(done) {
//   done();
// }
//
// process.stdin
//   .pipe(transform)
//   .pipe(process.stdout)


//==============================
//Lines 5 of 14
//==============================

// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function(buf, _, next) {
//   var line = buf.toString();
//   this.push(lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
//   lineCount++;
//   next();
// });
// process.stdin
//   .pipe(split())
//   .pipe(tr)
//   .pipe(process.stdout);



//=============================
//Concat 6 of 14
//=============================

// var concat = require('concat-stream');
//
//   process.stdin.pipe(concat(function (src) {
//       var s = src.toString().split('').reverse().join('');
//       console.log(s);
//   }));
  

  //=============================
  //Concat 7 of 14
  //=============================







//
