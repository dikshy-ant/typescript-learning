// The function currently assumes that the input value is of "any" type

// Update the function so that the input value is of "unknown" type

// Use type checking to safely call toUpperCase method

function parse(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("Value is not a string");
  }
}

parse("hello");
parse(123);
