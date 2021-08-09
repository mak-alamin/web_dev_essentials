const suggetions = document.getElementById("suggetions");

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
    
                if(str_inc){
                    suggetions.innerHTML += ' <span>' + user.name + '</span>';
                }
            });   
        }
       
        xmlhttp.open("GET", "ajax.php?q=" + str);
        xmlhttp.send();
    }
}

function clearSuggestion(){
    suggetions.innerHTML = '';
}


//Post Data
var msg = document.getElementById("msg");
var save_name = document.getElementById("save");

save_name.addEventListener('click', function(e){
    e.preventDefault();
    
    var your_name = document.getElementById("your_name").value;

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "ajax.php", true);
      
    xmlhttp.onload = function(){
        if (this.readyState == 4 && this.status == 200){

            let response = this.responseText;
            
            if(response == 1){
                msg.innerHTML = 'Data Inserted Successfully!';
            } else {
                msg.innerHTML = 'Something went wrong!';
            }
        
        }
    }
    var data = {
        name: your_name,
    }
    xmlhttp.send(JSON.stringify(data));
});