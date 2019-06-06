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
		},
		// 查找排序二叉树的最小值
		getMinVal: function() {
			if(this.root == null) return;
			return this.getLeftNode(this.root);
		},
		getLeftNode: function(node) {
			if (node) {
				if (node.left) {
					return this.getLeftNode(node.left);
				} else {
					return node.key;
				}
			}
		},
		getMaxVal: function() {
			if (this.root == null) return;
			return this.getRightNode(this.root);
		},
		getRightNode: function(node) {
			if (node) {
				while(node && node.right) {
					node = node.right;
				}
				return node.key;
			}
		},
		// 查找给定值是否存在于二叉树中
		search: function(key) {
			return this.searchNode(this.root, key);
		},
		searchNode: function(node, key) {
			if (node == null) {
				return false;
			}
			if (key < node.key) {
				return this.searchNode(node.left, key);
			} else if (key > node.key) {
				return this.searchNode(node.right, key);
			} else {
				return true;
			}
		},
		findMinNode: function(node) {
			if (node) {
				while(node && node.right) {
					node = node.left;
				}
				return node;
			}
			return null;
		},
		remove: function(key) {
			this.root = this.removeNode(this.root, key);
		},
		removeNode: function(node, key) {
			if (node == null) {
				return null;
			}
			if (key < node.key) {
				node.left = this.removeNode(node.left, key);
				return node;
			} else if (key > node.key) {
				node.right = this.removeNode(node.right, key);
				return node;
			}  else {
				if (node.left == null && node.right == null) {
					node = null;
					return node;
				}
				if (node.left == null) {
					node = node.right;
					return node;
				}
				if (node.right == null) {
					node = node.left;
					return node;
				}
				var aux = this.findMinNode(node.right);
				node.key = aux.key;
				node.right = this.removeNode(node.right, aux.key);
				return node;
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

