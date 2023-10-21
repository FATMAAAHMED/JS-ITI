function saveInLocalStorage() {
  var inputs = document.getElementsByTagName("input");
  var remember = document.getElementById("check");
  if (remember.checked == true) {
    localStorage.setItem("userName", inputs[0].value);
    localStorage.setItem("password", inputs[1].value);
  } else {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
  }
}

///q3
// var xhr = new XMLHttpRequest();

// xhr.open("Get", "https://reqres.in/api/users/1");

// xhr.send();

// xhr.addEventListener("load", function () {
//   var user = JSON.parse(xhr.response);
//   // console.log(user);
//   var fName = document.createElement("h1");
//   fName.textContent = user.data.first_name;
//   document.body.appendChild(fName);
//   var lName = document.createElement("h1");
//   lName.textContent = user.data.last_name;
//   document.body.appendChild(lName);
//   var img = document.createElement("img");
//   img.src = user.data.avatar;
//   document.body.appendChild(img);
// });

function displayUser(uId, e) {
  if (e.key == "Enter") {
    var xhr2 = new XMLHttpRequest();
    xhr2.open("Get", "https://reqres.in/api/users/" + uId);
    xhr2.send();
    xhr2.addEventListener("load", function () {
      var userI = JSON.parse(xhr2.response);
      console.log(userI);
      var UfName = document.createElement("h1");
      UfName.textContent = userI.data.first_name;
      document.body.appendChild(UfName);
      var UlName = document.createElement("h1");
      UlName.textContent = userI.data.last_name;
      document.body.appendChild(UlName);
      var img2 = document.createElement("img");
      img2.src = userI.data.avatar;
      document.body.appendChild(img2);
    });
  }
}
