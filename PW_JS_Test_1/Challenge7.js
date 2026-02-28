let responseTimes = [120, 230, 450, 510, 180, 620]
const SLA_LIMIT = 500
let min = responseTimes[0];
let max = responseTimes[0];
let average = 0;
let slaBreaches = 0;

for (let i = 0; i < responseTimes.length; i++) {
    if (responseTimes[i] < min) {
        min = responseTimes[i];
    }
    if (responseTimes[i] > max) {
        max = responseTimes[i];
    }
    if (responseTimes[i] > SLA_LIMIT) {
        slaBreaches++;
    }
    average += responseTimes[i];
}

average = average / responseTimes.length;

console.log("Total requests: " + responseTimes.length);
console.log("Min: " + min);
console.log("Max: " + max);
console.log("Average: " + average);
console.log("SLA Breaches: " + slaBreaches + " (" + (slaBreaches / responseTimes.length) * 100 + "%)");

if ((slaBreaches / responseTimes.length) * 100 > 20) {
    console.log("Overall status: SLA Violation");
} else {
    console.log("Overall status: OK");
}