let button = document.querySelector('.button')

button.addEventListener('click', function(event) {
    var a=document.form1.tilavuus.value
    var b=document.form1.ppintaala.value
    var s=a/b;
    document.form1.lkorkeus.value=s;
});

