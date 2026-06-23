// =========================
// Part 1 - Core Modules
// =========================

const fs = require("fs");
const zlib = require("zlib");

// 1) Read file in chunks
const readStream = fs.createReadStream("./big.txt", { encoding: "utf8", highWaterMark: 64 });

readStream.on("data", (chunk) => {
    console.log("Chunk:", chunk);
});

readStream.on("end", () => {
    console.log("Reading finished");
});

// 2) Copy file using streams
const source = fs.createReadStream("./source.txt");
const destination = fs.createWriteStream("./dest.txt");

source.pipe(destination);

destination.on("finish", () => {
    console.log("File copied using streams");
});

// 3) Compress file using gzip
const gzip = zlib.createGzip();

fs.createReadStream("./data.txt")
    .pipe(gzip)
    .pipe(fs.createWriteStream("./data.txt.gz"))
    .on("finish", () => {
        console.log("Compression completed");
    });


// =========================
// Part 2 - CRUD API
// =========================

const express = require("express");
const app = express();

app.use(express.json());

const FILE = "./users.json";

const readUsers = () => {
    if (!fs.existsSync(FILE)) return [];
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
};

const writeUsers = (users) => {
    fs.writeFileSync(FILE, JSON.stringify(users, null, 2));
};

// POST /users
app.post("/users", (req, res) => {
    const users = readUsers();

    const { id, name, age, email } = req.body;

    const exists = users.find((u) => u.id === id);

    if (exists) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    users.push({ id, name, age, email });
    writeUsers(users);

    res.json({
        message: "User added successfully"
    });
});

// PATCH /users/:id
app.patch("/users/:id", (req, res) => {
    const users = readUsers();

    const user = users.find((u) => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User ID not found"
        });
    }

    const { name, age, email } = req.body;

    if (name) user.name = name;
    if (age) user.age = age;
    if (email) user.email = email;

    writeUsers(users);

    res.json({
        message: "User updated successfully"
    });
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
    const users = readUsers();

    const index = users.findIndex((u) => u.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "User ID not found"
        });
    }

    users.splice(index, 1);

    writeUsers(users);

    res.json({
        message: "User deleted successfully"
    });
});

// GET /users
app.get("/users", (req, res) => {
    const users = readUsers();
    res.json(users);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
    const users = readUsers();

    const user = users.find((u) => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// =========================
// Part 3 - Node Internals
// =========================

// 1. Event Loop:
// Handles async tasks and moves callbacks to execution when the call stack is free.

// 2. Libuv:
// Core library behind Node.js async I/O, event loop, and thread pool.

// 3. Async Operations:
// Node sends async work to the OS or libuv, then executes callbacks when finished.

// 4. Call Stack vs Event Queue vs Event Loop:
// Call Stack -> executes functions.
// Event Queue -> stores completed callbacks.
// Event Loop -> checks stack and pushes callbacks for execution.

// 5. Thread Pool:
// A pool of worker threads used by libuv for tasks like file system and crypto.
// Set size using:
// process.env.UV_THREADPOOL_SIZE = 8;

// 6. Blocking vs Non-Blocking:
// Blocking code waits until completion.
// Non-blocking code continues execution and handles results later with callbacks/promises.
