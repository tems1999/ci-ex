// index.js
const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  //const result = a+b;
  //return result;
  //CodeQL
  return eval(`${a} + ${b}`); //ช่องโหว่คือ Code Injection / Remote Code Execution (RCE) เพราะ eval เปิดโอกาสให้ attacker ใส่โค้ดอันตรายเข้ามารันได้
};
export default add;