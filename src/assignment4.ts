type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {
  console.log(`first name: ${user.firstName},
     last name: ${user.lastName},
     age: ${user.age},
     email: ${user.email},
     is active: ${user.isActive}.`);
}

createUser({
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "wassup@gmail",
  isActive: true,
});
