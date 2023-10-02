/*EYE*/
var colors = ["violet",
"grey", "grey2", "grey3",
"blue", "blue2", "blue3", "blue4", "blue5", "blue6", "blue7",
"green","green2",
"brown", "brown2", "brown3", "brown4", "brown4", "brown5", "brown6", "brown7",
"brown8", "brown9", "brown10", "brown11", "brown12", "brown13",
"hazel","hazel2","hazel3",
"heterochromia"];
/*16 total eye colors, 30 total*/

$(document).ready(function() {
 $('#spin-btn').click(function() {
   var output = colors.length,
     randomNumber = Math.floor(Math.random() * output),
     color_container = $('#color-output');

   var color = colors[randomNumber];
   color_container.removeClass(); //Cleanup previous color classes
   color_container.addClass(color);
 });
});

/*ZODIAC*/

var months = ["scorpio", "scorpio2", "scorpio3", "scorpio4",
"virgo", "virgo2", "virgo3", "virgo4",
"gemini", "gemini2", "gemini3", "gemini4",
"pisces", "pisces2", "pisces3",  "pisces4",
"libra", "libra2", "libra3",
"cancer", "cancer2", "cancer3",
"aquarius", "aquarius2",
"leo", "leo2", "leo3",
"sagittarius", "sagittarius2", "sagittarius3",
"aries", "aries2", "aries3",
"capricorn", "capricorn2", "capricorn3",
"taurus", "taurus2", "taurus3"
];

$(document).ready(function() {
 $('#spin-mth').click(function() {
   var output = months.length,
     randomNumber = Math.floor(Math.random() * output),
     month_container = $('#month-output');


   var month = months[randomNumber];
   month_container.removeClass();
  //Cleanup previous color classes
   month_container.addClass(month);
 });
});

/*HAIR COLOR*/

var hairs = ["blonde", "blonde2", "blonde3",
"red", "red2",
"black","black2","black3","black4","black5","black6","black7","black8","black9","black10",
"black11","black12","black13","black14","black15",
"darkbr","darkbr2","darkbr3","darkbr4","darkbr5", "darkbr6", "darkbr7",
"darkbr8", "darkbr9", "darkbr10",];

$(document).ready(function() {
 $('#spin-h').click(function() {
   var output = hairs.length,
     randomNumber = Math.floor(Math.random() * output),
     hair_container = $('#hair-output');

   var hair = hairs[randomNumber];
   hair_container.removeClass(); //Cleanup previous color classes
   hair_container.addClass(hair);
 });
});



/*GENDER*/

var NumberOfWords = 2

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Female"
words[2] = "Male"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this

}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]

}
$(document).ready(function() {
$('#fadegen').click(function() {
  var sentences = [
    'Male',
    'Female'
  ];

  var rand = sentences[Math.floor(Math.random() * sentences.length)];
  $('#gender').fadeOut(100, function() {
    $('#gender').text(rand);
    $('#gender').fadeIn(50, function() {
      // Animation complete
    });
  });
});
});

const target = document.querySelector('#target');
document.querySelector('button').addEventListener('click', () => {
  target.classList.contains('fade')
    ? target.classList.remove('fade')
    : target.classList.add('fade');
});



/*
var colors = ["violet", "grey", "blue", "green","brown"];

$(document).ready(function() {
 $('#spin-btn').click(function() {
   var output = colors.length,
     randomNumber = Math.floor(Math.random() * output),
     color_container = $('#color-output');

   var color = colors[randomNumber];
   color_container.removeClass(); //Cleanup previous color classes
   color_container.addClass(color);
 });
});
*/
