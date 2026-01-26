/** 
function formatValue(value: string | number) {
    return value.toUpperCase();
}

formatValue("hello");
formatValue(123);

*/

function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

formatValue("hello");
formatValue(123);
