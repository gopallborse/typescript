// type unknown is used where we don't know the expected data types like after fetching from database

// type any doesn't throw any error but we are back in JS world and get runtime error
// function process(val: any) {
//     val.log();
// }

// type unknown forces us to add extra if checks
function process(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
