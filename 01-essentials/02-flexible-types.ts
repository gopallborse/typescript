// let age: any = 25;
let age: number | string = 25;

// ...

age = "26";
age = true;
age = null;
age = undefined;
age = Symbol("age");
age = 25n; // BigInt
age = { age: 25 };
age = [25, 26, 27];
age = () => 25;
age = [25, 26, 27]; // Array
age = new Date(); // Date