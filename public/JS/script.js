var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
// console.log(getUrl.pathname);
var goodColor = "#82FF84";
var badColor = "#FF7476";

var logins = [
  {
    user:"Sian",
    mail:"acsian7@gmail.com",
    pwd:"sicar96"
  },
  {
    user:"Arul",
    mail:"Arularul@gmail.com",
    pwd:"dondon"
  },
  {
    user:"Varun",
    mail:"VarunPuvan@gmail.com",
    pwd:"Varun"
  },
  {
    user:"Goutham",
    mail:"Fastbowler@gmail.com",
    pwd:"cricket"
  },
  {
    user:"Shakila",
    mail:"ShailaSothy@gmail.com",
    pwd:"Shaila"
  }];
  /* Filter Method */
  filterSelection("all");
  function filterSelection(passing_letter) {
    var x, i;
    x = document.getElementsByClassName("imgframe");
    if (passing_letter == "all")/* You clcick a  */ c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(passing_letter) > -1) w3AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementsByClassName("xpagination");
  var btns = document.getElementById("ch-btn");
  for (var i = 0; i < btnContainer.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  /* END OF Filter Function */
  /* Input Validation */
  function checkval(movieaddbox)
  {
    //Store the Confimation Message Object ...
    var message2 = document.getElementById('Message2');
    var required = "";
    var letters=/^[A-Za-z]+[\w ]+[\w ]+[\w ]$/;
    var btn = document.getElementById('normbut');

    if(movieaddbox.value == required)
    {
      message2.style.color = badColor;
      message2.innerHTML = "Please Enter a TV Series Title";
      btn.disabled = true;
    }
    else if(movieaddbox.value.match(letters)){
      message2.innerHTML = "";
      btn.disabled = false;
    }
    else
    {
      //The Text do not match.
      //notify the user.
      message2.style.color = badColor;
      message2.innerHTML = "Invalid TV Show name"
      btn.disabled = true;
    }
  }

  function output(){
    document.getElementById('Message2').innerHTML = "TV Show name has been added";
  }


  function namevalidation(uname){
    var message = document.getElementById('namemsg');
    var matchfix = /^[A-Za-z]+$/;

    if(uname.value == ""){
      message.innerHTML = "Your Name is Required";
      uname.style.border = "2px red solid";
      document.getElementById("btn-reg").disabled = true;
    }
    else{// for password
      if(uname.value.match(matchfix) && uname.value.length >= 5){
        message.innerHTML = "";
        uname.style.border = ".5px black solid";
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        message.innerHTML = "Your Name is invalid";
        uname.style.border = "2px red solid";
        document.getElementById("btn-reg").disabled = true;
      }
    }
  }

  function mailvalidate(email){
    var message = document.getElementById('mailmsg');
    var matchfix = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value == ""){
      message.innerHTML = "Your Email Address is Required";
      document.getElementById("btn-reg").disabled = true;
    }
    else{// for password
      if(email.value.match(matchfix)){
        message.innerHTML = "";
        email.style.border = ".5px black solid";
        email.style.backgroundColor = "#FFF";
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        message.innerHTML = "Your Email Id is invalid";
        email.style.backgroundColor = "#FF7476";
        document.getElementById("btn-reg").disabled = true;
      }
    }
  }

  function passval(pwd){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(pwd.value !== ""){
      pwd.style.backgroundColor = "#FFF";
      if(pwd.value.match(lowerCaseLetters)){
        document.getElementById('low').style.color = goodColor;
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        document.getElementById('low').style.color = badColor;
        document.getElementById("btn-reg").disabled = true;
      }
      if(pwd.value.match(upperCaseLetters)){
        document.getElementById('up').style.color = goodColor;
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        document.getElementById('up').style.color = badColor;
        document.getElementById("btn-reg").disabled = true;
      }
      if(pwd.value.match(numbers)){
        document.getElementById('num').style.color = goodColor;
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        document.getElementById('num').style.color = badColor;
        document.getElementById("btn-reg").disabled = true;
      }
      if(pwd.value.length >= 8){
        document.getElementById('length').style.color = goodColor;
        document.getElementById("btn-reg").disabled = false;
      }
      else{
        document.getElementById('length').style.color = badColor;
        document.getElementById("btn-reg").disabled = true;
      }
    }
    else
    {
      pwd.style.backgroundColor = "#FF7476";
    }


  }
  console.log(logins);


  function Register(uname, email, pwd){
    msg = document.getElementById("passmsg");
    if(uname.value !== "" && email.value !== "" && pwd.value !== ""){
      logins.unshift({user:uname.value, mail:email.value, pwd:pwd.value});
      console.log(logins);
    }
    else{
      document.getElementById("btn-reg").disabled = true;
    }
  }

  // while(logins.length <= 4){
  //   logins.unshift({name:uname.value, mail:email.value, pwd:pwd.value});
  //   console.log(logins);

  function check(mailer, passsword){
    var message = document.getElementById("Message");
    if(mailer.value !== ""){
      if(passsword.value !== ""){
        for(i=0; i < logins.length; i++){
          if(mailer.value === logins[i].mail){
            if(passsword.value === logins[i].pwd){
              message.style.color = goodColor;
              message.innerHTML = "Login Success";
              break;
            }
            else{
              message.style.color = badColor;
              message.innerHTML = "Login Failed, Incorrect password";
              break;
            }
          }
          else{
            message.style.color = badColor;
            message.innerHTML = "Login Failed, Incorrect Email";
            break;
          }
        }
      }
      else{
        message.style.color = badColor;
        message.innerHTML = "Please Enter Password"
      }
    }
    else{
      message.style.color = badColor;
      message.innerHTML = "Please Enter Email";
    }
  }

  function filt(y){
    var x = y.value;
    search(x);
  }


  function search(x){
    document.getElementById('rootus').innerHTML = "";
    var dat = x.value;
    console.log(dat);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);

        console.log(data);
        for (var i = 0; i < data.length; i++) {
          document.getElementById('rootus').innerHTML += '<div class="imgframe S action horror adventure fantasy comedy show"> <!-- supernatural horror action comedy --><div class="img-holder"><img src="'+data[i].banner+'" alt=""></div><div class="ititle"><p class="title"><a href="'+baseUrl+'desc/'+data[i].id+'">'+data[i].seriesName+'</p></a><p class="epsd"><b>Network :</b> '+data[i].network+'</p></div></div>'
        }
      }
    }

    xhttp.open("GET", baseUrl+"search/"+dat, true);
    xhttp.send();
  }

