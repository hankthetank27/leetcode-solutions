function Node (val) {
  this.val = val
  this.next = null
}

class Queue {
  constructor(arr){
    this.q = null
    this.tail = this.q
    if (arr) arr.forEach(el => this.qPush(el))
  }

  qPeak(){
    return this.q.val
  }

  qPop(){
    if (!this.q) return
    const res = this.qPeak()
    this.q = this.q.next
    return res
  }

  qPush(val){
    if (!this.q){
      this.q = new Node(val)
      this.tail = this.q
    } else {
      this.tail.next = new Node(val)
      this.tail = this.tail.next
    }
  }
}

