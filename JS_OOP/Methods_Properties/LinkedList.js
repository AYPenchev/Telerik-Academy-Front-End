    'use strict';

    class LinkedListNode {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    const head = Symbol("head");

    class LinkedList {
        constructor() {
            this[head] = null;
        }

        add(data) {
            const newNode = new LinkedListNode(data);
            if (this[head] === null) {
                this[head] = newNode;
            } else {
                let current = this[head];
                while (current.next !== null) {
                    current = current.next;
                }

                current.next = newNode;
            }
        }

        append() {
            for (const item of arguments) {
                this.add(item);
            }
            return this;
        }

        prepend() {
            for (let i = arguments.length - 1; i >= 0; i--) {
                this.insertBefore(arguments[i], 0);
            }
            return this;
        }

        insertBefore(data, index) {
            const newNode = new LinkedListNode(data);
            if (this[head] === null) {
                throw new RangeError(`Index ${index} does not exist in the list.`);
            }

            if (index === 0) {
                newNode.next = this[head];
                this[head] = newNode;
            } else {
                let current = this[head];
                let previous = null;
                let i = 0;
                while ((current.next !== null) && (i < index)) {
                    previous = current;
                    current = current.next;
                    i++;
                }

                if (i < index) {
                    throw new RangeError(`Index ${index} does not exist in the list.`);
                }

                previous.next = newNode;
                newNode.next = current;
            }
        }

        insert() {
            let indexToInsertAt = arguments[0];
            for (let i = 1; i < arguments.length; i++) {
                this.insertBefore(arguments[i], indexToInsertAt);
            }
        }

        get(index) {
            if (index > -1) {
                let current = this[head];
                let i = 0;
                while ((current !== null) && (i < index)) {
                    current = current.next;
                    i++;
                }
                return current !== null ? current.data : undefined;
            } else {
                return undefined;
            }
        }

        at() {
            if (arguments.length > 1) {
                this.insertBefore(arguments[1], arguments[0]);
                this.remove(arguments[0] + 1);
            } else {
                return this.get(arguments[0]);
            }
        }

        remove(index) {
            if ((this[head] === null) || (index < 0)) {
                throw new RangeError(`Index ${index} does not exist in the list.`);
            }

            if (index === 0) {
                const data = this[head].data;
                this[head] = this[head].next;
                return data;
            }

            let current = this[head];
            let previous = null;
            let i = 0;
            while ((current !== null) && (i < index)) {
                previous = current;
                current = current.next;
                i++;
            }

            if (current !== null) {
                previous.next = current.next;
                return current.data;
            }

            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        *
        values() {
            let current = this[head];
            while (current !== null) {
                yield current.data;
                current = current.next;
            }
        }

        [Symbol.iterator]() {
            return this.values();
        }

        get length() {
            if (this[head] === null) {
                return 0;
            }

            let current = this[head];
            let count = 0;
            while (current !== null) {
                count++;
                current = current.next;
            }
            return count;
        }

        toArray() {
            return [...this];
        }

        toString() {
            let list = this.toArray();
            list = list.join('->');
            return list;
        }

        get tail() {
            let current = this[head];
            while (current.next !== null) {
                current = current.next;
            }
            return current.data;
        }

    }

    function main() {
        const list = new LinkedList();
        list.append(1, 2, 3).append(4);
        // list should contain 1, 2, 3 and 4

        const list1 = new LinkedList();
        list1.append(4, 5, 6).prepend(1, 2, 3);
        // should contain 1, 2, 3, 4, 5, 6 in that order

        const list2 = new LinkedList();
        list2.append(1, 4, 5).insert(1, 2, 3);
        // list should contain 1, 2, 3, 4, 5

        const list3 = new LinkedList();
        list3.append(1, 2, 3, 4, 5, 6);
        console.log(list3.at(2));
        // 3
        list3.at(2, 'gosho');
        console.log(list3.at(2));
        // gosho

        const list4 = new LinkedList();
        const removed = list4.append(1, 2, 3, 4, 5).remove(1);
        // removed should be 2
        // the list should contain 1, 3, 4, 5

        const list5 = new LinkedList();
        list5.append(1, 2, 3, 4, 5, 6);

        const arr = list5.toArray();
        console.log(arr); // [1, 2, 3, 4, 5, 6]
        console.log(arr instanceof Array); // true

        const list6 = new LinkedList();
        list6.append(1, 2, 3, 4, 5, 8);

        console.log(list6.toString()); // 1 -> 2 -> 3 -> 4 -> 5 -> 6

        console.log(list6.length);
        console.log(list6.tail);
    }

    main();