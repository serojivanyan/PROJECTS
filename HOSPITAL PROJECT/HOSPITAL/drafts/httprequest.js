var obj = {
  name:null,
  lastname:null,
  username:null,
  pass:null
}

function myFunc(){
  
  obj.name = document.getElementById("name").value;
  obj.lastname = document.getElementById("lastname").value;
  obj.username = document.getElementById("username").value;
  obj.pass= document.getElementById("pass1");

  


var http = new XMLHttpRequest();
http.open("POST", "https://jsonplaceholder.typicode.com/posts");

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/json");
http.send(JSON.stringify(obj));
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    };
};
}






btn.addEventListener("click",myFunc);





// get request
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
         
           myArr = JSON.parse(this.responseText);
          console.log(myArr)
        } 
    }
};
request.open("GET","https://jsonplaceholder.typicode.com/posts");
request.send(null);
