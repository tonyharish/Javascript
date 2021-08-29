

 window.onload = () => {
  randomUserGenerator();
 };

function randomUserGenerator() { 

     fetch("https://randomuser.me/api").then((response)=>{
         return response.json()
     }).then((data)=>{
        console.log(data)
       showRandomUserData(data)
    })

 }

 function showRandomUserData(randomUser){

    document.getElementById('age').innerText=`${randomUser.results[0].dob.age}`
     document.getElementById('email').innerText=`${randomUser.results[0].email}`
   document.getElementById('phone').innerText=`${randomUser.results[0].phone}`
    document.getElementById('name').innerText=`${randomUser.results[0].name.title}
                                                 ${randomUser.results[0].name.first}
                                             ${randomUser.results[0].name.last}`

 }

// function Add(a, b) {
//   return a + b;
// }

// console.log(Add(12, 13));56


// let a = 20
// console.log(a)

// console.log(a)
// let a = 20
