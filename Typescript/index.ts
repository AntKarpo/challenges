// type annotation
let id = 23;
let checked: boolean  =true;
const ids: (string| number)[] = ["yair", 43];
function sum( a:number ,b:number):number{
    return a+b;
}

sum(5,3);

function show(id:string|number){
    return id;
}

//Objects
//interface - only for Objects


interface User {
    name: string, 
    //makes the property optional
    age?: number | string 
}

// type alias

const now = new Date();
type verified = boolean;

const user: User = {
    name: 'Rick',
    age: 60
}

interface Person {
    name:string;
}
const person:Person={name:"string"}as Person;
console.log(person);

function check(user: 'Rick' | 'Morty'){

}
check('Morty') //autocompletes
check('Rick')

//Unions can have more than two options
type states = 'resolved' | 'rejected' | 'pending'

