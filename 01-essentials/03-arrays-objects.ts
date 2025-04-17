let hobbies = ["Sports", "Cooking"];

// hobbies.push(25);

// let users: (string | number)[];
let users: Array<string | number>;

users = ["Gopall", 21];
users = ["Gopall", "Max"];
users = [21, 22, 23];

let possibleResults: [number, number];
possibleResults = [1, 2]; // Tuple type
// possibleResults = [1, 2, 3]; // Error: Type '3' is not assignable to type 'number'.

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Gopall",
  age: 33,
  hobbies: ["Sports", "Cooking"],
  role: { description: "Admin", id: 1 },
};

let val: {} = {}; // Type {} is for non-null or non-undefined
// possible values val = 1, "Gopall", true, [someArray], {someObject} but not undefined and not null

let data: Record<string, number | string>; // used to define the structure of an object whose keys are not known in advance. The above type {} doesn't help

data = {
  entry1: 2,
  entry2: "some string",
};
