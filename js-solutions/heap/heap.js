class Heap {
  constructor(array = [], compare = (a, b) => a > b){
    this.compare = compare
    this.heap = this.heapify(array)
  }

  size(){
    return this.heap.length
  }

  heapify(array){
    for (let i = array.length - 1; i >= 0; i--) {
      this.siftDown(i, array, array.length);
    }
    return this.heap = array;
  }

  heapPush(el){
    this.heap.push(el)
    this.siftUp(this.size() - 1, this.heap)
  }

  heapPop(){
    if (this.size() <= 0) return null
    const maxVal = this.heap[0]
    this.swap(0, this.size() - 1, this.heap)
    this.heap.pop()
    this.siftDown(0, this.heap, this.size())
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

module.exports = Heap;