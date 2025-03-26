/*
Script for website "Låneansökan"
Created by Daniel Giljam, 2017
*/

let color;
let nearestColor;

function colorOnFocus() {
    console.log("colorOnFocus was called");
}

function colorOnBlur(element) {
    console.log("colorOnBlur was called");
    if (element.value !== "") {
        console.log("found value in input-field");
        console.log("initiating processing of " + element.value.trim() + "...");
        colorInputHandler(element);
    } else {
        console.log("no input-field value");
        document.getElementById("color-output").innerHTML = "";
        document.getElementById("color_name").innerHTML = "";
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("script-output").style.backgroundColor = "white";
        document.getElementById("script-output-layer").style.backgroundColor = "hsla(0, 0%, 0%, 0.875)";
        color = null;
        nearestColor = null;
        colorIsGo = false;
        isRestGo();
    }
}

function colorInputHandler(element) {
    let v = element.value;
    let b = document.getElementById("body");
    let s = document.getElementById("script-output");
    let sl = document.getElementById("script-output-layer");
    let cn = document.getElementById("color_name");
    let indexOfColor = COLORS_ARRAY[3].indexOf(v.trim().toUpperCase());
    if (indexOfColor !== -1) {
        console.log("input detected as color nr. " + indexOfColor);
        element.value = COLORS_ARRAY[0][indexOfColor];
        s.style.backgroundColor = COLORS_ARRAY[0][indexOfColor];
        b.style.backgroundColor = COLORS_ARRAY[0][indexOfColor];
        cn.innerHTML = COLORS_ARRAY[0][indexOfColor];
        color = COLORS_ARRAY[0][indexOfColor];
        colorIsGo = true;
    } else {
        let colorCodeArrayRGB = rgbTest(v.trim());
        let colorCodeArrayHEX = hexTest(v.trim());
        if (colorCodeArrayRGB !== null) {
            console.log("input detected as RGB-code " + colorCodeArrayRGB[0].slice(3));
            element.value = colorCodeArrayRGB[0];
            b.style.backgroundColor = colorCodeArrayRGB[0];
            s.style.backgroundColor = colorCodeArrayRGB[0];
            color = colorCodeArrayRGB;
            whatColor(colorCodeArrayRGB);
            colorIsGo = true;
        } else if (colorCodeArrayHEX !== null) {
            console.log("input detected as HEX-code " + colorCodeArrayHEX[0]);
            element.value = colorCodeArrayHEX[0];
            b.style.backgroundColor = colorCodeArrayHEX[0];
            s.style.backgroundColor = colorCodeArrayHEX[0];
            color = colorCodeArrayHEX;
            whatColor(colorCodeArrayHEX);
            colorIsGo = true;
        } else {
            colorIsGo = false;
        }
    }
    if (colorIsGo === true) {
        document.getElementById("color-output").innerHTML = "";
        element.style.borderStyle = "inset";
        element.style.borderColor = "initial";
        sl.style.backgroundColor = "hsla(0, 0%, 0%, 0.375)";
        isRestGo();
    } else {
        document.getElementById("color-output").innerHTML = "Ogiltigt format.<br>Skriv t.ex.<br>LightSlateGray ,<br>rgb(241, 248, 255) ,<br>#DB70D6 ...";
        cn.innerHTML = "";
        element.style.borderStyle = "solid";
        element.style.borderColor = "red";
        b.style.backgroundColor = "white";
        s.style.backgroundColor = "white";
        sl.style.backgroundColor = "hsla(0, 0%, 0%, 0.875)";
        color = null;
        nearestColor = null;
        isRestGo();
    }
}

function rgbTest(string) {
    let regex = /^rgb\((1?[0-9]?[0-9]|2(?:[0-4][0-9]|5[0-5])),\s?(1?[0-9]?[0-9]|2(?:[0-4][0-9]|5[0-5])),\s?(1?[0-9]?[0-9]|2(?:[0-4][0-9]|5[0-5]))\)$/;
    let match = regex.exec(string);
    if (match !== null) {
        let red = match[1];
        let green = match[2];
        let blue = match[3];
        match[0] = "rgb(" + red + ", " + green + ", " + blue + ")";
        return [match[0], red, green, blue];
    } else {
        return null;
    }
}

