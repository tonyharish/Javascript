window.onload = () => {
  harish();
};



 function harish() {

     fetch("https://reqres.in/api/users?page=2").then((properties)=>{
         return properties.json()
     }).then((data)=>{
         console.log(data)
        sourcedata(data)
     })
 
 }
     
 function sourcedata(ironman){
  
    document.getElementById('id').innerText=`${ironman.data[0].email}`}