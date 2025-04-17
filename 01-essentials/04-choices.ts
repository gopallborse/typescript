enum Role {
  Admin, // 0
  Editor, // 1
  Guest, // 2
}

// let userRole: Role = Role.Editor;
// let userRole: Role = 0;

// ...

// userRole = Role.Guest;

// Choices can be achieved using literal types

let userRole: "admin" | "editor" | "guest" = "guest";

// ...

userRole = "admin";

// literal types in tuples

// let possibleResults: [1 | -1, 1 | -1];
// possibleResults = [1, 2]; // Tuple type