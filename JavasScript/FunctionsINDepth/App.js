     // Objects Example
/*
 let user = {
     id  : 12,
     class : "5th",
     school : function(a,b){
         alert(a+b);
     }
 };

 user.school(4,4);

 console.log(user.id); */

function pow(x,n){
    if(n==1){
        return x;
    }else{
        return x*pow(x,n-1);
    }
}

console.log(pow(3,4));
















 