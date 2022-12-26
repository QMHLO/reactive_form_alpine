const inc = (num, base) => Math.floor(num / base) + 1;
const dec = (num, base) => Math.ceil(num / base) - 1;
const double = (num, base) => Math.ceil(num / base) * 2;

const normalize = (operation) => (base) => (num) => operation(num, base) * base;

const inc_100 = normalize(inc)(100);
const dec_100 = normalize(dec)(100);

console.log(normalize(inc)(100)(106));
console.log(inc_100(304));
