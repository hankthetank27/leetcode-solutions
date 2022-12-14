class Heap {
  constructor(array = [], compare = (a, b) => a > b){
    this.compare = compare
    this.size = array.length
    this.heap = this.heapify(array)
  }

  heapify(array){
    for (let i = array.length - 1; i >= 0; i--) {
      this.siftDown(i, array, array.length);
    }
    return this.heap = array;
  }

  heapPush(el){
    this.heap.push(el)
    this.size++
    this.siftUp(this.size - 1, this.heap)
  }

  heapPop(){
    if (this.size <= 0) return null
    const maxVal = this.heap[0]
    this.swap(0, this.size - 1, this.heap)
    this.heap.pop()
    this.size--
    this.siftDown(0, this.heap, this.size)
    return maxVal
  }

  siftDown (i, heap, size) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let maxIdx = i;
    if (l < size && this.compare(heap[l], heap[maxIdx])) {
      maxIdx = l
    }
    if (r < size && this.compare(heap[r], heap[maxIdx])) {
      maxIdx = r
    }
    if (maxIdx !== i) {
      this.swap(maxIdx, i, heap);
      this.siftDown(maxIdx, heap, size);
    }
  }

  siftUp(i, heap){
    const parent = Math.floor((i - 1) / 2)
    if (this.compare(heap[i], heap[parent])){
      this.swap(i, parent, heap)
      this.siftUp(parent, heap)
    }
  }

  swap (i, j, arr){
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const heap = new Heap([2, 5, 3, 8, 10, 6, 4, 7, 9, 1], (a, b) => a < b)
console.log(heap)
heap.heapPush(89)
heap.heapPush(8)
console.log(heap.heapPop())
console.log(heap.heap)
heap.heapPush(1)
console.log(heap.heapPop())
console.log(heap.heap)
console.log(heap.heapify([10, 20, 89, 1, 4, 100, 55]))