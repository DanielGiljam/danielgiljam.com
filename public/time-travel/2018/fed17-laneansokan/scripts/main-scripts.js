/*
Script for website "Låneansökan"
Created by Daniel Giljam, 2017
*/

let nameIsGo = false;
let signumIsGo = false;

function areBothGo() {
    let field2 = document.getElementById("låneansökan");
    let field3 = document.getElementById("bakgrundsfärg");
    if (nameIsGo && signumIsGo && field2.disabled && field3.disabled) {
        console.log("\"Låneansökan\" was enabled");
        field2.removeAttribute("disabled");
        field3.removeAttribute("disabled");
        isLoanGo();
        isRestGo();
    } else if ((!nameIsGo || !signumIsGo) && !field2.disabled && !field3.disabled) {
        console.log("\"Låneansökan\" was disabled");
        field2.setAttribute("disabled", "true");
        field3.setAttribute("disabled", "true");
        clearLoan();
        isRestGo();
    }
}

let loan;
let floatingLoan;
let romanLoan;

function loanOnFocus() {
    console.log("loanOnFocus was called");
}

function loanOnBlur(element) {
    console.log("loanOnBlur was called");
    if (element.value !== "") {
        console.log("found value in input-field");
        console.log("initiating processing of " + element.value.trim() + "...");
        loanInputFormatting(element);
    } else {
        console.log("no input-field value");
        document.getElementById("loan-output1").innerHTML = "";
        document.getElementById("loan-output2").innerHTML = "";
        document.getElementById("roman0").innerHTML = "";
        document.getElementById("roman").innerHTML = "";
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        loan = null;
        floatingLoan = null;
        romanLoan = null;
        loanIsGo = false;
        isLoanGo();
    }
}

function loanInputFormatting(element) {
    let iComp = inputDeconstruction1(element.value);
    if (iComp !== null) {
        let floatingLoanNumbers = iComp[1];
        for (let i = 2; i <= 5; i++) {
            if (iComp[i] !== undefined && iComp[i] === iComp[5]) {
                floatingLoanNumbers += "." + iComp[i];
            } else if (iComp[i] !== undefined) {
                floatingLoanNumbers += iComp[i];
            }
        }
        floatingLoan = parseFloat(floatingLoanNumbers);
        console.log("floatingLoan: " + floatingLoan);
        if (floatingLoan < 1000000) {
            romanConverter(parseInt(floatingLoan));
        } else if (floatingLoan === 1000000) {
            document.getElementById("roman").innerHTML = "M&#773;";
        } else {
            document.getElementById("roman0").innerHTML = ">";
            document.getElementById("roman").innerHTML = "M&#773;";
        }
        loan = floatingLoan.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
        console.log("loan: " + loan);
        console.log("replacing input-field value...");
        element.value = floatingLoan.toLocaleString("de-DE", {minimumFractionDigits: 2});
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        document.getElementById("loan-output1").innerHTML = "";
        document.getElementById("loan-output2").innerHTML = "";
        if (floatingLoan === 0) {
            console.log("invalid year value");
            document.getElementById("loan-output2").innerHTML = "Önskad summa måste vara mer än 0,00 €.";
            document.getElementById("roman0").innerHTML = "";
            document.getElementById("roman").innerHTML = "";
            element.style.borderStyle = "solid";
            element.style.borderColor = "red";
            loan = null;
            floatingLoan = null;
            romanLoan = null;
            loanIsGo = false;
            isLoanGo();
        } else {
            loanIsGo = true;
            isLoanGo();
        }
    } else {
        console.log("invalid input");
        document.getElementById("loan-output1").innerHTML = "Format som accepteras:<br>1000 ,<br>1 000,00 ,<br>1.000,00 ,<br>1,000.00 ...";
        document.getElementById("loan-output2").innerHTML = "";
        document.getElementById("roman0").innerHTML = "";
        document.getElementById("roman").innerHTML = "";
        element.style.borderStyle = "solid";
        element.style.borderColor = "red";
        loan = null;
        floatingLoan = null;
        romanLoan = null;
        loanIsGo = false;
        isLoanGo();
    }
}

function inputDeconstruction1(string) {
    let regex1 = /^\s*(\d+)\s*(\d*)?\s*(\d*)?\s*(\d*)?(?:[.,](\d\d?)\d*)?\s*$/;
    let regex2 = /^\s*(\d+)(?:[,](\d*))?(?:[,](\d*))?(?:[,](\d*))?(?:[.](\d\d?))?\s*$/;
    let regex3 = /^\s*(\d+)(?:[.](\d*))?(?:[.](\d*))?(?:[.](\d*))?(?:[,](\d\d?))?\s*$/;
    if (regex1.exec(string) !== null) {
        return regex1.exec(string);
    } else if (regex2.exec(string) !== null) {
        return regex2.exec(string);
    } else if (regex3.exec(string) !== null) {
        return regex3.exec(string);
    } else {
        return null;
    }
}

function romanConverter(num) {
    // This awesome roman numeral converter was made by Deftwun @ stackoverflow.com!
    let numeralCodes =  [["","I","II","III","IV","V","VI","VII","VIII","IX"],       // Ones
                        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],      // Tens
                        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],        // Hundreds
                        ["M","MM","MMM","MV&#773;","V&#773;","V&#773;M","V&#773;MM","V&#773;MMM","MX&#773;"],       // Thousands
                        ["X&#773;","X&#773;X&#773;","X&#773;X&#773;X&#773;","X&#773;L&#773;","L&#773;","L&#773;X&#773;","L&#773;X&#773;X&#773;","L&#773;X&#773;X&#773;X&#773;","X&#773;C&#773;"],       // Tens of Thousands
                        ["D&#773;","D&#773;D&#773;","D&#773;D&#773;D&#773;","D&#773;D&#773;","D&#773;","D&#773;D&#773;","D&#773;D&#773;D&#773;","D&#773;D&#773;D&#773;D&#773;","D&#773;M&#773;"]];       // Hundreds of Thousands
    let numeral = "";
    let digits = num.toString().split("").reverse();
    for (let i = 0; i < digits.length; i++){
        numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
    }
    document.getElementById("roman0").innerHTML = "";
    document.getElementById("roman").innerHTML = numeral;
    romanLoan = numeral;
}

