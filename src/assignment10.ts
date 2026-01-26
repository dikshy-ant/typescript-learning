// Define the user type
interface User {
  profile?: { name?: string }; // profile and name are optional
}

// Function to get username safely
function getUsername(user: User): string {
  return user.profile?.name ?? "Unknown"; // ?? This operator checks if the value on the left-hand side is null or undefined. If it is, it returns the value on the right-hand side, which is "Unknown" in this case.
}

const codyRhodes: User = { profile: { name: "Cody Rhodes" } };
const romanReigns: User = { profile: { name: "Roman Reigns" } };
const unknownWrestler: User = {};

console.log(getUsername(codyRhodes));
console.log(getUsername(romanReigns));
console.log(getUsername(unknownWrestler));
