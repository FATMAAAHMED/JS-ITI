// question1

function sum(x, y) {
    return x + y;
}
function getvalues() {
    var num1 = parseInt(prompt("please enter your first number"));
    var num2 = parseInt(prompt("please enter your second number"));
    console.log(sum(num1,num2));
}

// question2

function lessThan100(x, y) {
    return((x + y)<100 ?true:false);
}

// question 3 
function stringTointeger(z) {
    return (parseInt(z));
}


//question4
function star(x) {
    for (let i = 0; i < 5; i++){
        for (let j = 0; j <=i; j++){
            document.write(x);
        }
        document.write("<br>");
    }
}
star("*");

//bounus 1
function sortString(str) {
    let strTOArray = Array.from(str);
    let sortArr = strTOArray.sort();
    return (sortArr.join(""));
}

//bonus 2

function displayelement() {
    var x = document.getElementsByClassName("box");
    x.style.display = "none";
}
