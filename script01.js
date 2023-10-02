var arr1 = ["Short", "Medium", "Long"],
arr2 = ["Straight", "Bisexual", "Gay/Lesbian"],
arr3 = ["Toddler", "Child", "Teenager", "Young Adult", "Adult", "Elder"],
arr4 = ["Fertile", "Infertile", "Fertile", "Fertile", "Fertile"],
arr5 = ["Single", "Boy/GirlFriend", "Engaged", "Married"],
arr6 = ["Human", "Human", "Human", "Human", "Human", "Human", "Human",
"Witch", "Werewolf", "Vampire", "Fairy", "Ghost", "Genie", "Ailen"],
arr7 = ["Voice 1, Low", "Voice 1, Mid", "Voice 1, High",
"Voice 2, Low", "Voice 2, Mid", "Voice 2, High",
"Voice 3, Low", "Voice 3, Mid", "Voice 3, High"],
arr8 = ["Skinny", "Medium", "Thick"];

function showRandomFrom(chosenArray){
  document.getElementsByClassName("rand")[0].innerHTML = chosenArray[Math.floor(Math.random() * chosenArray.length)];
}
