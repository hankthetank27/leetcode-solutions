class MaxHeap {
  constructor(array = []){
    this.size = array.length
    this.heap = this.heapify([...array])
  }

  heapify(array){
    for (let i = array.length - 1; i >= 0; i--) {
      this.siftDown(i, array, array.length);
    }
    return array;
  }

  insert(el){
    this.heap.push(el)
    this.size++
    this.siftUp(this.size - 1, this.heap)
    return this.heap
  }

  extractMax(){
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
    if (l < size && heap[l] > heap[i]) {
      if (r > size || heap[l] > heap[r]) {
        this.swap(l, i, heap);
        return this.siftDown(l, heap, size);
      }
    }
    if (r < size && heap[r] > heap[i]) {
      if (l > size || heap[r] > heap[l]) {
        this.swap(r, i, heap);
        return this.siftDown(r, heap, size);
      }
    }
  }

  siftUp(i, heap){
    const parent = Math.floor((i - 1) / 2)
    if (heap[i] > heap[parent]){
      this.swap(i, parent, heap)
      this.siftUp(parent, heap)
    }
  }

  swap (i, j, arr){
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const heap = new MaxHeap([2, 5, 3, 8, 10, 6, 4, 7, 9, 1])
console.log(heap)
console.log(heap.insert(89))
console.log(heap.insert(8))
console.log(heap.extractMax())
console.log(heap.heap)