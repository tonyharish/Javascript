/*
let mapping = new Map();



mapping.set("1","hi")
       .set("name","Bharath")
       .set(1,"hello")
       .set("id",20);
       
console.log(mapping); */




/*
console.log(mapping.has("23"));

console.log(mapping.get(1));
console.log(mapping);

console.log(mapping.size);
*/

                      // Object to Map Conversion
 /*                     
let obj = {
    age : 20,
    id  : 40,
    1:"name",
    "1":"hello"
};


let mapping = new Map(Object.entries(obj));

console.log(mapping.get("1"));

*/

                       // Map to Object conversion

                       let mapping = new Map([
                           ["1","hello"],
                           [1,"hi"],
                           ["age",20]
                       ]);

                       /*

                       let obj = Object.fromEntries(mapping.entries());

                       console.log(obj);*/

                       //Loops over Maps

                       for(let first of mapping.keys()){
                           console.log(first);
                       }

                       for(let second of mapping.values()){
                           console.log(second);
                       }

                       for(let third of mapping.entries()){
                           console.log(third);
                           
                       }






















