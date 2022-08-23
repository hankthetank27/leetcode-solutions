class Node {
    key: number;
    value: number;
    next: Node | null;
    prev: Node | null;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class LRUCache {
    length: number;
    capacity: number;
    map: Record<string, Node>;
    head: Node | null;
    tail: Node | null;
    constructor(capacity: number) {
        this.length = 0
        this.capacity = capacity;
        this.map = {};
        this.head = null;
        this.tail = null;
    }

    insert(node: Node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    delete(node: Node) {
        if (!node.next && !node.prev) {
            this.head = null;
            this.tail = null;
        } else if (!node.next) {

        } else if (!node.prev) {
            this.head = node.next;
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--;
    }

    get(key: number): number {
        if (!this.map[key]) return -1;
        const node = this.map[key];
        this.delete(node);
        this.insert(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.map[key]) this.delete(this.map[key]);
        this.map[key] = new Node(key, value);
        this.insert(this.map[key]);
        if (this.length > this.capacity) {
            delete this.map[this.tail.key];
            this.delete(this.tail);
        }
    }
}

export { };