function subscribelog(){
  var mail = document.getElementById('subloguname').value;
  var password = document.getElementById('sublogpassword').value;
  var seriesid = document.getElementById('cryid').innerHTML;

  var params = "mail="+mail+"&password="+password+"&sid="+seriesid;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
      // var data = JSON.parse(this.responseText);
      // console.log(data);

    }
  }


  xhttp.open("PUT", baseUrl + 'sublog', true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
}




function subscribe(){
  var name = document.getElementById('cryname').innerHTML;
  var firstAired = document.getElementById('cryfa').innerHTML;
  var network = document.getElementById('crynet').innerHTML;
  var overview = document.getElementById('cryview').innerHTML;
  var status = document.getElementById('crystatus').innerHTML;
  var id = document.getElementById('cryid').innerHTML;
  var subid = document.getElementById('suber').innerHTML;

  var params = "name="+name+"&firstAired="+firstAired+"&network="+network+"&overview="+overview+"&status="+status+"&subid="+subid;

  console.log(params);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      console.log(data);
      document.getElementById('subbedbut').classList.remove("hidden");
      document.getElementById('subsbut').classList.add("hidden");
    }
  }


  xhttp.open("PUT", baseUrl+"/subscribe/"+id, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
}

if(getUrl.pathname == "/desc/"+document.getElementById('cryid').innerHTML && document.getElementById('suber').innerHTML !== null || undefined){
  console.log("hello world");
  checksubscribe();
}


function checksubscribe(){
  var sid = document.getElementById('suber').innerHTML;
  var id = document.getElementById('cryid').innerHTML;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
      // console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      for (var i = 0; i < data.subscriber[i].length; i++) {
        if(data.subscriber[i] == sid ){
          console.log("found");
          document.getElementById('subbedbut').classList.remove("hidden");
          break;
        }
        else{
          document.getElementById('subsbut').classList.remove("hidden");
          console.log("Not found");
        }
      }
      // console.log(data.subscriber);
  }
}


  xhttp.open("GET", baseUrl+"/checksubscribe/"+id, true);
  xhttp.send();
}
