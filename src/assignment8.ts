type status = "pending" | "approved" | "rejected";

function takeStatus(status: status) {
  if (status === "pending") {
    return console.log("Status is pending");
  } else if (status === "approved") {
    return console.log("Status is approved");
  } else if (status === "rejected") {
    return console.log("Status is rejected");
  }
}

takeStatus("approved");
takeStatus("pending");
takeStatus("rejected");
