// ? after parameter name makes the parameter optional

function generateError(error?: string) {
  throw new Error(error);
}

generateError("Some error occured!"); // works
generateError(5 || true); // gives error
generateError();

// ----------------------

type User = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

// ---------------------

// ?? nullish coalescing operator - check for null or undefined

let input = '';
const didProvideInput1 = input || false; // gives false
const didProvideInput2 = input ?? false; // gives ""
