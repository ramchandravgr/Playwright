let frequency = "always"
let impact = "blocker"

//frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor")

if (frequency === "always" && impact === "blocker") {
    console.log("Bug severity: P0")
}
else if (frequency === "always" && impact === "major") {
    console.log("Bug severity: P1")
}
else if (frequency === "always" && impact === "minor") {
    console.log("Bug severity: P2")
}
else if (frequency === "often" && impact === "blocker") {
    console.log("Bug severity: P1")
}
else if (frequency === "often" && impact === "major") {
    console.log("Bug severity: P2")
}
else if (frequency === "often" && impact === "minor") {
    console.log("Bug severity: P3")
}
else if (frequency === "rarely" && impact === "blocker") {
    console.log("Bug severity: P2")
}
else if (frequency === "rarely" && impact === "major") {
    console.log("Bug severity: P3")
}
else if (frequency === "rarely" && impact === "minor") {
    console.log("Bug severity: P4")
}
