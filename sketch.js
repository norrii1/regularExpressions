var textfield
var output
var submit

function setup( ) {
  noCanvas( )
  textfield = select('#input')
  submit = select('#submit')
  submit.mousePressed(newText)
  output = select('#output')
}





  //  MAKE SURE EMAIL IS ENTERED CORRECTLY

// function newText( ) {
//   var s = textfield.value();

//   var r = /\w+@\w+\.(net|com|org)/;
//   createP(r.test(s));
// }

// MATCH PHONE NUMBERS
// 
function newText() {
  var s = textfield.value();

  var r = /\d/g;
  var matches = s.match(r);
  console.log(matches)

  for (var i =0; i < matches.length; i++){
    createP(matches[i]);
  }
}

//  CAPTURING GROUPS
// 
// function newText() {
//   var s = textfield.value();

//   var r = /\d{4}[-]\d{2}/;
//   var matches = s.match(r);
//   console.log(matches)
//   for (var i = 0; i < matches.length; i++) {
//     createP(matches[i]);
   
//   }
// }

// EXEC
// 
// function newText() {
  // var s = textfield.value();

  // var r = /(\d{3})[-.]\d{4}/g;

  // var results;
  // while(results = r.exec(s)) {  <--- WILL RUN UNTIL NULL
    // createP(results[0]); 
    // 310-3222
    // 564 - 3223
    // 234 - 4444
    // or
    // createP(results[1]); 
    // 310
    // 564
    // 234
  // }
// }

// SPLIT 
// 
// function newText( ) {
  // var s = textfield.value();
  // var r = /[.!?]+/; // <-- SPLIT BY PUNCTUATION MARK
  // var r = /[A-Z]+/g; //<-- SPLIT BY CAPITAL LETTERS
  // var r = /\W+/; // <-- SPLIT BY ANY NON WORD CHARACTERS
//   var words = s.split(r);
//   console.log(words)
//   for (var i = 0; i < words.length; i++) {
//   createP(words[i])
//   }
// }

// REPLACE
//
// function newText( ) {
//   var s = textfield.value( );
//   var r = /\b\w+\b/g;

//   var newString = s.replace(r, replacer);
//   console.log(newString);
//   createP(newString);
// }

// function replacer(match) {
//   // console.log(match);
//   if(match.length == 5) {
//     return match.toUpperCase( );
//   } else {
//     return match
//   }
// }

// function newText( ) {
//   var s = textfield.value()
  
//   var r = /(\d{3})-(\d{4})/g
//   let newString = s.replace(r, replacer)
//   createP(newString)
// }

// function replacer(match, group1, group2) {
//   // console.log(match);
//   // console.log(group1);
//   // console.log(group2);
//   console.log(match,)
//     return match
//   }