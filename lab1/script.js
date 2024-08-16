function validate(){
  var user_name = document.getElementById("user_name").value ;
  var email = document.getElementById("email").value ;
  var tel = document.getElementById("tel").value ;
  var password = document.getElementById("password").value ;
  var confirm_password = document.getElementById("confirm-password").value ;
  var regExpName = /([0-9])+/ ;
  var regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/
 
  var result = regExpEmail.test(email);
   console.log(result)
  if(user_name == ""){
    alert("Must have a username");
    document.form1.user_name.focus();
    return false ;
  }
  if( user_name.length < 3 ){
    alert("name should atleat have 3 letter")
    document.form1.user_name.focus();
    return false ;
  }
  if( user_name.search(regExpName) != -1 ){
    alert("name should not have number")
    document.form1.user_name.focus();
    return false ;
  }
  if(email == ""){
    alert("Must have a email");
    document.form1.email.focus();
    return false ;
  }
  if(!regExpEmail.test(email)){
    alert("Enter a valid email");
    document.form1.email.focus();
    return false ;
  }
  if(tel.length != 10){
    alert("Enter a valid phone umber");
    document.form1.tel.focus();
    return false ;
  }
  if(password == ""){
    alert("Must have a password");
    document.form1.password.focus();
    return false ;
  }
  if(password.length < 6){
    alert("Must have 6 char in password");
    document.form1.password.focus();
    return false ;
  }
  if(confirm_password == "")  {
    alert("you must confirm your password");
    document.form1.confirm-password.focus();
    return false ;
  }

  if(confirm_password != password){
    alert("Password and confirm password does not match");
    document.form1.confirm-password.focus();
    return false ;
  }
  return true ;
}