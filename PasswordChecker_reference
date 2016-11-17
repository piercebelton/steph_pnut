function passwordChecker () {
	var userId = prompt("Please enter a User ID");
	var password = prompt("Please enter a Password");
	alert("Your credentials are valid: " + (idPasswordSame(userId,password) && idPasswordLength(userId,password) && idSpecialChar(userId) && passwordSpecialChar(password) && passwordPassword(password) && passwordInteger(password) && passwordCase(password)));



}

function idPasswordSame(userId,password) {
	return userId !== password;
}
function idPasswordLength(userId,password) {
	return userId.length >= 6;
}
function idSpecialChar(userId) {
	return !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
}
function passwordSpecialChar(password) {
	return password.includes("!") || password.includes("#") || password.includes("$");
}
function passwordPassword(password) {
	return password !== "password";
}
function passwordInteger(password) {
	return password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9") || password.includes("0");
}
function passwordCase(password) {
	var lowerPass = password.toLowerCase();
	var upperPass = password.toUpperCase();
	return (password !== lowerPass && password !== upperPass) && !(password === lowerPass === upperPass);
}





passwordChecker();
