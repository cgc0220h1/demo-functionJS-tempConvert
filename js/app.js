function tempConvert(temp) {
    temp = +temp;
    document.getElementById('result').innerHTML = (temp - 32) / 1.8 + " độ C";
}