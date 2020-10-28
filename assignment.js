class Assignment{
    constructor(arg_number, arg_title, arg_name, arg_description){
        this.number = arg_number;
        this.title = arg_title;
        this.name = arg_name;
        this.description = arg_description;
    }

    setNumber(arg_number){
        this.number = arg_number;
    }

    setTitle(arg_title){
        this.title = arg_title;
    }

    setName(arg_name){
        this.name = arg_name;
    }

    setDescription(arg_description){
        this.description = arg_description;
    }

    generateCard(){
        /** @todo implement */
    }
}

module.exports = Assignment;