type MyNumber = number;

type Role = "admin" | "editor" | "guest" | "reader";

function access(role: Role) {
  // ...
}

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};
