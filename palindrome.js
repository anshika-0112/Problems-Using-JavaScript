let Palindrome = (s) => {
  let reverseString = s.split("").reverse().join("");
  return reverseString === s;
};

const s = "hello";
if(Palindrome(s))
console.log(`${s} is Palindrome`);
else
console.log(`${s} is Not Palindrome`);
