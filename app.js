function calculating(num) {
    var result = document.getElementById("input")
    result.value += num;
}

function Operation() {
    final = document.getElementById("input");
    final.value = eval(final.value)
}

function clearall() {
    var result = document.getElementById("input")
    result.value = "";
}