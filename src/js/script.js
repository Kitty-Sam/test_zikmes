console.log("webpack")

function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}



function validateForm () {
    let x = document.forms["phoneForm"]["q"].value;
    if (x.length <= 6 || isNumber(x)) {
        alert("Incorrect data. Please, try one more time");
        document.forms["phoneForm"]["search"].value = ""
        return false;
    }
}
 window.validateForm = validateForm;
