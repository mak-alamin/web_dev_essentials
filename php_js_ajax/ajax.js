const suggetions = document.getElementById("suggetions");
let sugg_span = '';

function showName(str){
    str = str.toLowerCase();

    if(str.length == 0) {
     
        suggetions.innerHTML = '';

    } else {

        const xmlhttp = new XMLHttpRequest();
      
        xmlhttp.onload = function(){
            var users = JSON.parse(this.responseText);
            
            let str_inc = false;

            users.forEach((user, i) => {
               str_inc = user.name.toLowerCase().includes(str);
               console.log(str_inc);
    
                if(str_inc){
                    suggetions.innerHTML += ' <span>' + user.name + '</span>';
                }
            });

            sugg_span = document.querySelector("#suggetions span");

            sugg_span.addEventListener('click', function(e){
                console.log(e.innerText);
            });
            
        }
       
        xmlhttp.open("GET", "ajax.php?q=" + str);
        xmlhttp.send();
    }
}

function clearSuggestion(){
    suggetions.innerHTML = '';
}