function hexTest(string) {
    let regex = /^#[0-9a-f]{1,6}$/i;
    let match = regex.exec(string);
    if (match !== null) {
        while (match[0].length < 7) {
            match[0] += "0";
        }
        let hexCode = match[0].toUpperCase();
        hexCode.split("");
        let hexRed = hexCode[1] + hexCode[2];
        let hexGreen = hexCode[3] + hexCode[4];
        let hexBlue = hexCode[5] + hexCode[6];
        let red = parseInt(hexRed, 16).toString();
        let green = parseInt(hexGreen, 16).toString();
        let blue = parseInt(hexBlue, 16).toString();
        return [match[0].toUpperCase(), red, green, blue];
    } else {
        return null;
    }
}

function whatColor(stringArray) {
    let redDiff = Math.abs(stringArray[1] - COLOR_OBJECTS[0].red);
    let greenDiff = Math.abs(stringArray[2] - COLOR_OBJECTS[0].green);
    let blueDiff = Math.abs(stringArray[3] - COLOR_OBJECTS[0].blue);
    let totalDifference = redDiff + greenDiff + blueDiff;
    let newTotalDifference;
    let nearestColorLocal = COLOR_OBJECTS[0].name;
    COLOR_OBJECTS.forEach((colorObject) => {
        redDiff = Math.abs(stringArray[1] - colorObject.red);
        greenDiff = Math.abs(stringArray[2] - colorObject.green);
        blueDiff = Math.abs(stringArray[3] - colorObject.blue);
        newTotalDifference = redDiff + greenDiff + blueDiff;
        if (newTotalDifference < totalDifference) {
            totalDifference = newTotalDifference;
            nearestColorLocal = colorObject.name;
        }
    });
    document.getElementById("color_name").innerHTML = nearestColorLocal;
    nearestColor = nearestColorLocal;
}

