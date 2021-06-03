// console.log('is it working?');
// document.getElementById('bang').innerHTML = 'Hi honey!'
// function myFunction() {
//     let a = document.getElementById("getNumber1").value;
//     let b = document.getElementById("getNumber2").value;
//     let s = (Number(a.value) + Number(a.value)) / 2;
// }
// document.document.getElementById("c").innerHTML = s;
// Hometask:
// 1.
// var d = new Date();
// d.setMonth(6);
// d.setFullYear(1997);
// d.setDate(13)
// document.getElementById("d").innerHTML = d;
// // 2.
// let c = Math.sqrt(Math.pow(5, 7) - 284);
// document.getElementById('c').innerHTML = c;
// // 3.

// function stones() {
//     let summ = 0;
//     let num = 0;
//     for (let i = 1; i <= 3; i++) {
//         num = Math.floor(Math.random() * 5 + 1);
//         summ += num;
//     }
//     return summ;
// }
// console.log(stones());

function add() {
    let uName = document.getElementById('uName').value;
    let comment = document.getElementById('comment').value;
    let commentBox = document.getElementById('collect');

    commentBox.innerHTML = uName + ' ' + comment;
}
document.getElementById('collect').style.cssText = 'color: cyan; font-size: 60; border-shadow: 10px';
document.getElementById('comment').style.cssText = 'width: 300px; height: 100px';
document.getElementsByTagName('label').style.cssText = 'font-size: 40; color: cyan; ';