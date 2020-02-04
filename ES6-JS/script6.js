simple=function(){
    return "Hello";
}

timely=function(){
    greet="";

    hour= (new Date()).getHours();

    if(hour>=3&& hour<=11)greet="Good Morning";
    else if(hour<=15) greet="Good Afternoon";
    else if(hour<=19)greet="Good Evening";
    else greet="Good Night";

    return greet;
}

function greetUser(userName,greetProvider){
    return greetProvider()+" "+userName;
}

console.log("Yaswanth",simple());
console.log("Yaswanth",timely());
console.log(greetUser("Yaswanth",function(){return "T.K.";}));

console.log(greetUser("Yaswanth",()=>"T.K."));
(function(){
    console.log("has to execute her right away..!");    
})();