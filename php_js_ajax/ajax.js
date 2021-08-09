const suggetions = document.getElementById("suggetions");
// var sugg_arr = [];
var sugg_str = '';

function showName(str){
    str = str.toLowerCase();

    if(str.length == 0) {
        // sugg_arr = [];
        sugg_str = '';
    } else {
       
        const xmlhttp = new XMLHttpRequest();
      
        xmlhttp.onload = function(){
            var users = JSON.parse(this.responseText);
            
            let str_inc = false;

            users.forEach((user, i) => {
               str_inc = user.name.toLowerCase().includes(str);
    
                if(str_inc){
                    sugg_str += '<span>' + user.name + '</span>';
                } else {
                    sugg_str = '';
                }

            });
        }
       
        xmlhttp.open("GET", "ajax.php?q=" + str);
        xmlhttp.send();
    }

    
    // sugg_str = sugg_arr.toString();
    console.log(sugg_str);

    suggetions.innerHTML = sugg_str;
}