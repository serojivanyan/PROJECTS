const xmlhttp = new XMLHttpRequest();

function postHttpReq(obj, path, callback) {
    console.log("hospitalPostHttpReq ", obj);
    let url = "http://localhost:3000/"+path;

    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            callback(null, xmlhttp.responseText); // Another callback here
        }
    }; 

    xmlhttp.send(createPayload());


    function createPayload() {
      let result = '';
      for(let key in obj) {
        let item = key + '=' + obj[key];
        result = result == '' ? item : result +'&'+ item;
      }
      console.log(result);
      return result;
    }
};
