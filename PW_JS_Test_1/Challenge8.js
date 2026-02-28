const environment = "qa";

let baseUrl = "";
let apiKey = "";
let timeout = 0;
let description = "";

switch (environment.toLowerCase()) {
    case "dev":
        baseUrl = "https://dev-api.testingacademy.com";
        apiKey = "DEV_KEY_";
        timeout = 5000;
        description = "Unit testing environment";
        break;

    case "staging":
        baseUrl = "https://staging-api.testingacademy.com";
        apiKey = "STG_KEY_";
        timeout = 10000;
        description = "Pre-production environment";
        break;

    case "qa":
        baseUrl = "https://qa-api.testingacademy.com";
        apiKey = "QA_KEY_";
        timeout = 7500;
        description = "QA environment";
        break;

    case "prod":
        baseUrl = "https://prod-api.testingacademy.com";
        apiKey = "PROD_KEY_";
        timeout = 30000;
        description = "Live production environment";
        break;

    default:
        console.log("Error: Unknown environment specified.");
}


console.log("Environment : " + environment.toUpperCase());
console.log("Base URL    : " + baseUrl);
console.log("API Key     : " + apiKey + "xxxxxxxx");
console.log("Timeout     : " + timeout + "ms");
console.log("Description : " + description);
