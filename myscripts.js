class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
	}
	// 1) Insert at Head Node
	insertHead(data) {
		let Newnode = new Node(data, this.head);
		this.head = Newnode;
	}
}

let list = new LinkedList();
let n1 = new Node(1);
list.head = n1;
list.insertHead(2);
list;
list.insertHead(3);
list;
