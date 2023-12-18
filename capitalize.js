function capital(){
    var str = document.getElementById("t1").value ;
    var capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    document.getElementById('p1').innerHTML = capitalized;

}