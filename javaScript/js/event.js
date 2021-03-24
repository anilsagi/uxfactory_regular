function display(){
alert("Hi welcome Javascript event Handling");
}
display();

//onmouseover/onmouseout
function onMouseOverEvent(X){
    X.style.color="red";
    X.style.backgroundColor='blue';
    X.innerHTML="Where are you?";
}
function onMouseOutEvent(Y){
    Y.style.color="green";
    Y.style.backgroundColor='violet';
    Y.innerHTML="Hi, call me?";
}
//onclick
function additionCalc(onClick){
    var x = parseInt(document.firstForm.num1.value);
    var y = parseInt(document.firstForm.num2.value);
    var z= document.firstForm.Total;
    
    if (onClick.value=="Add"){
        z.value =x+y;
    }
    else if (onClick.value=="mul"){
        z.value =x*y;
    }
    else if (onClick.value=="sub"){
        z.value =x-y;
    }
    else if (onClick.value=="div"){
        z.value =x/y;
    }
}

    


