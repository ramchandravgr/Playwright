var usercount = 8
var roles = ["admin", "editor", "viewer", "tester", "manager"]

for (let i = 1; i <= usercount; i++) {
    let randomrole = roles[Math.floor(Math.random() * roles.length)]
    let userid = "USR000" + i
    let username = "TestUser_" + i
    let useremail = "testuser" + i + "@testingacademy.com"
    let status = "ACTIVE"
    if (i % 3 === 0) {
        status = "INACTIVE"
    }
    console.log(userid + " | " + username + " | " + useremail + " | " + randomrole + " | " + status)

}