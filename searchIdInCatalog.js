
// функція, яка вішає подію click на всі категорії з класом category-tools-item  

const searchIdOfElements = document.querySelectorAll(".category-tools-item");

console.log(searchIdOfElements);

searchIdOfElements.forEach((element) => {
    // for (let handleClickOnElement of handleClickOnElements) {

   

    element.addEventListener("click", (event) => {
        // event.preventDefault();

        const elOnClick = event.currentTarget;
        console.log("Element was clicked", elOnClick);

          const categoryId = event.currentTarget.getAttribute('id');
        console.log("my id is:", categoryId);

    });

  
})


let a = 2;
let b = 5;

console.log("test fn:", getOne(a, 1, 4));  // second1
console.log("test fn:", getOne(a, b));  // second1



// declaration fn
function getOne (a, b){
  function second1 (){
    const result = secondFn(a, b) + b;
    return result;
  }
 
}

function secondFn (a,b) {
  return a*b;
}

// arrow fn
const arrowFn = () => 21 - 1;

console.log(arrowFn());

// async
async function exsampleAsync () {

  // delay...

  return  new Promise((resolve)=> {
    setTimeout(() => resolve("end", 1000));
  }) 
}


exsampleAsync().then(res => console.log(res));


function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();



// expresion fn
// geter & seter fn
// closest fn
// new info about fn



    



    










// searchIdOfElements.forEach((element) => { 
// // for (let handleClickOnElement of handleClickOnElements) { 

//     element.addEventListener("click", (event) => {
//         // event.preventDefault();
//         console.log("Element was clicked", event.currentTarget);


//         //  відслідковую id кожного елемента категорії
        

//     //    const categoryId = event.currentTarget.getAttribute('id');
//     //     console.log("my id is:", categoryId);
        
//     });

// })
    

 

    







    



