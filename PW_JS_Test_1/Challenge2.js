let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

console.log("Total Tests: " + testResults.length);
console.log("Passed: " + passCount);
console.log("Failed: " + failCount);
console.log("Skipped: " + skipCount);
console.log("Pass Rate: " + (passCount / testResults.length) * 100 + "%");

if (passCount === testResults.length) {
    console.log("ready for release");
}
else if (failCount <= 2) {
    console.log("review");
}
else if (failCount > 2) {
    console.log("block release");
}