var pizzaHinta = 0;
var array = [];
var lisa = document.getElementById("yht");

function radio(){
    var rkoko = document.getElementsByName("koko");
    for (var i = 0; i < 3; i++) {
        if (rkoko[i].type == "radio" && rkoko[i].checked) {
            var sel = (document.getElementById("hintaPizza").innerHTML + rkoko[i].value)*1;
            document.pizzaKoko.pizzahin.value = sel + (document.pizzaKoko.lisa.value*1);
        }
    }
}

function checkb1(){
    var chb1 = document.getElementById("chkb1");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb1.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.7).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.70).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.7.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.70).toFixed(2);
    } 
}

function checkb2(){
    var chb2 = document.getElementById("chkb2");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb2.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.6).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.60).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.6.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.60).toFixed(2);
    } 
}

function checkb3(){
    var chb3 = document.getElementById("chkb3");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb3.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.5).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.50).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.5.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.50).toFixed(2);
    } 
}

function checkb4(){
    var chb4 = document.getElementById("chkb4");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb4.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.7).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.70).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.7.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.70).toFixed(2);
    } 
}

function checkb5(){
    var chb5 = document.getElementById("chkb5");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb5.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.5).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.50).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.5.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.50).toFixed(2);
    } 
}

function checkb6(){
    var chb6 = document.getElementById("chkb6");
    var pizzahin = document.getElementById("hintaPizza").value;
    pizzahin = pizzahin * 1;

    if(chb6.checked){
        document.pizzaKoko.pizzahin.value = (pizzahin + 0.7).toFixed(2);
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1) + 0.70).toFixed(2);
    } else {
        document.pizzaKoko.pizzahin.value = (pizzahin - 0.7.toFixed(2));
        document.pizzaKoko.lisa.value = ((document.pizzaKoko.lisa.value*1)-0.70).toFixed(2);
    } 
}





function Pizza(koko,taytteet,pizzaHinta) {
  this.koko = koko;
  this.taytteet = taytteet;
  this.pizzaHinta = 0;
}

Pizza.prototype.hinta = function() {
  if (this.koko === "normaali") {
    this.pizzaHinta += 5;
  }
  else if (this.koko === "perhe") {
    this.pizzaHinta += 7;
  }

  if (this.taytteet.indexOf("kinkku") >= 0) {
    this.pizzaHinta += 0.70;
  }

  if (this.taytteet.indexOf("ananas") >= 0) {
    this.pizzaHinta += 0.60;
  }
  if (this.taytteet.indexOf("tonnikala") >= 0) {
    this.pizzaHinta += 0.50;
  }
  if (this.taytteet.indexOf("herkkusieni") >= 0) {
    this.pizzaHinta += 0.70;
  }
  if (this.taytteet.indexOf("oliivi") >= 0) {
    this.pizzaHinta += 0.50;
  }
  if (this.taytteet.indexOf("lisäjuusto") >= 0) {
    this.pizzaHinta += 0.70;
  }

return this.pizzaHinta;
}




$(document).ready(function(){
  $("form#pizzakoko").submit(function(event){
    event.preventDefault();

    var koko = $("input[type=radio][name=koko]:checked").val();
    var taytteet = [];
    $("input[type=checkbox][name=taytteet]:checked").each(function() {
        taytteet.push($(this).val());
    });
    var uusiPizza = new Pizza(koko,taytteet,pizzaHinta,);
    uusiPizza.hinta();

    var rkokoko = document.getElementsByName("koko");
    if(uusiPizza.koko == 5) {
      rkokoko = "normaali";
    } else {
      rkokoko = "perhe";
    }

    let summa = ((uusiPizza.koko*1) + (uusiPizza.pizzaHinta*1));
    let MaaraPiz = document.getElementById("MaaraPiz").value*1;
    let wholesumma = summa*MaaraPiz;
    
    $("#responses").append("Tilaat: " + rkokoko + " " + uusiPizza.taytteet + " pizza. " + " Yhteensä: " + summa*MaaraPiz + "\n");
 
    array.push(wholesumma);

    let res = array.reduce(function(sum, elem){
        return sum + elem;
    }, 0);
    document.getElementById("yhteensa").value = res.toFixed(2) ;
      });
    });
    
