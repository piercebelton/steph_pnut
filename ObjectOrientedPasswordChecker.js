function credentialChecker() {
  //user inputs their user id and password
  var userId = prompt("Enter your username");
  var password = prompt("Enter your password");

  //Objects for responses
  var validCreds = { valid: true };
  var invalidUser = { valid: false, reasonSym: "User ID cannot contain symbols", reasonLen: "User ID must be at least 6 characters"};
  var invalidPass = { valid: false, reasonSym: "Your password must contain symbols", reasonLen: "Your password must be at least 6 characters"};

  var reason1 = "";
  var reason2 = "";
  var reason3 = "";
  var reason4 = "";

  //Credential checks
  if (userId.length < 6){ //Is userID less than 6 characters
    reason1 = invalidUser.reasonLen + "\n"; //Yes, return invalidUser object reason.len
  }

  if (userId.includes("&") || userId.includes("$") || userId.includes("#")){
    reason2 = invalidUser.reasonSym + "\n";
  }

  if (password.length < 6){
    reason3 = invalidPass.reasonLen + "\n";
  }

  if (!password.includes("&") && !password.includes("$") && !password.includes("#")){
    reason4 = invalidPass.reasonSym + "\n";
  }

  var allTheReasons = reason1 + reason2 + reason3 + reason4 // Creates one variable from many

  if(allTheReasons === ""){                 //if ALL reasons are blank, i.e. NONE of the above "ifs" pass gives an alert that creds pass
    alert("Your head a-splode!");
  }else{
    alert(allTheReasons);                 // takes all reasons that trigger and combines them into a sweet alert!
  }
}
