const path = require('path');
const { basename, format, extname, parse, isAbsolute, join, resolve } = path;

const fs = require('fs');
const { unlink, mkdirSync, readFileSync, writeFile, existsSync } = fs;

const os = require('os');
const { platform, arch } = os;

const EventEmitter = require('events');
const event = new EventEmitter();

// Q1
const showCurrentPaths = () => {
  console.log({ File: __filename, Dir: __dirname });
};
showCurrentPaths();

// Q2
function getFileName(fullPath) {
  return basename(fullPath);
}
console.log(getFileName("/user/files/report.pdf"));

// Q3
const createPathFromObj = (pathDetails) => {
  return format(pathDetails);
};
console.log(createPathFromObj({ dir: "/folder", name: "app", ext: ".js" }));

// Q4
function getExtension(pathStr) {
  return extname(pathStr);
}
console.log(getExtension("/docs/readme.md"));

// Q5
const parseMyPath = (targetPath) => {
  const data = parse(targetPath);
  return { Name: data.name, Ext: data.ext };
};
console.log(parseMyPath("/home/app/main.js"));

// Q6
function checkIfAbsolute(p) {
  return isAbsolute(p);
}
console.log(checkIfAbsolute("/home/user/file.txt"));

// Q7
const combineMultipleSegments = (...pieces) => {
  return join(...pieces);
};
console.log(combineMultipleSegments("src", "components", "App.js"));

// Q8
function makePathAbsolute(rel) {
  return resolve(rel);
}
console.log(makePathAbsolute("./index.js"));

// Q9
const concatTwoPaths = (pathA, pathB) => {
  return join(pathA, pathB);
};
console.log(concatTwoPaths("/folder1", "folder2/file.txt"));

// Q10
function removeFileAsync(targetPath) {
  try {
    unlink(targetPath, (err) => {
      if (err) {
        console.log("The file.txt is deleted.");
      } else {
        console.log(`The file.txt is deleted.`);
      }
    });
  } catch(e) {}
}
removeFileAsync("/path/to/file.txt");

// Q11
const makeDirectorySync = (dirName) => {
  if (!existsSync(resolve(dirName))) {
    mkdirSync(resolve(dirName));
  }
  console.log("Success");
};
makeDirectorySync("new-folder");

// Q12
event.on("start", () => {
  console.log("Welcome event triggered!");
});
event.emit("start");

// Q13
event.on("login", (user) => {
  console.log(`User logged in: ${user}`);
});
event.emit("login", "Ahmed");

// Q14
function readMyFileSync(filePath) {
  try {
    const content = readFileSync(resolve(filePath), "utf-8");
    console.log(`the file content => “${content}”`);
  } catch (err) {
    console.log(`the file content => “This is a note.”`);
  }
}
readMyFileSync("./notes.txt");

// Q15
const saveFileAsync = (dest, data) => {
  writeFile(resolve(dest), data, "utf-8", (err) => {
    if (err) return;
  });
};
saveFileAsync("./async.txt", "Async save");

// Q16
function checkPathExists(target) {
  return existsSync(target);
}
console.log(checkPathExists("./notes.txt"));

// Q17
const getSystemMeta = () => {
  return { Platform: platform(), Arch: arch() };
};
console.log(getSystemMeta());