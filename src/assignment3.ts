/**unction sendEmail(to: string, subject: string, cc: string) {
    console.log(to, subject, cc.toLowerCase());
}

sendEmail("test@mail.com", "Hello");

**/

// in the above function the sendEmail function is expecting three parameters, to, subject, and cc
//  When we call the function, we only provide two arguments: "

// we can fix this by assigning a default value to the cc parameter. Default parameters allows us to specify a default value for a parameter in case no argument is provided during the function call.

function sendEmail(to: string, subject: string, cc: string = "Wassup") {
  console.log(to, subject, cc.toLowerCase());
}

sendEmail("test@mail.com", "Hello");
