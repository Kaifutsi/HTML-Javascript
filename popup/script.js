let myFunction = document.querySelector('.myFunction');
    myFunction.addEventListener('click', function(event) {
        let tiedot = prompt('säde (m)');
        let res = 3.14 * tiedot * tiedot;

        if(tiedot > 0){
            alert(res);
        }else{
            document.getElementById("virhe").innerHTML = 
            'Syöte ei ole numeerisessa muodossa!';
        }
    });

