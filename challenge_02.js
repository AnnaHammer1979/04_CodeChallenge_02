/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

let firstName = prompt("Bitte Namen eingeben:");
let age = prompt("Bitte Alter eingeben:");

if (firstName == "") { // empty string
    firstName = "Unbekannt";
}

console.log(firstName + ", " + age + " Jahre alt")

if (age >= 0 && age <= 5 && age != "") { // 0-5
    console.log("Milch.");
} else if (age >= 6 && age <= 12) { // 6-12
    console.log("Milch und Saft.");
} else if (age >= 13 && age <= 17) { // 13-17
    console.log("Milch, Saft und Cola.");
} else if (age >= 18) { // 18+
    console.log("Milch, Saft, Cola und Wein.");
} else { // negative number or NaN
    console.log("Ungültiges Alter.")
};
