const prompt = require('prompt-sync')({sigint: true});



// fish array

// let fishArray = ['Slimy Scaly Bass', 'Deepsea Finned Salmon','Purple Bigmouthed Herring', 'Grey Bottom-dwelling Angler',]

// let randomFish =fishArray[Math.floor(Math.random() * fishArray.length)];

// let randomPrice = Math.floor(Math.random() * 100)
// let randomPrice2 = Math.floor(Math.random()* 99)
// //


// console.log(randomFish);
// console.log(`${randomPrice}.${randomPrice2}`);



//function to generate fish

console.log(`You've gone fishing! Try to maximize the value of your caught fish. You can fish
for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);
console.log(``);

//Global Variables
let counter = 0;
let timer = 6;
let fishCounter =0;
let finalPrice = 0;
let actualWeight = 0;
let fishArray2 = [];


function randomlyGeneratedFish(){

//local variables
let fishArray = ['Slimy Scaly Bass', 'Deepsea Finned Salmon','Purple Bigmouthed Herring', 'Grey Bottom-dwelling Angler',]
let randomFish =fishArray[Math.floor(Math.random() * fishArray.length)];
let randomPrice = Math.floor(Math.random() * 100);
let randomWeight = Math.floor(Math.random() * 10);


// Telling the time Message
if (timer < 11) 
{
console.log(`the time is ${timer}:00am so far you have caught ${fishCounter} fish,`)
//random fish message
console.log(`You caught a ${randomFish} weighing ${randomWeight} lbs and valued at ${randomPrice}`);

//prompt to catch or release
let catchOrRelease = prompt(`Your action: [c]atch or [r]elease?`);
catchOrRelease = catchOrRelease.toLocaleLowerCase();
    
       if (catchOrRelease === "c")
       {
        console.log ("You choose to catch the fish!")
        counter +=1;
        timer +=1;
        fishCounter +=1;
        actualWeight = randomWeight + actualWeight;
        finalPrice = finalPrice + randomPrice;
        fishArray2 = fishArray2.concat(randomFish);
        console.log(`you have ${fishArray2} in your pack`);

        //if statement for the weight tracking
        if(actualWeight >= 10){

            console.log(`Your Pack is full and you cannot store anymore fish. You have ${fishCounter} fish`)
           
            for (let i = 0; i > fishArray.length; i++){
             fishArray2[i];
            }

            console.log(fishArray2);

            } else 
            {

           randomlyGeneratedFish()
           
            }

       } else {
        //release fish messages
        console.log ("You released the fish")
        
        
        if (fishArray2.length >= 1)
         {
        console.log(`you have ${fishArray2} in your pack`);
        randomlyGeneratedFish();

         } else {
            console.log("you have no fish");
            randomlyGeneratedFish();
         }
       }
} else if (timer === 12 )

{
    console.log(`the time is ${timer}:00pm so far you have caught ${fishCounter} fish, weighed at ${randomWeight}lbs`);
    
}

      
       
}


randomlyGeneratedFish();