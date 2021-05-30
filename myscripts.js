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
	GiveMeFirstNode() {
		return this.head;
	}
	GiveMeLastNode() {
		let Node = this.head;
		if (Node === undefined) {
			return "No  Nodes Associated";
		}
		while (Node) {
			if (Node.next === null) {
				return Node;
			}
			Node = Node.next;
		}
	}
	clearList() {
		this.head = null;
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
let TotaNodes = list.CalcNumOfNodes();
TotaNodes;
////////////////////////////////////////////////
//GiveMeFirstNode
let firstNode = list.GiveMeFirstNode();
firstNode;
////////////////////////////////////////////////
//GiveMeLastNode
let lastNode = list.GiveMeLastNode();
lastNode;
//////////////////////////////////////////////////////
list.clearList();
list;
