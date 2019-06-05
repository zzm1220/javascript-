(function() {

	const animation = (function() {
		const Queue = [];
		let fireing = false;
		let first = true;
		const makeAnim = function(element, options, func) {
			const width = options.width;
			element.style.webkitTransitionDuration = "2000ms";
			element.style.webkitTransform = "translate3d(" + width + "px,0,0)";
			element.addEventListener('webkitTransitionEnd', function() {
				func();
			})
		};
		const _fire = function() {
			if (!fireing) {
				var onceRun = Queue.shift();
				if (onceRun) {
					fireing = true;
				}
			}
		};
		return {
			add: function(element, options) {
				Queue.push(function(func) {
					makeAnim(element, options, func);
				})
			},
			fire: function() {
				_fire();
			}
		}
	})();
	function zQuery = (selector) {
		return new zQuery.fn.init(selector);
	}
	zQuery.fn = zQuery.prototype = {
		constructor: zQuery,
		run: function(options) {
			return this;
		}
	}
	const init = zQuery.fn.init = function(selector) {

	};

	init.prototype = zQuery.fn;

	return zQuery;
})();