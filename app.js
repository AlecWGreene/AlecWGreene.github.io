// Load Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const updatePage = require("./generator");

async function app(){
    let t_nav = fs.readFileSync("./Html/Templates/NavBar.html","utf-8", (arg_error)=>{console.log(arg_error); });
    console.log(updatePage("./Html/Outlines/outline.html",["NavBar"],[t_nav])); // BUG: Not replacing placeholder
    
    // Get the desired page to update
    let t_continue = await inquirer.prompt({
        type: "list",
        name: "selection",
        message: "Which page would you like to update?",
        choices: ["About Me", "Portfolio", "Resume", "Contact"]
    });

    // While the user is still updating the information
    while(t_continue.selection != "Finish"){

        // Collect user selection
        await inquirer.prompt({
            type: "list",
            name: "selection",
            message: "Which page would you like to update?",
            choices: ["About Me", "Portfolio", "Resume", "Contact", "Finish"]
        });

        // Switch based on user selection
        switch(t_continue.selection){
            case "About Me":
                getInput_AboutMe();
                break;
            case "Portfolio":
                getInput_Portfolio();
                break;
            case "Resume":
                getInput_Resume();
                break;
            case "Contact":
                getInput_Contact();
                break;
            default:
                throw new Error("Switch for user selection navigated to default");
        }
    }
}

async function getInput_AboutMe(){
    // Variables to store user input
    let t_fields = [], t_values = [];

    // Select a field
    let t_selection = await inquirer.prompt({
        type: "list",
        name: "field",
        message: "Which field would you like to update",
        choices: ["Profile Picture", "About Me Description"]
    });

    // While user isn't done with inputing information
    while(t_selection.field != "Finish"){
        // Get input of the value until the user is satisfied
        let t_input = await getValue(t_selection.field);

        // Store data
        t_fields.push(t_selection.field);
        t_values.push(t_input);

        // Get selection from the user
        t_selection = await inquirer.prompt({
            type: "list",
            name: "field",
            message: "Which field would you like to update",
            choices: ["Profile Picture", "About Me Description", "Finish"]
        });
    }

    updatePage("", t_fields, t_values);
}

async function getInput_Portfolio(){

}

async function getInput_Resume(){

}

async function getInput_Contact(){

}

async function getValue(arg_field, arg_previous){

}

// Run app
app();