let years;

function yearsOnFocus() {
    console.log("yearsOnFocus was called");
}

function yearsOnBlur(element) {
    console.log("yearsOnBlur was called");
    if (element.value !== "") {
        console.log("found value in input-field");
        console.log("initiating processing of " + element.value.trim() + "...");
        yearsInputFormatting(element);
    } else {
        console.log("no input-field value");
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        document.getElementById("years-output1").innerHTML = "";
        document.getElementById("years-output2").innerHTML = "";
        years = null;
        yearsIsGo = false;
        isLoanGo();
    }
}

function yearsInputFormatting(element) {
    let iComp = inputDeconstruction2(element.value);
    if (iComp !== null) {
        let yearsString = iComp[1];
        if (iComp[2] !== undefined) {
            yearsString += "." + iComp[2];
        }
        years = parseFloat(yearsString);
        console.log("years: " + years);
        console.log("replacing input-field value...");
        element.value = years.toLocaleString("de-DE", {maximumFractionDigits: 2});
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        document.getElementById("years-output1").innerHTML = "";
        document.getElementById("years-output2").innerHTML = "";
        if (years < 0.09) {
            console.log("invalid year value");
            document.getElementById("years-output2").innerHTML = "Lånetid måste vara minst 0,09 år (~1 månad).";
            element.style.borderStyle = "solid";
            element.style.borderColor = "red";
            years = null;
            yearsIsGo = false;
            isLoanGo();
        } else {
            yearsIsGo = true;
            isLoanGo();
        }
    } else {
        console.log("invalid input");
        document.getElementById("years-output1").innerHTML = "Format som accepteras:<br>14 ,<br>1,5 ,<br>2.33 ...";
        document.getElementById("years-output2").innerHTML = "";
        element.style.borderStyle = "solid";
        element.style.borderColor = "red";
        years = null;
        yearsIsGo = false;
        isLoanGo();
    }
}

function inputDeconstruction2(string) {
    let regex = /^(\d\d?)(?:[.,](\d\d?)\d*)?$/;
    return regex.exec(string);
}

let loanIsGo;
let yearsIsGo;

function isLoanGo() {
    if (loanIsGo && yearsIsGo) {
        console.log("generating loan information...");
        loanCalc();
        ftGen();
        refGen();
        isRestGo();
    } else if (!loanIsGo || !yearsIsGo) {
        console.log("cleared loan information");
        clearLoan();
        isRestGo();
    }
}

let monthly;
let total;
let rate = 0.03;
let ft;
let refref;
let ref;

function loanCalc() {
    monthly = floatingLoan * ((rate/12)/(1-Math.pow(1 + (rate/12), -(years*12))));
    document.getElementById("monthly").innerHTML = monthly.toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("monthly1").innerHTML = " €";
    total = monthly * (years*12);
    document.getElementById("total").innerHTML = total.toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById("total1").innerHTML = " €";
    document.getElementById("rate").innerHTML = rate.toLocaleString("de-DE", {style: "percent", minimumFractionDigits: 2});
}

function ftGen() {
    let now = new Date();
    let days = [1, 0, 6, 5, 4, 3, 2];
    let months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    let thisDate = now.getDate();
    let thisDay = now.getDay();
    now = now.setDate(thisDate + 28 + days[thisDay]);
    now = new Date(now);
    let day = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    ft = day + " " + month + " " + year;
    document.getElementById("first_tranche").innerHTML = ft;
}

function refGen() {
    let refWeights = [1, 3, 7, 1, 3, 7, 1, 3, 7];
    let refCheck = 0;
    refWeights.forEach((weight, index) => {
        refCheck += weight * parseInt(refref.split("")[index]);
    });
    if (refCheck % 10 !== 0) {
        refCheck = 10 - (refCheck % 10);
    }
    let refArray = refref.split("");
    refArray.push(refCheck.toString());
    ref = "";
    refArray.forEach((value, index) => {
        if (index % 5 !== 0 && index !== 0) {
            ref += value;
        } else if (index % 5 === 0 && index !== 0) {
            ref += " " + value;
        } else if (index === 0 && value !== "0") {
            ref += value;
        }
    });
    document.getElementById("referensnummer").innerHTML = ref;
}

function clearLoan() {
    monthly = null;
    document.getElementById("monthly").innerHTML = "";
    document.getElementById("monthly1").innerHTML = "";
    total = null;
    document.getElementById("total").innerHTML = "";
    document.getElementById("total1").innerHTML = "";
    document.getElementById("rate").innerHTML = "";
    ft = null;
    document.getElementById("first_tranche").innerHTML = "";
    ref = null;
    document.getElementById("referensnummer").innerHTML = "";
}

let colorIsGo;

function isRestGo() {
    let field = document.getElementById("submit-field");
    if (colorIsGo && ft !== null && ft !== undefined) {
        console.log("submit button is active");
        field.removeAttribute("disabled");
    } else if (!colorIsGo || ft === null || ft === undefined) {
        console.log("submit button is inactive");
        field.setAttribute("disabled", "true");
    }
}
