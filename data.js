/**
 * Created by Ulhas on 11/15/2016.
 */
var  xmlHttp=CreateNewObject();

function CreateNewObject() {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject();
    }
}
function  process() {
        if (xmlHttp){
            try {
                     xmlHttp.open("GET","DEMO.xml",true);
                     xmlHttp.onreadystatechange=handle;
                     xmlHttp.send(null);
            }catch (e){
                alert(e.toString());
            }
        }
}

function handle() {
    var data=xmlHttp.response;
}