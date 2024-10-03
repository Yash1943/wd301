interface User {
  name: string;
  id: number;
  isAdmin: boolean;
}

let newUser: User = {
  name: "Jane",
  id: 1,
  isAdmin: false,
};

let mynumber: number;

mynumber = 12; // Error: Type 'string' is not assignable to type 'number'.
console.log(mynumber); // Error: Variable 'mynumber' is used before being assigned.
