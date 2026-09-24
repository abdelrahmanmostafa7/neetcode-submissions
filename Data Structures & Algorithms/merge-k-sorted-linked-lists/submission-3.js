class Solution {
    mergeKLists(lists) {
        const heap = new MinHeap();

        for (const list of lists) {
            if (list !== null) {
                heap.push(list);
            }
        }

        const dummy = new ListNode(0);
        let current = dummy;

        while (!heap.isEmpty()) {
            const node = heap.pop();

            current.next = node;
            current = current.next;

            if (node.next !== null) {
                heap.push(node.next);
            }
        }

        return dummy.next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);

        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].val <= this.heap[i].val) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            if (smallest === i) {
                break;
            }

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}