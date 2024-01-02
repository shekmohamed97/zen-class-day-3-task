 //q1;ans:how to compare two JSON have the same properties without order?:

let obj1={name:"person 1",age:5};
let obj2= {age:5,name:"person 1"};
let json1=JSON.stringify(obj1);
let json2=JSON.stringify(obj2);
if(json1===json2){
    console.log("this is equal");
}
else{
    console.log("this is not equal");
}

//q2:ans:print the west contries flags:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    for (var i=0; i < result.lenght; i++){
         console.log(result[i].flags.png);
    }
}

//qu3:ans:print the west contries name,region and subregion:

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all","true");
request2.send();
request2.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    for(var i=0;i<result.lenght;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion);
    }
}
