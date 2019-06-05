/**
 * 链表： 单链表，静态链表，循环链表，双向链表
 * 
 */
function createLinkList() {
	var _this = {},
		prev = null;
	return {
		add: function(val) {
			prev = {
				data: val,
				next: prev || null
			}
		}
	}
}