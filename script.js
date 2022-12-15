var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.online=function(){
    var data=request.response
    var result=JSON.Parse(data)
for(var i=0; i<result.length; i++){
    console.log(result[i].area);
    console.log(result[i].name.common);
    console.log(result[i].area,result[i].name.common);}}






