const COLORS_ARRAY = [
                        ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"],
                        ["rgb(240, 248, 255)", "rgb(250, 235, 215)", "rgb(0, 255, 255)", "rgb(127, 255, 212)", "rgb(240, 255, 255)", "rgb(245, 245, 220)", "rgb(255, 228, 196)", "rgb(0, 0, 0)", "rgb(255, 235, 205)", "rgb(0, 0, 255)", "rgb(138, 43, 226)", "rgb(165, 42, 42)", "rgb(222, 184, 135)", "rgb(95, 158, 160)", "rgb(127, 255, 0)", "rgb(210, 105, 30)", "rgb(255, 127, 80)", "rgb(100, 149, 237)", "rgb(255, 248, 220)", "rgb(220, 20, 60)", "rgb(0, 255, 255)", "rgb(0, 0, 139)", "rgb(0, 139, 139)", "rgb(184, 134, 11)", "rgb(169, 169, 169)", "rgb(169, 169, 169)", "rgb(0, 100, 0)", "rgb(189, 183, 107)", "rgb(139, 0, 139)", "rgb(85, 107, 47)", "rgb(255, 140, 0)", "rgb(153, 50, 204)", "rgb(139, 0, 0)", "rgb(233, 150, 122)", "rgb(143, 188, 143)", "rgb(72, 61, 139)", "rgb(47, 79, 79)", "rgb(47, 79, 79)", "rgb(0, 206, 209)", "rgb(148, 0, 211)", "rgb(255, 20, 147)", "rgb(0, 191, 255)", "rgb(105, 105, 105)", "rgb(105, 105, 105)", "rgb(30, 144, 255)", "rgb(178, 34, 34)", "rgb(255, 250, 240)", "rgb(34, 139, 34)", "rgb(255, 0, 255)", "rgb(220, 220, 220)", "rgb(248, 248, 255)", "rgb(255, 215, 0)", "rgb(218, 165, 32)", "rgb(128, 128, 128)", "rgb(128, 128, 128)", "rgb(0, 128, 0)", "rgb(173, 255, 47)", "rgb(240, 255, 240)", "rgb(255, 105, 180)", "rgb(205, 92, 92)", "rgb(75, 0, 130)", "rgb(255, 255, 240)", "rgb(240, 230, 140)", "rgb(230, 230, 250)", "rgb(255, 240, 245)", "rgb(124, 252, 0)", "rgb(255, 250, 205)", "rgb(173, 216, 230)", "rgb(240, 128, 128)", "rgb(224, 255, 255)", "rgb(250, 250, 210)", "rgb(211, 211, 211)", "rgb(211, 211, 211)", "rgb(144, 238, 144)", "rgb(255, 182, 193)", "rgb(255, 160, 122)", "rgb(32, 178, 170)", "rgb(135, 206, 250)", "rgb(119, 136, 153)", "rgb(119, 136, 153)", "rgb(176, 196, 222)", "rgb(255, 255, 224)", "rgb(0, 255, 0)", "rgb(50, 205, 50)", "rgb(250, 240, 230)", "rgb(255, 0, 255)", "rgb(128, 0, 0)", "rgb(102, 205, 170)", "rgb(0, 0, 205)", "rgb(186, 85, 211)", "rgb(147, 112, 219)", "rgb(60, 179, 113)", "rgb(123, 104, 238)", "rgb(0, 250, 154)", "rgb(72, 209, 204)", "rgb(199, 21, 133)", "rgb(25, 25, 112)", "rgb(245, 255, 250)", "rgb(255, 228, 225)", "rgb(255, 228, 181)", "rgb(255, 222, 173)", "rgb(0, 0, 128)", "rgb(253, 245, 230)", "rgb(128, 128, 0)", "rgb(107, 142, 35)", "rgb(255, 165, 0)", "rgb(255, 69, 0)", "rgb(218, 112, 214)", "rgb(238, 232, 170)", "rgb(152, 251, 152)", "rgb(175, 238, 238)", "rgb(219, 112, 147)", "rgb(255, 239, 213)", "rgb(255, 218, 185)", "rgb(205, 133, 63)", "rgb(255, 192, 203)", "rgb(221, 160, 221)", "rgb(176, 224, 230)", "rgb(128, 0, 128)", "rgb(102, 51, 153)", "rgb(255, 0, 0)", "rgb(188, 143, 143)", "rgb(65, 105, 225)", "rgb(139, 69, 19)", "rgb(250, 128, 114)", "rgb(244, 164, 96)", "rgb(46, 139, 87)", "rgb(255, 245, 238)", "rgb(160, 82, 45)", "rgb(192, 192, 192)", "rgb(135, 206, 235)", "rgb(106, 90, 205)", "rgb(112, 128, 144)", "rgb(112, 128, 144)", "rgb(255, 250, 250)", "rgb(0, 255, 127)", "rgb(70, 130, 180)", "rgb(210, 180, 140)", "rgb(0, 128, 128)", "rgb(216, 191, 216)", "rgb(255, 99, 71)", "rgb(64, 224, 208)", "rgb(238, 130, 238)", "rgb(245, 222, 179)", "rgb(255, 255, 255)", "rgb(245, 245, 245)", "rgb(255, 255, 0)", "rgb(154, 205, 50)"],
                        ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#A9A9A9", "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#808080", "#008000", "#ADFF2F", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#D3D3D3", "#90EE90", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#663399", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#FFFFFF", "#F5F5F5", "#FFFF00", "#9ACD32"],
                        ["ALICEBLUE", "ANTIQUEWHITE", "AQUA", "AQUAMARINE", "AZURE", "BEIGE", "BISQUE", "BLACK", "BLANCHEDALMOND", "BLUE", "BLUEVIOLET", "BROWN", "BURLYWOOD", "CADETBLUE", "CHARTREUSE", "CHOCOLATE", "CORAL", "CORNFLOWERBLUE", "CORNSILK", "CRIMSON", "CYAN", "DARKBLUE", "DARKCYAN", "DARKGOLDENROD", "DARKGRAY", "DARKGREY", "DARKGREEN", "DARKKHAKI", "DARKMAGENTA", "DARKOLIVEGREEN", "DARKORANGE", "DARKORCHID", "DARKRED", "DARKSALMON", "DARKSEAGREEN", "DARKSLATEBLUE", "DARKSLATEGRAY", "DARKSLATEGREY", "DARKTURQUOISE", "DARKVIOLET", "DEEPPINK", "DEEPSKYBLUE", "DIMGRAY", "DIMGREY", "DODGERBLUE", "FIREBRICK", "FLORALWHITE", "FORESTGREEN", "FUCHSIA", "GAINSBORO", "GHOSTWHITE", "GOLD", "GOLDENROD", "GRAY", "GREY", "GREEN", "GREENYELLOW", "HONEYDEW", "HOTPINK", "INDIANRED", "INDIGO", "IVORY", "KHAKI", "LAVENDER", "LAVENDERBLUSH", "LAWNGREEN", "LEMONCHIFFON", "LIGHTBLUE", "LIGHTCORAL", "LIGHTCYAN", "LIGHTGOLDENRODYELLOW", "LIGHTGRAY", "LIGHTGREY", "LIGHTGREEN", "LIGHTPINK", "LIGHTSALMON", "LIGHTSEAGREEN", "LIGHTSKYBLUE", "LIGHTSLATEGRAY", "LIGHTSLATEGREY", "LIGHTSTEELBLUE", "LIGHTYELLOW", "LIME", "LIMEGREEN", "LINEN", "MAGENTA", "MAROON", "MEDIUMAQUAMARINE", "MEDIUMBLUE", "MEDIUMORCHID", "MEDIUMPURPLE", "MEDIUMSEAGREEN", "MEDIUMSLATEBLUE", "MEDIUMSPRINGGREEN", "MEDIUMTURQUOISE", "MEDIUMVIOLETRED", "MIDNIGHTBLUE", "MINTCREAM", "MISTYROSE", "MOCCASIN", "NAVAJOWHITE", "NAVY", "OLDLACE", "OLIVE", "OLIVEDRAB", "ORANGE", "ORANGERED", "ORCHID", "PALEGOLDENROD", "PALEGREEN", "PALETURQUOISE", "PALEVIOLETRED", "PAPAYAWHIP", "PEACHPUFF", "PERU", "PINK", "PLUM", "POWDERBLUE", "PURPLE", "REBECCAPURPLE", "RED", "ROSYBROWN", "ROYALBLUE", "SADDLEBROWN", "SALMON", "SANDYBROWN", "SEAGREEN", "SEASHELL", "SIENNA", "SILVER", "SKYBLUE", "SLATEBLUE", "SLATEGRAY", "SLATEGREY", "SNOW", "SPRINGGREEN", "STEELBLUE", "TAN", "TEAL", "THISTLE", "TOMATO", "TURQUOISE", "VIOLET", "WHEAT", "WHITE", "WHITESMOKE", "YELLOW", "YELLOWGREEN"]
];

