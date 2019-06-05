/**
 * 栈数据结构
 * ADT:
 * 	init: 初始化
 *  clear: 清空
 */

function Stack {
	this.dataStore = [];
	this.top = 0;
}
Stack.prototype.push = function(elem) {
	this.dataStore[this.top++] = elem;
}
Stack.prototype.pop = function() {
	return this.dataStore[--this.top];
}
Stack.prototype.peek = function() {
	return this.dataStore[this.top-1];
}
Stack.prototype.clear = function() {
	this.top = 0;
}
Stacl.prototype.length = function() {
	return this.length;
}