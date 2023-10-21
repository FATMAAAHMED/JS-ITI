//q1
var email = prompt("please enter email");
function checkEmail() {
    // var email = prompt("please enter email");
    for (var i = 1; i < email.length-1; i++){
    if (email.charAt(i) =="@")
        return true;
}
    return false;
    
}
console.log(checkEmail());


///q2
function charCount(char, str) {
    count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == char)
            count++;
    }
    return count;
}
//q3
var arrayOfNum = [];
for (var i = 0; i < 3; i++){
    arrayOfNum[i] =parseInt(prompt("please enter number"));
}
var sum=0, mult =1, devide=arrayOfNum[0]*arrayOfNum[0]
for (let i = 0; i < arrayOfNum.length; i++) {
    sum += arrayOfNum[i];
    mult *= arrayOfNum[i];
    devide = devide / arrayOfNum[i];
    }
console.log(sum);
console.log(mult);
console.log(devide);

//4
var arrOfNum = [];
for (var i = 0; i < 5; i++){
    arrOfNum[i] = parseInt(prompt("please enter number"+i+""));
    
}
document.write("<h2>yo have entered values  "+arrOfNum+"</h2>")
//desc
var desSortedArr = arrOfNum.sort(function (a, b) {
    return a - b;
})
document.write("<h2>descending array is "+desSortedArr+"</h2>")

//asc
var ascSortedArr = arrOfNum.sort(function (a, b) {
    return b-a;
})

document.write("<h2>ascending array is "+ascSortedArr+"</h2>")

//
var rad =parseInt(prompt("enter circle raduis"));

function calcArea(r) {
    return Math.PI * Math.pow(r, 2);
}
var area = calcArea(rad);
alert(area);

// q6
var val = parseInt(prompt("enter value you want to calculate its square root"));

alert(Math.sqrt(val));


//q7
var angle = parseInt(prompt("enter angle"))
document.write(Math.cos(angle * Math.PI) / 180)
