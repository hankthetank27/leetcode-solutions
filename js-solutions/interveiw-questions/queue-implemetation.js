class Queue {
  constructor(arr){
    this.q = {};
    this.insertIdx = 0;
    this.removalIdx = 0;

    if (arr) for (const el of arr) this.qpush(el);
  }

  qpush(el) {
    this.q[this.insertIdx] = el;
    this.insertIdx++;
  }

  qdequeue() {
    const el = this.q[this.removalIdx];
    if (el){
      delete this.q[this.removalIdx];
      this.removalIdx++;
    }
    return el;
  }

  hasEntries(){
    return Object.keys(this.q).length;
  }
}

module.exports = Queue;
