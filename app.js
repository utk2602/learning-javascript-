/*var life = 100; //this is how you comment 
var name ="Utkarsh";
var checkout =false;
var box;//console's output will show undefined 



const life=100;
life=life-60//wont change the output since lfe, we cannot re
console.log(life);*/

/*const { Languages } = require("lucide-react");

const name = "Utkarsh";

/*function logger(){
    console.log('Party time');
    console.log('Party time');
    console.log('Party time');
    console.log('Party time');
    console.log('Party time');
}*/

/*logger()*/;//for running the function 

// all the standard function properties work over here too 


/*function adder(num1,num2){
    console.log(num1+num2);
}

adder(5,10);

// .toUpperCase converts the whole string to upper case


const toUpper = () =>{
    asaadddwa;
}*/



//String concaetation 


console.log("hello my name is "+"utk");


console.log(`hello my name is ${name}`);


//if we concatenate a string and a number it will take both the values as string only


//can be verified using 
console.log(typeof xyz);





//if statements 
  

/*comparison can be done by using //=== 3 equal to signs 
>=,<= both of these will have the same meaning as in other Languages
||| for or statement*/

Arrays 

const schedule =["wake up","eat","film a video","sleep"];

console.log(schedule);

//indexing is same as normal array

schedule.push("new entry");//value is added at the last index

console.log(schedule);

schedule.pop();//value is removed from the last


schedule.shift();
//removes the first one 

schedule.unshift();
//remove the last one 


schedule.indexOf();
//gives the index 


const user1 ={
    name:'utkarsh',
    age: 20,
    married: false,
    purchases:["phone","laptop"]
};



console.log(user.purchases);



console.log(this);


// outputs all the objects present within the language 



/*const user={
    name:"Utkarsh",
    age:33,
    married:false,
    purchases:['phone','laptop','house'],


    sayName: function(){
        console.log(this.name);
    }
};

user.sayName();



function saymyAge(){
    console.log(`My age is ${this}`);
}


saymyAge();

const names=["sachin","kohli","dhoni"];


for( name of names){
    console.log(name);
    if(name === "maria"){
        console.log("she is not good at all");
        break;
    }
}
*/



const text = document.querySelector(".title");
const changecolor = document.querySelector(".changecolor");

text.style.backgroundColor="red";


changecolor.addEventListener('click',function(){
    text.classList.toggle("change");
})

const userList= document.querySelectorAll(`.name-list li`)

console.log(userList);

