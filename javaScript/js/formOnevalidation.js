//form validations

function formValidation(){
    var fName = document.getElementsByClassName("names");
    console.log("check", fName);
    if(fName[0].value == "" || fName[1].value == "" ){
        alert("first to be filled");
    }
    else{
        alert("proceed");
    }
}
