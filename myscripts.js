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
	CalcNumOfNodes() {
		let Node = this.head;
		let counter = 0;
		while (Node) {
			counter++;
			Node = Node.next;
		}
		return counter + 1;
	}
}

let list = new LinkedList();
let n1 = new Node(1);
list.head = n1;
list.insertHead(2);
list;
list.insertHead(3);
list;
list.insertHead(3);
////////////////////////////////////////////////
// CalcNumOfNodes;
let ans = list.CalcNumOfNodes();
ans;
////////////////////////////////////////////////
