// //q2
// var opened
// function newWIN() {
//     opened= open("index2.html")
// }
// function closewind() {
//     opened.close()
// }





// //q3

// var regex = /[0-9]*(0|2|4|6|8)$/
// do {
//     var num = prompt("enter a number");
// } while (regex.test(num)==false);


// //q4
// var nameRegex=/[a-z]*/i
// var StdName;
// do {
//     StdName =prompt("enter your name")
// } while (nameRegex.test(StdName) == false);

// var phNumRegex=/[0-9]{8}$/
// var StdphoneNumber;
// do {
//     StdphoneNumber=prompt("enter your phone number")
// } while (phNumRegex.test(StdphoneNumber) == false);

// var mobNumReg=/^(010|011|012|015)[0-9]{8}$/
// var StdMobileNumber;
// do {
//     StdMobileNumber=prompt("enter your mobile number")
// } while (mobNumReg.test(StdMobileNumber) == false);


// var emailReg=/^[a-z]*@[0-9]{3}.com$/i
// var StdEmail;
// do {
//     StdEmail=prompt("enter your  email number")
// } while (emailReg.test(StdEmail) == false);


// var col = prompt("enter a color")
// switch (col) {
//     case 'red':
//         document.write(`<p style="color:red;">welecom dear guest </p>${StdName}`)
//         document.write(`<p style = "color:red; ">your phone number</p> ${StdphoneNumber}`)
//         document.write(`<p style = "color:red; ">your mobile number</p> ${StdMobileNumber}`)
//         document.write(`<p style = "color:red; ;">your email number</p> ${StdEmail}`)
//         document.write(`<p style = "color:red; ;">today is</p>${new Date().getDay()} `)
//         document.write(`<p style = "color:red; ;">we are in month</p>${new Date().getMonth()} `)
//         document.write(`<p style = "color:red; ;">and year</p>${new Date().getFullYear()} `)
//         document.write(`<p style = "color:red; ;">today is</p>${new Date().toDateString()} `)
//         break;
        
//     case 'green':
//         document.write(`<p style="color:green;">welecom dear guest </p>${StdName}`)
//         document.write(`<p style = "color:green;">your phone number</p> ${StdphoneNumber}`)
//         document.write(`<p style = "color:green; ">your mobile number</p> ${StdMobileNumber}`)
//         document.write(`<p style = "color:green; ">your email number</p> ${StdEmail}`)
//         break;
//     case 'blue':
//         document.write(`<p style="color:blue; ;">welecom dear guest </p>${StdName}`)
//         document.write(`<p style = "color:blue;">your phone number</p> ${StdphoneNumber}`)
//         document.write(`<p style = "color:blue; ">your mobile number</p> ${StdMobileNumber}`)
//         document.write(`<p style = "color:blue; ">your email number</p> ${StdEmail}`)
//         break;
//     default:
//         alert("invalid color")

// }

//q5
var stdArr = [{ studentName: "fatma", studentDegree: 80},
    { studentName: "nada", studentDegree: 95 },
    { studentName: "ahmed", studentDegree: 66 },
    { studentName: "ali", studentDegree: 50 }]

    //name where degree between 90 and 100

function func(y) {
        if(y.studentDegree >= 90)
            return y; 
}

console.log(stdArr.find(func).studentName);


////name where degree less than 60
function func2(x) {
    if (x.studentDegree < 60)
        return x;
}
console.log(stdArr.filter(func2)[0].studentName);


// //push element
stdArr.push({ studentName: "yasser", studentDegree: 55 });
for ( var element in stdArr) {
    console.log(stdArr[element]);
}


// //pop element
stdArr.pop();
for (var element2 of stdArr) {
    console.log(element2)
}