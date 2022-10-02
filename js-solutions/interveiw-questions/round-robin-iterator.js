const Queue = require('./queue-implemetation');

class RoundRobin {
  constructor(lists) {
    this.q = new Queue(lists);
  }

  next() {
    if (!this.q.hasEntries()) return undefined;

    const current = this.q.qdequeue();
    const value = current.shift();
    if (current.length) this.q.qpush(current);

    return value;
  }
}


const rr = new RoundRobin([[1,2,3], [5], [7,8,9,10,11,12,13]])

console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())
console.log(rr.next())