// const inputElement = document.getElementById("user-name");

// type narrowing narrows type from HTMLElement | null to HTMLElement only
// if (!inputElement) {
//   throw new Error("Element not found!");
// }

// another way to narrow type ie.e adding !
// const inputElement = document.getElementById("user-name")!;
// const inputElement = document.getElementById("user-name");

// console.log(inputElement.value);

// ! can be also added where the value is being used
// console.log(inputElement!.value);

// ? optional chaining operator can also be added but there is no fallback code to execute like the if (!inputElement) {} check above
// console.log(inputElement?.value);

// ------------------------------

// type casting
const inputElement = document.getElementById("user-name") as HTMLInputElement;
console.log(inputElement?.value);
