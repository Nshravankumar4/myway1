function fizzbuzz(phone_number) {
  // Calculate the sum of digits in the phone number
  
  let phone_sum = 0;
  for (let i = 0; i < phone_number.length; i++) {
    phone_sum += parseInt(phone_number[i]);
  }

  // Loop from 1 to the phone sum, inclusive
  for (let i = 1; i <= phone_sum; i++) {
  
    // Check if i is divisible by both 4 and 5
    if (i % 4 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    // Check if i is divisible by 4
    } else if (i % 4 === 0) {
      console.log("Fizz");
    // Check if i is divisible by 5
    } else if (i % 5 === 0) {
      console.log("Buzz");
    // If none of the above conditions are true, print i
    } else {
      console.log(i);
    }
  }
}

// Example usage
fizzbuzz("9000000099");
