let isPresent = true;
let isDisplayed = true;
let isEnabled = true;

let state = "";
let action = "";

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
    action = "Perform action";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
    action = "Wait for element to be enabled";
} else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
    action = "Scroll into view";
} else if (isPresent === false) {
    state = "NOT FOUND";
    action = "Check selector";
}

// Ternary operator for severity level
let severity = (state === "READY") ? "OK" : (state === "NOT FOUND") ? "CRITICAL" : "WARNING";

console.log("Status   : " + state);
console.log("Severity : " + severity);
console.log("Action   : " + action);

