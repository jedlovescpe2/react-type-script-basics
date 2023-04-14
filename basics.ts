//Primitives: number, string, boolean
// More complex types: arrays, objects
//FUnction types, paramaters


//Primitives
let age: number;
age = 12.1;

let userName: string | string [];
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;


//Complex

    //Array
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};


let person: Person;

person = {
    name: 'Max', 
    age: 32,
}

// person = {
//     isEmployee: true
// }

let people: Person[]

//Type Inference
let course: string | number = 'React - The Complete Guide';
course = 12345;

//Functions and Types
function add(a: number, b: number){
    return a + b;
}

function print(value: any){
    console.log(value);
}



//Generics

function insertAtBeginning<T>(array: T[], value: T){
 const newArray = [value,...array];
 return newArray;   
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'],'d'); //['d','a','b','c']

// updatedArray[0].split(''); 
stringArray[0].split(''); 

export {};

//Generics


