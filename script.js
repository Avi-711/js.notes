   
  //   Arithmetic Operators 

  // Addition  Operators 

  let line6 = 10;
  let line7 = 28;
  let line8 = 22;

  let line10 = line6 + line7 + line8 ;
  console.log(line10)  // Out Put = 60 

//  Subtraction Operators 

let line16 = 28;
let line17 = 38;
let line18 = 83;
 
let line20 = line16 - line17 - line18;
console.log(line20) // Out Put = -93

// MltipliCation 

let line26 = 27;
let line27 = 38;
let line28 = 82;

let line30 = line26 * line27 * line28;
console.log(line30) // Out Put = *84132 

// Exponentiation 

let line36 = 8;
let line37 = 2;
let line38 = 3;

let line40 = line36 ** line37 ** line38;
console.log(line40) // Out Put = **16777216

// Division 

let line42 = 38;
let line43 = 8;
let line44 = 38;

let line46 = line42 / line43 / line44;
console.log(line46) // Out Put = / 0.125 

// Modulus 

let line51 = 38;
let line52 = 82;
let line53 = 92;

let line55 = line51 % line52 % line53;
console.log(line55) // Out Put = % 38

// Increment 

let line60 = 23;

line60++;
console.log(line60) // Out Put = ++24

// Decrement 

let line67 = 28;

line67-- ;
console.log(line67) // Out Put = --27

// Pre Increment 

let line74 = 83;

console.log(++line74); // Out Put = 84
console.log(line74); // Out Put = 84

// Pre decrement 

let line81 = 29;

console.log(--line81); // Out Put = 28
console.log(line81); // Out Put = 28

// Post Decrement 

let line89 = 83;

console.log(line89--); // Out Put = 83
console.log(line89);  // Out Put = 82

// Post Increment 

let line96 = 93;

console.log(line96++); // Out Put = 93
console.log(line96); // Out Put = 94

// Assignment Opertors 

let line103 = "Hello";
console.log(line103); // Out Put Hello

let  line106 = 92;
console.log(line106); // Out Put 92

// Comparison Opertors 

console.log(7 > 2); // True

console.log(2 < 8); // True 

console.log(5 >= 5); // True 

console.log(4 <= 3); // False 

// Equality Operators

// Loose Equality 
console.log(18 == "28") // False 
console.log(10 == "10") // True

// Strict Equality 
console.log(28 === "28") // False 
console.log(28 === 28)  // True

  // And && 

  let line132 = true;
  let line133 = false;
  let line134 = true;
 
  console.log(line132 && line133) // false
  console.log(line133 && line134) // false
  console.log(line134 && line132) // True

  let line141 = 1 ;
  let line142 = 1 ;
  let line143 = 0 ;

  console.log(line141 && line142) // 1
  console.log(line142 && line143) //  0
  console.log(line143 && line141) // 0

  // Or || 

  let line150 = true;
  let line151 = false;
  let line152 = false;

  console.log(line150 || line151) // True
  console.log(line151 || line152) // False
  console.log(line152 || line150) // True

  let line159 = 0;
  let line160 = 1;
  let line161 = 0;

  console.log(line159 || line160) // 1
  console.log(line160 || line161) // 1
  console.log(line161 || line159) // 0

  // Not !

  let alert1 = false ;
  let alert2 ;
  let alert3 = NaN ;
  let mySum = 45;
  let gone = false ;
  let isFirst = true ;
 
  console.log(!alert1);
  console.log(alert2);
  console.log(alert3);
  console.log(mySum);
  console.log(gone);
  console.log(isFirst);

  // Ternary Opertors

  let line185 = 18;
  (line185 >= 18) ? console.log("Yes") : console.log("No");

  // Conditionals 
 
  // If Statement 
  let height = 5;
  if (height >= 5)
    {
      console.log("you are an adult")
    } 

    // if ... else Statement

    let age  = 16;
    if(age >= 18) 
      {
        console.log("you are an adult.")
      } 
      else {
        console.log("You are a minor")
      }

                    // Else If Statement 

      let time = 14;
      if (time < 12) 
      {
        console.log("Good morning")
      }
      else if ( time < 18)
      {
        console.log("Good Afternoon")
      }
      else {
        console.log("Good Evening")
      };

                     // switch Statement 

      let day = 3;
      switch (day) 
      {
        case 1: console.log("Monday")
        break;
        case 2: console.log("Tuesday")
        break;
        case 3: console.log("wednesday")
        break;
        default:
          console.log("Another Day")
      }

                    // For loop 

    for(let i = 1 ; i <= 5 ; i++)
    {
      console.log("hello")
    }

                     // Break 

    for( let line248 = 1 ; line248 <= 10 ; line248++ )
      if (line248 == 4 )
      {
        break;
      }
      else {
        console.log(line248)
      }
    
                  // Continue

    for ( let line259 = 1 ; line259 <= 7 ; line259++ )
      if ( line259 == 5)
      {
        continue;
      }
      else {
        console.log(line259);
      }

              //  While loop 
    
    let line270 = 1 ;
    while (line270 <= 5 )       
      { 
        if ( line270 == 3 )
    {
      line270++;
      continue;
    }
    else {
      console.log(line270);
    }
      line270++;
    } 

        // while loop break 
        
   let line286 = 1 ;
   while (line286 <= 8)
    {
      if ( line286 == 5)
      {break}
      else {
        console.log(line286);
        line286++;
      }
    }     

    //  Do while 

    let line299 = 1 ;
    do {
      console.log("hello")
      line299++;
    }while(line299 <= 6);

    //  Same as a Pre Tag backticks
    let line306 = `     Hello Avi

     I'm From
      whare `
    console.log(line306);

       // 

  let line314 = new String (`Hi Avi`);
  console.log(line314);
  
  let line317 = new Number (28583);
  console.log(line317);

       // Space Between 

       let line323 = "Hello";
       let line324 = "Avi";
       let line325 = line323 + " " + line324;

       console.log(line325);

      // Length 
      let line331 = "Hi Avi";
      console.log(line331.length);

      // UpperCase letter

      let line334 = "hello world";
      console.log(line334.toUpperCase());

      // lower case letter

      let line341 = "HELLO AVI";
      console.log(line341.toLowerCase());

    // Add comment 

    let line346 = 38;
    let line347 = 82;
    let line348 = line346 + line347 ;

    console.log(` Hello World ${line346} and ${line347} Sum ${line348}`);

    // Word cutter 

    let line354 = "Hello Baby";
    console.log(line354.substring(0,4))

    // Sentence Split 
    let line358 = "Hello world hown are avi";
    let line359 = line358.split (` `);
    console.log(line359);

    // Function Use  - Functio call 

    function line356 () {
      console.log("Hello Avi");
    }
    // functio call 
    line356();

    function line371 () {
      for (let line372 = 1; line372 <= 9 ; line372++)
        console.log(line372);
    }
    line371();

    function line377 (line378) // line378 is Parameter 
  {
    console.log("Hello" , line378);
  }
  line377(10); //  10 Arugument

  function line383  (line384 , line385)
  {
    let line386 = (line384 * line384) /2 ;
    console.log("Hi Avi", line386);
  }
  line383(2,4);

