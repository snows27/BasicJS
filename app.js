let qrt = parseInt(prompt("จำนวนสินค้า"));
let sum = 0
for(var i = 0; i < qrt; i++){
    let itemprice = parseInt(prompt("ราคาสินค้าชิ้นที่: "+(i+1)));
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "+(i+1)+" = "+itemprice+" บาท"+"</br>";
    sum += itemprice
}
document.getElementById("result").innerHTML = "ราคารวมทั้งสิ้น "+sum+" บาท"