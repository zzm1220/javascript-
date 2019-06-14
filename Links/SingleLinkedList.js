/**
 * 单链表
 */

class Node {
	constructor(elem) {
		this.elem = elem;
		this.next = null;
	}
}

class LinkedList {
	constructor(head) {
		this.head = new Node("head");
	}
	append(elem) {
		const newNode = new Node(elem);
		const currentNode = this.head;
		while(currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;
	}
	findByValue(item) {
		const currentNode = this.head.next;
		while(currentNode !== null && currentNode.elem !== item) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	findByIndex(index) {
		let pos = 0;
		let currentNode = this.head.next;
		while((currentNode.next != null) && pos != index) {
			currentNode = currentNode.next;
			pos++;
		}
		return currentNode;
	}
	insert(newElem, elem) {
		const currentNode = this.findByValue(elem);
		if(!currentNode) return null;
		const newNode = new Node(newElem);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}
	findPrev(elem) {
		let currentNode = this.head;
		while ((currentNode.next !== null) && (currentNode.next.elem !== elem)) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	remove(elem) {
		const prevNode = this.findPrev(elem);
		const currentNode = this.findByValue(elem);
		if (prevNode == null || currentNode == null) return null;
		prevNode.next = prevNode.next.next;
		currentNode.next = null;
	}
	display() {
		let currentNode = this.head.next;
		while(currentNode) {
			console.log(currentNode.elem);
			currentNode = currentNode.next;
		}
	}
	reverse() {
		const root = new Node("head");
		let currentNode = this.head.next;
		while(currentNode) {
			let next = currentNode.next;
			currentNode.next = root.next;
			root.next = currentNode;
			currentNode = next;
		}
		this.head = root;
	}
	checkCircle() {
		let fast = this.head.next;
		let slow = this.head;
		while((fast!= null)&&(fast.next!=null)) {
			fast = fast.next.next;
			slow = slow.next;
			if (slow === fast) return true;
		}
		return false;
	}
	removeByIndexFromEnd(index) {
		if(this.checkCircle()) return false;
		let pos = 1;
		this.reverse();
		let currentNode = this.head.next;
		while((currentNode != null) && pos<index) {
			currentNode = currentNode.next;
			pos++;
		}
		if(currentNode) return false;
		this.remove(currentNode.elem);
		this.reverse();
	}
}