let request = createAjaxObject();
function createAjaxObject() {
    let req = null;
    try
    {
        req =  new XMLHttpRequest();//для современных
    }
    catch(e){
        try{
            req = new ActiveXObject("Msxm12.XMLHTTP")
        }
        catch(e) {
            //старые браузеры Microsoft
            try
            {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e) {
                alert("Ajax is not supported by you your browser!")
            }
        }
    }
    return req;
}
function Process() {
    if(request.readyState == 4 || request.readyState == 0){
        let country = document.getElementById("countryText").value;
        if(!(country.trim()=='')){
            request.open("POST","getCountries.php",true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.onreadystatechange = getData;
            request.send("country="+country);
        }
    }
}
function getData() {
    if(request.readyState == 4 && request.status == 200){
        let response = JSON.parse(request.responseText);

        if(document.getElementById('countrySelect')){
            document.getElementById('countrySelect').parentNode.removeChild(document.getElementById('countrySelect'));
        }

        if(response.length > 0){
            let selectList = document.createElement("select");
            selectList.id = "countrySelect";
            selectList.className = "form-control";
            document.getElementById("result").appendChild(selectList);

            console.log(response);

            for (let i = 0; i < response.length; i++) {
                let option = document.createElement("option");
                option.value = response[i];
                option.text = response[i];
                selectList.appendChild(option);
            }
        }
    }
}
