let attempts = 0;
const MAX_ATTEMPTS = 5;
let success = false;

do {
    attempts++;
    let randomValue = Math.random();

    if (randomValue > 0.6) {
        success = true;
        console.log("Attempt " + attempts + ": SUCCESS (Response 200 OK)");
    } else {
        console.log("Attempt " + attempts + ": FAILED (Timeout/Error)");
    }

} while (!success && attempts < MAX_ATTEMPTS);

if (success) {
    console.log("API call PASSED after " + attempts + " attempt(s).");
} else {
    console.log("API call FAILED after " + MAX_ATTEMPTS + " max attempt(s).");
}