let line390 = "hello world hello world ";
let line391 = " hello avi how are you";

let line393 = ` ${line390} ${line391}`;
console.log(line393);


function line396  (line397 , line398 , line399 )
{
  let line400 = line397 + line398 + line399 ;
  return line400;
}
let line401 = line396 (1,2,3);
console.log("Printing" , line401) 

// function Declaration 

function line408 (line409) 
{
  return 'hello , ${line410}';
}
console.log(line408("hello"));

//  Arrow function 
let line415 = (line416) => {
  return `Hi Baby ${line416}`;
}
console.log( line415 ("Hello"));

//  Object 
let line423 = {
  line424: "hello avi",
  line423: 28, 
  line424: 38,
  line425: "hello world "
}
console.log(line423);

let line431 = {
  neme: "avi",
  age: 27,
  weight: 85,
  height: "5ft 6inch",
  hello: function() {
    console.log("hello world")
  }
}
  console.log(line431 );
  line431.hello();

  // cretion of Array

  let line443 = [1,2,3,4,5,6];
  console.log(line443);

  // Array constructor 

  let line450 = new Array ("love", 1 , true , 38 , 2 , "hello");
  console.log(line450 [3]);
  line450.unshift("hello world"); // Add first input 
  line450.push("hi avi")  // Add last input 
  line450.pop("hello")  // Remone last input
  line450.shift("heoo")  // Remove first input
  console.log(line450.slice(2,3))  // New line 
  line450.splice(38,53,"ho2" ,"hello" ,28, 92,)   
  console.log(line450);

 // Map 

 let line462 = [10,20,30,40,50,60,70,80,];
 let line463 = line462.map ((Number)=> {
  return Number*Number;
 })
 console.log(line463)
 
 line462.map((Number,index) => {
  console.log(Number);
  console.log(index);
 })

 // Fillter 

 let line476 =  line462.filter((Number) => {
  return Number%2 === 0;
 })
 console.log(line476);

 let line481 = ["hello" , "hoo", "bye",48,20,38,]
 let line482= line481.filter ((value) =>{ 
  if (typeof(value) === "string")
  {
    return true;
  }
  else {
    return false;
  }
 })
 console.log(line482);

 // Reduse 

 let line495 = [18,38,92,52,];
 let line496 = line495.reduce((line497,line498) =>{
  return line497+line498 ;
 } ,0)

 console.log(line495);

 // Sort 

 // Small to big Number

 let line506 = [3,5,2,6,6,3,7,];
 line506.sort();
 console.log(line506);

 // Big to small number 
 let line511 = [3,5,6,2,7,4,];
 line511.sort((line511,line512) => line512 - line511);
 console.log(line511);

 // Check Of Index which box number 
 console.log(line511.indexOf(3));

 console.log(line511.find( line512 => line512 > 5));

  // Hoisting & Declerlction 
  
  // Var line522 
  console.log(line522) // Undefined 
  var line522 = 48;
  //  console.log(line522) // 48

  line527("hello") // "hello"
  function line527 (hello)
{
  console.log("hello")
}

 // hello ("hello") // hello


 const line525 = [
    function (line526,line527) {
        return line526+line527;
    },
    function (line526,line527) {
        return line526-line527;
    },
    function (line526,line527) {
        return line526*line527;
    }
 ]
 
 let line537 = line525[1];
 let line538 = line537(3,5);
 console.log(line538);

 // Varaible scopeing

 // global scope 
//  var line544 = 2;
//  let  line544 = 2;
 const line544 = 2; 

 console.log(line544);

 {
  console.log(line544);
 }

 if(true) 
 {
  console.log(line544);
 }

 for (let line557=0; line557<5; line557++)
 {
  console.log(line544);
 }

 function line562() {
  console.log("Helo" , line544);
 }
line562(); 




