function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  // return type void means we are not returning anything from the function
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  // never type means the function will never finish executing e.g. in case an error is thrown
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logged = logAndThrow("some error");

// logged. // we cannot use anything after the dot due to the never type

// function performJob(cb: Function) {
function performJob(cb: (msg: string) => void) {
  // ...
  cb("Job done!");
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Gopall",
  age: 33,
  greet() {
    console.log("Hello!");
    return this.name;
  },
};

user.greet();
