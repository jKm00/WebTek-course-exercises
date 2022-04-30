const a = [1, 2, 2];
const b = [2];

function diff(a, b) {
  a.forEach((number) => {
    if (b.includes(number)) {
      const a_index = a.indexOf(number);
      const b_index = b.indexOf(number);
      a.splice(a_index, 1);
      b.splice(b_index, 1);
    }
  });
  return a;
}

console.log(diff(a, b));
