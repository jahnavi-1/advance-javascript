/*console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promisewifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');                                              

    },3000)
});

promisewifeBringingTicks.then((t)=>{
    console.log(`personn3:shows${t}`);
})
console.log('person4:shows ticket');
console.log('person5:shows ticket');*/
 //output person1:shows ticket
/*one.js:2 person2:shows ticket
one.js:13 person4:shows ticket
one.js:14 person5:shows ticket
one.js:11 personn3:showsticket*/

/*console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promisewifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');                                              

    },3000)
});

const getPopcorn=promisewifeBringingTicks.then((t)=>{
    console.log('wife : i have the ticket');
    console.log('husband:we should go in ');
    console.log('wife:no i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`${t} popcord`);
        
    })
});
const getButter=getPopcorn.then((t)=>{
    console.log('husabad: i have the popcorn');
    console.log('husband:we should go in ');
    console.log('wife:no I nedd butter');
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
        
    })
});
getButter.then((t)=>console.log(t));
console.log('person4:shows ticket');
console.log('person5:shows ticket');

*/
/*console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie =async()=>{

const promisewifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');                                              

    },3000)
});
const getPopcorn =new Promise((resolve,reject)=> resolve('popcorn'));
const addbutter =new Promise((resolve,reject)=> resolve('butter'));
const getColdDrinks =new Promise((resolve,reject)=> resolve('ColdDrinks'));

let ticket=await promisewifeBringingTicks;
console.log(`wife : i have the ${ticket}`);
console.log('husband:we should go in ');
console.log('wife:no i am hungry');

let popcorn=await getPopcorn;
console.log(`husabad: i have the ${popcorn}`);
console.log('husband:we should go in ');
console.log('wife:no I nedd butter');

let butter =await addbutter;
console.log(`husband:i got some ${butter} on popcorn`);
console.log(`husband :anything ele darling`);
console.log(`wige:ets got we are getung late`);
console.log(`husband:thank for thr reminder *grins*`);

let Drinks=await getColdDrinks;
console.log('husband :  i got cooldrinks ');


return ticket;
};





preMovie().then((m)=>console.log(`perosne3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');
*/
/*console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie =async()=>{

const promisewifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('ticket');                                              

    },3000)
});
const getPopcorn =new Promise((resolve,reject)=> resolve('popcorn'));
const addbutter =new Promise((resolve,reject)=> resolve('butter'));
// const getColdDrinks =new Promise((resolve,reject)=> resolve('ColdDrinks'));
const getCandy =new Promise((resolve,reject)=>resolve(`candy`));
const getCoke =new Promise((resolve,reject)=>resolve(`coke`));
let ticket
try{
    ticket=await promisewifeBringingTicks;

    
}catch(e){
     ticket ='sad face';
}

let [popcorn,candy,coke] =await Promise.all([getPopcorn,getCandy,getCoke]);
console.log(`${popcorn},${candy},${coke}`);
return ticket;
};





preMovie().then((m)=>console.log(`perosne3:shows ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');*/

/*const testUserForm= async()=>{
    const loadUserForm =new Promise((resolve,reject)=>{
        setTimeout(()=>reject('ticket'),3000);
    });
}*/