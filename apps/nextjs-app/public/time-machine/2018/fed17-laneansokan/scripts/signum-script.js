/*
Script for website "Låneansökan"
Created by Daniel Giljam, 2017
*/

let birthdate;
let birthday;
let gender;

function signumOnFocus() {
    console.log("signumOnFocus was called");
}

function signumOnBlur(element) {
    console.log("signumOnBlur was called");
    if (element.value !== "") {
        console.log("found value in input-field");
        element.value = element.value.toUpperCase().trim();
        console.log("initiating validation of " + element.value + "...");
        signumValidation(element);
    } else {
        console.log("no input-field value");
        document.getElementById("signum-output").innerHTML = "";
        document.getElementById("birthday").innerHTML = "";
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        refref = null;
        birthdate = null;
        birthday = null;
        gender = null;
        signumIsGo = false;
        areBothGo();
    }
}

function signumValidation(element) {
    let theBigBool;
    let breakdown = lvl1Validation(element.value);
    if (breakdown !== null) {

        let birthdateCollapsed = {"day": parseInt(breakdown[2]), "month": parseInt(breakdown[3]), "year": parseInt(breakdown[4])};
        let birthdateFullYear;

        switch (breakdown[5]) {
            case "+":
                birthdateFullYear = "18" + breakdown[4];
                break;
            case "-":
                birthdateFullYear = "19" + breakdown[4];
                break;
            case "A":
                birthdateFullYear = "20" + breakdown[4];
                break;
        }

        let theBigNumber = parseInt(breakdown[1] + breakdown[6]);
        refref = breakdown[1] + breakdown[6];

        if (birthdateFullYear <= (new Date()).getFullYear()) {
            // This awesome date-verification design was made by RobG @ stackoverflow.com!
            let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((parseInt(birthdateFullYear) % 4 === 0 && parseInt(birthdateFullYear) % 100 !== 0) || (parseInt(birthdateFullYear) % 400 === 0)) {
                daysInMonth[1] = 29;
            }
            if (birthdateCollapsed.day <= daysInMonth[--birthdateCollapsed.month]) {
                theBigBool = lvl2Validation(theBigNumber, breakdown[7]);
                if (theBigBool === true) {
                    let isoString = birthdateFullYear + "-" + breakdown[3] + "-" + breakdown[2];
                    let birthdateObject = new Date(isoString);
                    let weekDays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
                    birthdate = birthdateObject.toISOString().slice(0, 10);
                    birthday = weekDays[birthdateObject.getDay()];
                    if (parseInt(breakdown[0].split("")[9]) % 2 === 0) {
                        gender = "female";
                    } else {
                        gender = "male";
                    }
                    console.log("birthdate: " + birthdate);
                    document.getElementById("birthday").innerHTML = birthday;
                    console.log("gender: " + gender);
                }
            } else {
                theBigBool = false;
            }
        } else {
            theBigBool = false;
        }

    } else {
        theBigBool = false;
    }
    if (theBigBool === true) {
        console.log("validation successful");
        document.getElementById("signum-output").innerHTML = "";
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        signumIsGo = true;
        areBothGo();
    } else {
        console.log("validation failed");
        document.getElementById("signum-output").innerHTML = "Personnumret måste överensstämma med de finländska bestämmelserna för personnummer.";
        document.getElementById("birthday").innerHTML = "";
        element.style.borderStyle = "solid";
        element.style.borderColor = "red";
        refref = null;
        birthdate = null;
        birthday = null;
        gender = null;
        signumIsGo = false;
        areBothGo();
    }
}

function lvl1Validation(string) {
    let regex = /^(([0-2][0-9]|30|31)(0[0-9]|1[0-2])([0-9]{2}))([+\-A])([0-9]{3})([0-9A-Y])$/i;
    return regex.exec(string);
}

function lvl2Validation(bigNumber, controlChar) {
    // This awesome verification method was originally developed by Mattias Kallman
    let controlCharValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];
    return controlCharValues[bigNumber % 31] === controlChar;
}