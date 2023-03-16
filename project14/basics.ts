// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives 숫자, 문자열, 논리형

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// 타입 별칭
type Person = {
	name: string;
	age: number;
};

let person: Person;


person = {
	name: 'Max',
	age: 32
};

// person = {
// 	isEmployee: true
// };

let people: Person[];

// 타입 추론

let course : string | number = 'React - The Complete Guide';

course = 12341;

// 함수 타입

function add(a: number, b: number) {
	return a + b;
}

function print(value: any) {
	console.log(value);
}