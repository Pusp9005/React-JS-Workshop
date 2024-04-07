import React from 'react';

let name = 'Mohan';
let num = 3;

function CheckEvenOrOdd(num) {
  if (num % 2 === 0) {
    return <div>Even Number</div>;
  } else {
    return <div>Odd Number</div>;
  }
}

let num1 = 4;

const users = [
  { name: 'Mohan', age: 20 },
  { name: 'Aman', age: 24 },
  { name: 'Ram', age: 18 },
];

function checkAlphabet(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return <div>{char} is vowel</div>;
    default:
      return <div>{char} is consonant</div>;
  }
}

function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        <h3>If-else Statement</h3>
        {CheckEvenOrOdd(num)}
        {num1 % 2 === 0 ? <div>Even</div> : <div>Odd Number</div>}
        <h3>If Statement</h3>
        {num1 % 2 === 0 && <div>Even num</div>}
        {num1 % 2 > 0 && <div>Odd num</div>}
      </div>
      <h3>Loop</h3>
      {users.map((item, index) => {
        return (
          <div key={index}>
            {item.name} - {item.age}
          </div>
        );
      })}
      <h3>Alphabets Check</h3>
      {checkAlphabet('a')}
      {checkAlphabet('b')}
    </div>
  );
}

export default Jsx;
