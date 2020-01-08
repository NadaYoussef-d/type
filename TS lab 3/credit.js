document.querySelector('#btn').addEventListener('click', function () {
    var entry = document.getElementById('num').value;
    //let arr = entry.length
    console.log(entry);
    // console.log(arr);
    var sum = 0;
    for (var i = 0; i < entry.length; i++) {
        if (i % 2 !== 0) {
            sum += parseInt(entry[i]);
            console.log(i);
            console.log(sum);
        }
    }
    if (!entry.startsWith("50") || sum % 2 !== 0) {
        console.log('invalid');
        document.querySelector('.res').innerHTML = "Invalid";
    }
    else if (entry.endsWith('010')) {
        console.log('credit');
        document.querySelector('.res').innerHTML = "Credit";
    }
    else if (entry.endsWith('012')) {
        console.log('depit');
        document.querySelector('.res').innerHTML = "Depit";
    }
    else {
        console.log('invalid');
        document.querySelector('.res').innerHTML = "Invalid";
    }
    if (entry.length == 10) {
        console.log('CIB');
        document.querySelector('.name').innerHTML = "CIB";
    }
    else if (entry.length == 12) {
        console.log('HSBS');
        document.querySelector('.name').innerHTML = "HSBS";
    }
    else if (entry.length == 16) {
        console.log('QNB');
        document.querySelector('.name').innerHTML = "QNB";
    }
    else {
        console.log('NOT FOUND');
    }
});
