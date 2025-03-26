/*
Script for website "Download Strange Soup"
Created by Daniel Giljam, 2018
*/

let parser = new UAParser();
let clientOS = parser.getOS().name;
console.log("OS detected as " + clientOS + ".");

switch (clientOS) {
    case "Windows":
        document.getElementById("paragraph-2").setAttribute("style", "display: block");
        console.log("Initiating download of strange-soup-installer.exe...");
        document.getElementById("download-trigger").setAttribute("src", "/time-travel/2018/strange-soup/binaries/strange-soup-installer.exe");
        break;
    case "Mac OS":
        document.getElementById("paragraph-2").setAttribute("style", "display: block");
        console.log("Initiating download of strange-soup-installer.dmg...");
        document.getElementById("download-trigger").setAttribute("src", "/time-travel/2018/strange-soup/binaries/strange-soup-installer.dmg");
        break;
    default:
        document.getElementById("strange-soup-image").setAttribute("src", "/time-travel/2018/strange-soup/media-content/strange-soup-image-1.png");
        document.getElementById("paragraph-1").setAttribute("style", "display: block");
}