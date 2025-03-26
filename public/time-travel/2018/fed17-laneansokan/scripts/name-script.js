/*
Script for website "Låneansökan"
Created by Daniel Giljam, 2017
*/

let firstName;
let lastName;

let skandAntal;
let unicodeKoder;

function nameOnFocus() {
    console.log("nameOnFocus was called");
}

function nameOnBlur(element) {
    console.log("nameOnBlur was called");
    if (element.value !== "") {
        console.log("found value in input-field");
        console.log("initiating nameProcessing on " + element.value.trim() + "...");
        let originalName = element.value;
        nameProcessing(element);
        antalSkander(element.value);
        nameUnicode(originalName);
    } else {
        console.log("no input-field value");
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        document.getElementById("name-output1.1").innerHTML = "";
        document.getElementById("name-output1.2").innerHTML = "";
        document.getElementById("name-output2").innerHTML = "";
        document.getElementById("antal_skander").innerHTML = "";
        document.getElementById("name_unicode").innerHTML = "";
        firstName = null;
        lastName = null;
        skandAntal = null;
        unicodeKoder = null;
        nameIsGo = false;
        areBothGo();
    }
}

// handles validation and capitalization of name + alerts to user
function nameProcessing(element) {

    let symbolSearch = nameValidation(element.value.trim());
    let symbolSearchBool;

    if (symbolSearch[0] === false && symbolSearch[1] === false) {
        console.log("found invalid symbols");
        console.log("found repeating symbols");
        document.getElementById("name-output1.1").innerHTML = "Namnet kan inte innehålla siffror, specialtecken, eller mer än tre av samma tecken i rad.";
        symbolSearchBool = false;
    } else if (symbolSearch[0] === false) {
        console.log("found invalid symbols");
        document.getElementById("name-output1.1").innerHTML = "Namnet kan inte innehålla siffror eller specialtecken.";
        symbolSearchBool = false;
    } else if (symbolSearch[1] === false) {
        console.log("found repeating symbols");
        document.getElementById("name-output1.1").innerHTML = "Namnet kan inte innehålla mer än tre av samma tecken i rad.";
        symbolSearchBool = false;
    }
    if ((symbolSearch[0] === false || symbolSearch[1] === false) && symbolSearch[2] === false) {
        console.log("found suspicious patterns in name");
        document.getElementById("name-output1.2").innerHTML = "Namnet kan inte heller innehålla övriga tvivelaktiga teckenmönster.";
        symbolSearchBool = false;
    } else if (symbolSearch[2] === false) {
        console.log("found suspicious patterns in name");
        document.getElementById("name-output1.2").innerHTML = "Namnet kan inte innehålla tvivelaktiga teckenmönster.";
        symbolSearchBool = false;
    }
    if (symbolSearch[0] === true && symbolSearch[1] === true && symbolSearch[2] === true) {
        console.log("name raised no invalid character or pattern -alerts");
        document.getElementById("name-output1.1").innerHTML = "";
        document.getElementById("name-output1.2").innerHTML = "";
        symbolSearchBool = true;
    }

    let twoNamesSearch = nameSplit(element.value.trim());
    let twoNamesSearchBool;

    if (twoNamesSearch !== null) {

        console.log("found two names");
        document.getElementById("name-output2").innerHTML = "";
        console.log("capitalizing names...");

        firstName = nameCapitalization(twoNamesSearch[1]);
        lastName = nameCapitalization(twoNamesSearch[2]);

        console.log("firstName: " + firstName);
        console.log("lastName: " + lastName);
        console.log("replacing input-field value...");

        element.value = firstName + " " + lastName;

        twoNamesSearchBool = true;

    } else {

        console.log("found fewer than two names");
        document.getElementById("name-output2").innerHTML = "Namnet ska bestå av ett förnamn och ett efternamn.";

        element.value = nameCapitalization(element.value.trim());

        firstName = null;
        lastName = null;

        twoNamesSearchBool = false;

    }

    if (symbolSearchBool === true && twoNamesSearchBool === true) {
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        nameIsGo = true;
        areBothGo();
    } else {
        element.style.borderStyle = "solid";
        element.style.borderColor = "red";
        nameIsGo = false;
        areBothGo();
    }

}

// checks for invalid symbols
function nameValidation(string) {
    let regex1 = /[^a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŒœŠšŸƒ' \-]/gi;
    let regex2 = /([a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŒœŠšŸƒ])\1{2}/gi;
    let regex3 = /(['\-])\1/g;
    let regex4 = /^(-.*)|(.*-)$/;
    let regex = /^(\S+)(?:\s+(\S+))*$/;
    let match = regex.exec(string);
    let countDashesFirstName = match[1].length - match[1].replace(new RegExp("\-","g"), "").length;
    let countApostrophesFirstName = match[1].length - match[1].replace(new RegExp("\'","g"), "").length;
    let dashBeginFirstName = regex4.test(match[1]);
    let countDashesLastName = 0;
    let countApostrophesLastName = 0;
    let dashBeginLastName = false;
    if (match[2] !== undefined) {
        countDashesLastName = match[2].length - match[2].replace(new RegExp("\-","g"), "").length;
        countApostrophesLastName = match[2].length - match[2].replace(new RegExp("\'","g"), "").length;
        dashBeginLastName = regex4.test(match[2]);
    }
    let test1 = regex1.test(string);
    let test2 = regex2.test(string);
    let test3 = regex3.test(string);
    return  [!test1,
            !test2 &&
                !test2,
            !test3 &&
                !dashBeginFirstName &&
                !dashBeginLastName &&
                countDashesFirstName < 2 &&
                countApostrophesFirstName < 2 &&
                countDashesLastName < 4 &&
                countApostrophesLastName < 4];
}

// checks if value consists of two names, true = name consists of two names, false = name consists of fewer than two names
function nameSplit(string) {
    let regex = /^(\S+)(?:\s+(\S+))+$/;
    return regex.exec(string);
}

// replaces the first letter in string with uppercase equivalent
function nameCapitalization(string) {
    let regex = /-'?(\S)/gi;
    let matches;
    while ((matches = regex.exec(string)) !== null) {
        let rli = regex.lastIndex;
        string = string.slice(0, rli-1) + matches[1].toUpperCase() + string.slice(rli);
    }
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function antalSkander(string) {
    let regex = /[åäæöøÅÄÆÖØ]/g;
    let matches;
    let skanderna = [];

    while ((matches = regex.exec(string)) !== null) {

        skanderna.push(matches[0]);

    }

    document.getElementById("antal_skander").innerHTML = skanderna.length;
    skandAntal = skanderna.length;
}

function nameUnicode(string) {

    let element = document.getElementById("name_unicode");
    let uni;

    element.innerHTML = "";

    for (let i = 0; i < string.length; i++) {
        uni = "&amp;#" + string.charCodeAt(i) + ";";
        element.innerHTML += uni;
    }

    element.innerHTML = element.innerHTML.trim();
    unicodeKoder = element.innerHTML.replace(/&amp;/g, "&");

}
