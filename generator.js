const fs = require("fs");

function replacePlaceholder(arg_data, arg_placeholder, arg_value){
    // Replace the placeholder using the Regex
    const placeholder = new RegExp("" + arg_placeholder + "", "gm");
    return arg_data.replace(placeholder, arg_value);
}

function updatePage(arg_file, arg_fields, arg_values){
    // If the lengths of arg_fields and arg_values don't match then throw an error
    if(arg_fields.length != arg_values.length){
        throw new Error("The number of fields and values to update do not match");
    }

    // Read the contents of the file into the variable
    let t_content = fs.readFileSync(arg_file,"utf-8");

    // Replace each placeholder
    for(let i = 0; i < arg_fields.length; i++){
        t_content = replacePlaceholder(t_content, "%% " + arg_fields[i] + " %%", arg_values[i]);
    }

    fs.writeFileSync("./Html/Pages/testing.html", t_content, "utf-8");
}

// Export the updatePage
module.exports = updatePage;