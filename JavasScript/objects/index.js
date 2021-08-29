/* 

objects reference and copying
 var hareesh={
};
var arun={
    age:24,
    village:"ksp"
};
console.log(arun);
var hareesh=arun;
console.log(hareesh);

arun.college="jntu";
console.log(hareesh);
hareesh=arun;
alert(hareesh==arun */
var america={
    house:"white",

};
var indonesia={
    color:"bright",


};

    var germany={
        college:"swinne burne",
        student:"vanish",
        university:function(){
            console.log(this.college)
        }
    };
    console.log(germany.university());

   
    var america=germany;
    console.log(america);
    
     console.log(germany);
     console.log(america);
     var america=germany;
     console.log(america);
     Object.assign(indonesia,germany,america);
     console.log(indonesia);



    


    



        
        
      
   