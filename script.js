/*Create a contact form. It should have an input for name, last name, telephone number, email address and submit button.
Validate that 'name' and 'last name' inputs are not empty and use regex expressions to validate the telephone and email addresses respectively.
Call a function when the submit button is clicked to test these*/

document.getElementById("submit").addEventListener("click", function(){
    var inputFields = document.getElementsByTagName("input");

    for(var i=0; i < inputFields.length; i++){
        var theInput = inputFields[i].value;
        var thePattern = new RegExp(inputFields[i].pattern);
        var theTest = thePattern.test(theInput);
        console.log(theTest);

        if(theTest === false){
            console.log(inputFields[i].name + "is incorrect")
        } else {
            console.log(inputFields[i].name +": " + theInput);
        }
    }
})