const COLOR_OBJECTS = [
                        {name: "AliceBlue", red: 240, green: 248, blue: 255},
                        {name: "AntiqueWhite", red: 250, green: 235, blue: 215},
                        {name: "Aqua", red: 0, green: 255, blue: 255},
                        {name: "Aquamarine", red: 127, green: 255, blue: 212},
                        {name: "Azure", red: 240, green: 255, blue: 255},
                        {name: "Beige", red: 245, green: 245, blue: 220},
                        {name: "Bisque", red: 255, green: 228, blue: 196},
                        {name: "Black", red: 0, green: 0, blue: 0},
                        {name: "BlanchedAlmond", red: 255, green: 235, blue: 205},
                        {name: "Blue", red: 0, green: 0, blue: 255},
                        {name: "BlueViolet", red: 138, green: 43, blue: 226},
                        {name: "Brown", red: 165, green: 42, blue: 42},
                        {name: "BurlyWood", red: 222, green: 184, blue: 135},
                        {name: "CadetBlue", red: 95, green: 158, blue: 160},
                        {name: "Chartreuse", red: 127, green: 255, blue: 0},
                        {name: "Chocolate", red: 210, green: 105, blue: 30},
                        {name: "Coral", red: 255, green: 127, blue: 80},
                        {name: "CornflowerBlue", red: 100, green: 149, blue: 237},
                        {name: "Cornsilk", red: 255, green: 248, blue: 220},
                        {name: "Crimson", red: 220, green: 20, blue: 60},
                        {name: "Cyan", red: 0, green: 255, blue: 255},
                        {name: "DarkBlue", red: 0, green: 0, blue: 139},
                        {name: "DarkCyan", red: 0, green: 139, blue: 139},
                        {name: "DarkGoldenRod", red: 184, green: 134, blue: 11},
                        {name: "DarkGray", red: 169, green: 169, blue: 169},
                        {name: "DarkGrey", red: 169, green: 169, blue: 169},
                        {name: "DarkGreen", red: 0, green: 100, blue: 0},
                        {name: "DarkKhaki", red: 189, green: 183, blue: 107},
                        {name: "DarkMagenta", red: 139, green: 0, blue: 139},
                        {name: "DarkOliveGreen", red: 85, green: 107, blue: 47},
                        {name: "DarkOrange", red: 255, green: 140, blue: 0},
                        {name: "DarkOrchid", red: 153, green: 50, blue: 204},
                        {name: "DarkRed", red: 139, green: 0, blue: 0},
                        {name: "DarkSalmon", red: 233, green: 150, blue: 122},
                        {name: "DarkSeaGreen", red: 143, green: 188, blue: 143},
                        {name: "DarkSlateBlue", red: 72, green: 61, blue: 139},
                        {name: "DarkSlateGray", red: 47, green: 79, blue: 79},
                        {name: "DarkSlateGrey", red: 47, green: 79, blue: 79},
                        {name: "DarkTurquoise", red: 0, green: 206, blue: 209},
                        {name: "DarkViolet", red: 148, green: 0, blue: 211},
                        {name: "DeepPink", red: 255, green: 20, blue: 147},
                        {name: "DeepSkyBlue", red: 0, green: 191, blue: 255},
                        {name: "DimGray", red: 105, green: 105, blue: 105},
                        {name: "DimGrey", red: 105, green: 105, blue: 105},
                        {name: "DodgerBlue", red: 30, green: 144, blue: 255},
                        {name: "FireBrick", red: 178, green: 34, blue: 34},
                        {name: "FloralWhite", red: 255, green: 250, blue: 240},
                        {name: "ForestGreen", red: 34, green: 139, blue: 34},
                        {name: "Fuchsia", red: 255, green: 0, blue: 255},
                        {name: "Gainsboro", red: 220, green: 220, blue: 220},
                        {name: "GhostWhite", red: 248, green: 248, blue: 255},
                        {name: "Gold", red: 255, green: 215, blue: 0},
                        {name: "GoldenRod", red: 218, green: 165, blue: 32},
                        {name: "Gray", red: 128, green: 128, blue: 128},
                        {name: "Grey", red: 128, green: 128, blue: 128},
                        {name: "Green", red: 0, green: 128, blue: 0},
                        {name: "GreenYellow", red: 173, green: 255, blue: 47},
                        {name: "HoneyDew", red: 240, green: 255, blue: 240},
                        {name: "HotPink", red: 255, green: 105, blue: 180},
                        {name: "IndianRed", red: 205, green: 92, blue: 92},
                        {name: "Indigo", red: 75, green: 0, blue: 130},
                        {name: "Ivory", red: 255, green: 255, blue: 240},
                        {name: "Khaki", red: 240, green: 230, blue: 140},
                        {name: "Lavender", red: 230, green: 230, blue: 250},
                        {name: "LavenderBlush", red: 255, green: 240, blue: 245},
                        {name: "LawnGreen", red: 124, green: 252, blue: 0},
                        {name: "LemonChiffon", red: 255, green: 250, blue: 205},
                        {name: "LightBlue", red: 173, green: 216, blue: 230},
                        {name: "LightCoral", red: 240, green: 128, blue: 128},
                        {name: "LightCyan", red: 224, green: 255, blue: 255},
                        {name: "LightGoldenRodYellow", red: 250, green: 250, blue: 210},
                        {name: "LightGray", red: 211, green: 211, blue: 211},
                        {name: "LightGrey", red: 211, green: 211, blue: 211},
                        {name: "LightGreen", red: 144, green: 238, blue: 144},
                        {name: "LightPink", red: 255, green: 182, blue: 193},
                        {name: "LightSalmon", red: 255, green: 160, blue: 122},
                        {name: "LightSeaGreen", red: 32, green: 178, blue: 170},
                        {name: "LightSkyBlue", red: 135, green: 206, blue: 250},
                        {name: "LightSlateGray", red: 119, green: 136, blue: 153},
                        {name: "LightSlateGrey", red: 119, green: 136, blue: 153},
                        {name: "LightSteelBlue", red: 176, green: 196, blue: 222},
                        {name: "LightYellow", red: 255, green: 255, blue: 224},
                        {name: "Lime", red: 0, green: 255, blue: 0},
                        {name: "LimeGreen", red: 50, green: 205, blue: 50},
                        {name: "Linen", red: 250, green: 240, blue: 230},
                        {name: "Magenta", red: 255, green: 0, blue: 255},
                        {name: "Maroon", red: 128, green: 0, blue: 0},
                        {name: "MediumAquaMarine", red: 102, green: 205, blue: 170},
                        {name: "MediumBlue", red: 0, green: 0, blue: 205},
                        {name: "MediumOrchid", red: 186, green: 85, blue: 211},
                        {name: "MediumPurple", red: 147, green: 112, blue: 219},
                        {name: "MediumSeaGreen", red: 60, green: 179, blue: 113},
                        {name: "MediumSlateBlue", red: 123, green: 104, blue: 238},
                        {name: "MediumSpringGreen", red: 0, green: 250, blue: 154},
                        {name: "MediumTurquoise", red: 72, green: 209, blue: 204},
                        {name: "MediumVioletRed", red: 199, green: 21, blue: 133},
                        {name: "MidnightBlue", red: 25, green: 25, blue: 112},
                        {name: "MintCream", red: 245, green: 255, blue: 250},
                        {name: "MistyRose", red: 255, green: 228, blue: 225},
                        {name: "Moccasin", red: 255, green: 228, blue: 181},
                        {name: "NavajoWhite", red: 255, green: 222, blue: 173},
                        {name: "Navy", red: 0, green: 0, blue: 128},
                        {name: "OldLace", red: 253, green: 245, blue: 230},
                        {name: "Olive", red: 128, green: 128, blue: 0},
                        {name: "OliveDrab", red: 107, green: 142, blue: 35},
                        {name: "Orange", red: 255, green: 165, blue: 0},
                        {name: "OrangeRed", red: 255, green: 69, blue: 0},
                        {name: "Orchid", red: 218, green: 112, blue: 214},
                        {name: "PaleGoldenRod", red: 238, green: 232, blue: 170},
                        {name: "PaleGreen", red: 152, green: 251, blue: 152},
                        {name: "PaleTurquoise", red: 175, green: 238, blue: 238},
                        {name: "PaleVioletRed", red: 219, green: 112, blue: 147},
                        {name: "PapayaWhip", red: 255, green: 239, blue: 213},
                        {name: "PeachPuff", red: 255, green: 218, blue: 185},
                        {name: "Peru", red: 205, green: 133, blue: 63},
                        {name: "Pink", red: 255, green: 192, blue: 203},
                        {name: "Plum", red: 221, green: 160, blue: 221},
                        {name: "PowderBlue", red: 176, green: 224, blue: 230},
                        {name: "Purple", red: 128, green: 0, blue: 128},
                        {name: "RebeccaPurple", red: 102, green: 51, blue: 153},
                        {name: "Red", red: 255, green: 0, blue: 0},
                        {name: "RosyBrown", red: 188, green: 143, blue: 143},
                        {name: "RoyalBlue", red: 65, green: 105, blue: 225},
                        {name: "SaddleBrown", red: 139, green: 69, blue: 19},
                        {name: "Salmon", red: 250, green: 128, blue: 114},
                        {name: "SandyBrown", red: 244, green: 164, blue: 96},
                        {name: "SeaGreen", red: 46, green: 139, blue: 87},
                        {name: "SeaShell", red: 255, green: 245, blue: 238},
                        {name: "Sienna", red: 160, green: 82, blue: 45},
                        {name: "Silver", red: 192, green: 192, blue: 192},
                        {name: "SkyBlue", red: 135, green: 206, blue: 235},
                        {name: "SlateBlue", red: 106, green: 90, blue: 205},
                        {name: "SlateGray", red: 112, green: 128, blue: 144},
                        {name: "SlateGrey", red: 112, green: 128, blue: 144},
                        {name: "Snow", red: 255, green: 250, blue: 250},
                        {name: "SpringGreen", red: 0, green: 255, blue: 127},
                        {name: "SteelBlue", red: 70, green: 130, blue: 180},
                        {name: "Tan", red: 210, green: 180, blue: 140},
                        {name: "Teal", red: 0, green: 128, blue: 128},
                        {name: "Thistle", red: 216, green: 191, blue: 216},
                        {name: "Tomato", red: 255, green: 99, blue: 71},
                        {name: "Turquoise", red: 64, green: 224, blue: 208},
                        {name: "Violet", red: 238, green: 130, blue: 238},
                        {name: "Wheat", red: 245, green: 222, blue: 179},
                        {name: "White", red: 255, green: 255, blue: 255},
                        {name: "WhiteSmoke", red: 245, green: 245, blue: 245},
                        {name: "Yellow", red: 255, green: 255, blue: 0},
                        {name: "YellowGreen", red: 154, green: 205, blue: 50}
];
