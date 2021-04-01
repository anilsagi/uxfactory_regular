function formValidation() 
{
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dob").value;
    var agE = document.getElementById("age").value;
    var citY = document.getElementById("cityName").value;
    var emailId = document.getElementById("Email").value;
    var mobNum = document.getElementById("mobileNum").value;

    if (fName == "" )
        {
        alert ('Please Enter your first Name');
        }   
        else if (lName == "" ) {
            alert ('Please Enter your last Name');
        }
        else if (dateOfBirth == "" ) {
            alert ('Please Enter your date of birth');
        }
        else if (agE <= "18" ) {                
            alert ('Please Enter your Age greater than 18 yrs');
        }
        else if (citY == "" ) {
            alert ('Please Enter your City Name');
        }
        else if (emailId == "" ) {
            alert ('Please Enter your valid email id');
        }
        else if (mobNum == "" ) {
            alert ('Please Enter your valid mobile num');
        }
        else 
            alert (`First name : ${fName} Last name:${lName} Date of birth: ${dateOfBirth} Age : ${agE} Email id: ${emailId} Mobile No: ${mobNum} ${mobNum}    your form was Submitted`);
}




/*switch (fName){
    case "" :
    alert ('Please Enter your first Name');
    continue;
    case "" :
    alert ('Please Enter your first Name');
    continue;
    case "" :
    alert ('Please Enter your first Name');
    continue;
 }*/
