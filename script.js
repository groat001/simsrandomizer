/*EYE*/
var eyecolors = ["vio", "gren", "blu", "gre", "bro",
"haz", "romia"];

$(document).ready(function() {
 $('#spin-bbb').click(function() {
   var output = eyecolors.length,
     randomNumber = Math.floor(Math.random() * output),
     eyecolor_container = $('#eyecolor-output');

   var eyecolor = eyecolors[randomNumber];
   eyecolor_container.removeClass(); //Cleanup previous color classes
   eyecolor_container.addClass(eyecolor);
 });
});

/*ZODIAC*/

var shortmonths = ["scor",
"vir", "gemi", "pisc", "lib", "canc", "aquar",
"leonar", "sagit", "ari", "capri", "taur",
];

$(document).ready(function() {
 $('#spin-mmm').click(function() {
   var output = shortmonths.length,
     randomNumber = Math.floor(Math.random() * output),
     shortmonth_container = $('#shortmonth-output');


   var shortmonth = shortmonths[randomNumber];
   shortmonth_container.removeClass();
  //Cleanup previous color classes
   shortmonth_container.addClass(shortmonth);
 });
});

/*HAIR COLOR*/

var hhhairs = ["blon", "redded", "blac", "brbr"];

$(document).ready(function() {
 $('#spin-hh').click(function() {
   var output = hhhairs.length,
     randomNumber = Math.floor(Math.random() * output),
     hhhair_container = $('#hhhair-output');

   var hhhair = hhhairs[randomNumber];
   hhhair_container.removeClass(); //Cleanup previous color classes
   hhhair_container.addClass(hhhair);
 });
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
