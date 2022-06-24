
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('metInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let len = e.target.value;
    document.getElementById('feetOutput').innerHTML = len * 3.281;
    document.getElementById('inOutput').innerHTML = len * 39.37;
    document.getElementById('kmOutput').innerHTML = len / 1000;
});