/**
*
* script.js 
* @author - Mazeen
* @date - 29/7/2023 
**/
function validEntry(event) {
    var keyCode = event.keyCode || event.which;
    var keyValue = String.fromCharCode(keyCode);
    var numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(keyValue)) {
        event.preventDefault();
    }
};

function move(fromtxt, totxt) {
    if (fromtxt.value.length === 1) {
        document.getElementById(totxt).focus();
    }
};

function validation() {
    var a =  document.getElementById("otp-1").value
    var b =  document.getElementById("otp-2").value
    var c =  document.getElementById("otp-3").value
    var d =  document.getElementById("otp-4").value 

    if (a.trim() == "" || b.trim() == "" || c.trim() == "" || d.trim() == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill in all the inputs"
    }
    else {
        document.getElementById("otp-1").value = "";
        document.getElementById("otp-2").value = "";
        document.getElementById("otp-3").value = "";
        document.getElementById("otp-4").value = ""; 
        document.getElementById("errorMsg").innerHTML = "";
    }
};