(function() {
	var zhiQuery = function(selector, context) {
		return new zhiQuery.init(selector, context);
	}
	zhiQuery.fn = zhiQuery.prototype = {
		constructor: zhiQuery,
		init: function(selector) {
			this.selector = selector;
			var results = document.querySelectorAll(selector);
			for (var i = 0; i < results.length; i++) {
				this[i] = results[i];
			}
			return this;
		},
		each: function(callback, args) {
			return zhiQuery.each(this, callback, args);
		}
	}
	zhiQuery.fn.init.prototype = zhiQuery.fn;
	zhiQuery.extend = zhiQuery.fn.extend = function() {
		var options, src, copy, target = arguments[0]||{},
			i = 1, length = arguments.length;
		if (i === length) {
			target = this;
			i--;
		}
		for(; i<length; i++) {
			if ((options=arguments[i]) != null){
				for (name in options) {
					copy = options[name];
					target[name] = copy;
				}
			}
		}
		return target;
	}
	zhiQuery.each = function(obj, callback, args) {

	}
	zhiQuery.fn.extend({
		get: function(num) {
			if (num != null) {
				return (num < 0 ? this[num+this.length] : this[num]);
			} else {
				return [].slice.call(this);
			}
		}
	})
})();
