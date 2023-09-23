"use strict";
let PersonName = "Muhammad saif ur rehman";
// Step 1 show in lower case
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
// step 2 show uppercase
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
// step 3 show name in titlecase
let words = PersonName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
