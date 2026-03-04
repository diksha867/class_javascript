// let grade = "b"
// switch (grade) {
//     case "a":
//         console.log("excellent")
//         break;
//     case "b":
//         console.log("good")
//         break;
//     case "c":
//         console.log("average")
//         break;
//     case "d":
//         console.log("poor")
//         break;
//     default:
//         console.log("fail")
// }
// for (i = 1; i <= 10; i = i + 1) {
//     git
//     console.log(2 * i)

// }
// console.log(i)
// while (i <= 10) {
//     console.log(2 * i)
//     i = i + 1
// }

// while (i <= 10) {
//     if (i === 5) break;
//     console.log(2 * i)
//     i = i + 1
// }
// let str = "hello welcome to javascript classes"
//     let i = 0
//     while (str[i]) {
//         if (str[i] === "v") break;
//         console.log(str[i])
//         i = i + 1
//     }
//     constant
//     const print = () => console.log("sample")
//     print()
//     print()

//     const para = document.getElementById("para")
//     para.textcontent = "this is updated para"
//     para.style.color = "blue"
//     para.backgroundcolor = "yellow"
//     console.log(para)

//     const para = document.querySelectorAll(".para")
//     para[0].textContent = "this is updated one"
//     para[1].style.color = "green"
//     console.log(para)

//     const container = document.querySelector(".container")
//     container.innerHTML = "<h1>this is a paragraph </h1>"
//     console.log(container)
//     const interval = setInterval

//     //callback
//     console.log("Starting homework.....");

//     setTimeout(() => {
//         console.log("Homework done!")
//         console.log("Starting Dinner.....");
//         setTimeout(() => {
//             console.log("Dinner Done!");
//             console.log("Getting ready to go out....");
//             setTimeout(() => {
//                 console.log("Going to the Playground!");
//             }, 1000);
//         }, 1500);
//     }, 2000);
//     function finishHomework(callback) {
//         console.log("Starting Homework....");
//         setTimeout(() => {
//             console.log("Homework Done!");
//             callback();
//         }, 2000);
//     }
//     function EatDinner(callback) {
//         console.log("Starting Dinner....");
//         setTimeout(() => {
//             console.log("Dinner Done!");
//             callback();
//         }, 1500);
//     }
//     function goToPlayground() {
//         console.log("Going to Playground....");
//     }
//     finishHomework(() => {
//         EatDinner(() => {
//             goToPlayground();
//         });
//     });
//     const p = new Promise((res, rej) => {
//         console.log("Going to do the homwwork!!")
//         setTimeout(() => {
//             const done = true;
//             if (done) {
//                 res("Success")
//             } else {
//                 rej("Failed to fetch Data from the server")
//             }
//         }, 3000)
//     })

//     p.then((a) => {
//         console.log(a)
//     })

// //callback hell
//     function finishHomework(callback) {
//         console.log("starting homework");
//         setTimeout(() => {
//             console.log("Homework completed");
//             callback();
//         }, 2000);

//     }
//     function eatDinner(callback) {
//         console.log("starting Dinner");
//         setTimeout(() => {
//             console.log("Dinner completed");
//             callback();
//         }, 1500);
//     }
//     function goToPlayground() {
//         console.log("Going to the Playground");
//     }
//     finishHomework(() => {
//         eatDinner(() => {
//             goToPlayground();
//         });
//     });
//     function doHomework() {
//         const p = new Promise((res, rej) => {
//             setTimeout(() => {
//                 let done = true;
//                 if (done) {
//                     console.log("Homework is done");
//                     res("Homework done");
//                 } else {
//                     rej("Homework not done");
//                 }
//             }, 2000);
//         });
//         return p;
//     }
//     function eatDinner() {
//         const p = new Promise((res, rej) => {
//             setTimeout(() => {
//                 let done = true;
//                 if (done) {
//                     console.log("Dinner is ready");
//                     res("Dinner ready");
//                 } else {
//                     rej("Dinner not ready");
//                 }
//             }, 2000);
//         });
//         return p;
//     }
//     function goOut() {
//         const p = new Promise((res, rej) => {
//             setTimeout(() => {
//                 let done = true;
//                 if (done) {
//                     console.log("Going out");
//                     res("Going out");
//                 } else {
//                     rej("Not going out");
//                 }
//             }, 2000);
//         });
//         return p;
//     }

//     doHomework().then((data) => {
//         console.log(data);
//         return eatDinner();
//     }).then((data) => {
//         console.log(data);
//         return goOut();
//     }).then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     }).finally(() => {
//         console.log("go to sleep");
//     });
//     console.log("First line")
//     setTimeout(() => {

//     }
//     )
// function orderfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food ordered")
//             res()
//         },2000)
//     })
// }


// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Prepared")
//             res()
//             //rej ("Order cancelled")
//         },2000)
//     })
// }


// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Delivered")
//             res()
//         },2000)
//     })
// }

// async function FoodOrder(){
//     await orderfood()
//     await prepareFood()
//     await deliverFood()
//     console.log("Enjoy your Food")
// }
// FoodOrder()
// console.log("it's the First Line")
// try{
//     let age=19;
//     if(age<18){
//         throw new Error("You are not eligible")  
//     }
//     let sample;
//     for(let i=0;i<10,i++;){
//         sample=i
//     }
// }catch(error) {
//    console.log(error)
//     throw new Error("Something went wrong")
// }finally{
//     console.log("Finally block")
// }
// console.log("Second line")
// async function getData(){
//     try{
//     const response=await fetch("https://dummyjson.com/products")
//     const data=await  response.json()
//     console.log(response.ok)
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     data.products.forEach((products)=>{
//         console.log("product.title")
//     })
//     }
//     catch(e){
//     console.log(e)
//     }
// }
// getData()
//try catch topic ends......


