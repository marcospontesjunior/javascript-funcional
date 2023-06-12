// range(5) -> [1, 2, 3, 4, 5]

function range(a, b, c) {
  const nums = [];
  for (let i = 1; i <= a; i++) {
    nums.push(i);
  }
  return nums;
}

console.log(range(5));

// range(6, 11) -> [6, 7, 8, 9, 10, 11]

function range(a, b, c) {
  const n1 = b === undefined ? 1 : a;
  const n2 = b === undefined ? a : b;
  const nums = [];
  for (let i = n1; i <= n2; i++) {
    nums.push(i);
  }
  return nums;
}

console.log(range(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18]

function range(a, b, c = 1) {
  const n1 = b === undefined ? 1 : a;
  const n2 = b === undefined ? a : b;
  const nums = [];
  for (let i = n1; i <= n2; i += c) {
    nums.push(i);
  }
  return nums;
}

console.log(range(10, 19, 2));

// range(6, 2) -> [6, 5, 4, 3, 2]

function range(a, b, c = 1) {
  const n1 = b === undefined ? 1 : a;
  const n2 = b === undefined ? a : b;
  const passo = n1 <= n2 ? Math.abs(c) : -Math.abs(c);
  const nums = [];
  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += passo) {
    nums.push(i);
  }
  return nums;
}

console.log(range(6, 2));

// range(8, -3, 4) -> [8, 4, 0]

function range(a, b, c = 1) {
  const n1 = b === undefined ? 1 : a;
  const n2 = b === undefined ? a : b;
  const passo = n1 <= n2 ? Math.abs(c) : -Math.abs(c);
  const nums = [];
  for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += passo) {
    nums.push(i);
  }
  return nums;
}

console.log(range(8, -3, 4));