(function(win) {
	function BinaryTree() {
		this.root = null;
	}
	BinaryTree.prototype = {
		constructor: BinaryTree,
		init: function(keys) {
			keys.forEach(key => {
				const newNode = new Node(key);
				if (this.root == null) {
					this.root = newNode;
				} else {
					this.insertNode(this.root, newNode);
				}
			})
		},
		insertNode: function(node, newNode) {
			if (newNode.key < node.key) {
				if (node.left == null) {
					node.left = newNode;
				} else {
					this.insertNode(node.left, newNode);
				}
			} else {
				if (node.right == null) {
					node.right = newNode;
				} else {
					this.insertNode(node.right, newNode)
				}
			}
		},
		getLength: function() {

		},
		getRoot: function() {
			return this.root;
		},
		get: function(index) {

		},
		// 中序遍历节点
		inOrderTraverse: function(callback) {
			this.inOrderTraverseNode(this.root, callback);
		},
		inOrderTraverseNode: function(node, callback) {
			if (node != null) {
				this.inOrderTraverseNode(node.left, callback);
				callback(node.key);
				this.inOrderTraverseNode(node.right, callback);
			}
		},
		// 前序遍历节点
		preOrderTraverse: function(callback) {
			this.preOrderTraverseNode(this.root, callback);
		},
		preOrderTraverseNode: function(node, callback) {
			if (node != null) {
				callback(node.key);
				this.preOrderTraverseNode(node.left, callback);
				this.preOrderTraverseNode(node.right, callback);
			}
		},
		// 后序遍历
		nextOrderTraverse: function(callback) {
			this.nextOrderTraverseNode(this.root, callback);
		},
		nextOrderTraverseNode: function(node, callback) {
			if (node != null) {
				this.nextOrderTraverseNode(node.left, callback);
				this.nextOrderTraverseNode(node.right, callback);
				callback(node.key);
			}
		}
	}
	function Node(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
	win.BinaryTree = BinaryTree;
})(window);

