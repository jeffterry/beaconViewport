/* Tag V - tag5.js */
(function tag5(){
	
	var x = {};
	x.q = function (key, loc) {
		var r = "";
		if(loc){
			var url = document.createElement('a');
			url.href = loc;
		}
		var qs = loc ? url.search : window.location.search;
		var params = qs.replace(/^\?/, ''),
			paramObj = {};
		params = params.split('&');
		for (var i = 0; i < params.length; i++) {
			var t = params[i].split('=');
			if(t[0] === key){
				r=t[1];
				break;
			}
		}
		return r;
	};
	x.s = function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
	};
	x.e = function(a) {
		return encodeURIComponent(a);
	};
	x.ir = function(a) {
		var b = new Image(0, 0);
		b.src = a;
		return b;
	};
	x.c = (function(){
		return {
			domain : location.hostname,
			get : function(k, d){
				var c = document.cookie.split(';');
				for(var i = 0; i < c.length; i++){
					var _c = c[i].replace(/^\s+/,'').split('=');
					if(_c[0] == k){
						return !d ? decodeURIComponent(_c[1]) : _c[1];
					}
				}
				return '';
			},
			set : function(k, v, e){
				var domain = this.domain;
				document.cookie = k + '=' + encodeURIComponent(v) + (e ? (";expires=" + e) : '') + ";path=/;domain=" + this.domain
				return this.get(k) == v;
			},
			test : function(k){
				return this.get(k) ? true : false;
			}
		}
	})();
	x.is = function(a) {
		var a = a.match(/\/\/.*/)[0];
		var h =	document.getElementsByTagName("script"),g;
		for (g = 0; g < h.length; g++){
			if (h[g].src != "" && h[g].src.match(/\/\/.*/)[0] === a){return;}
		}
		(function(a, b, e) {
			var d = b.head || b.getElementsByTagName("head");
			setTimeout(function() {
				if ("item" in d) {
					if (!d[0]) {
						setTimeout(arguments.callee, 25);
						return;
					}
					d = d[0];
				}
				var a = b.createElement("script");
				a.src = e;
				d.insertBefore(a, d.firstChild)
			}, 0)
		})(window, document, a)
	};
	x.v = function(a) {
		var cn = a ? a : "visID",r;
		if(this.c.test(cn)){
			r=this.c.get(cn);
		}
		else{
			r=(this.s() + "-" + this.s() + "-" + this.s() + "-" + this.s() + "-" + this.s() + "-" + this.s()).toLowerCase();
			x.c.set(cn,r);
		}
		return r;
	};
	x.n = function(a,b) {
		var h =	document.getElementsByTagName("script"),g,r;
		for (g = 0; g < h.length; g++){
			if (h[g].src != "" && h[g].src.indexOf(b)>-1){
				r=this.q(a,h[g].src);
				if(r===""){r="namenotfound";}
				break;
			}
		}
		return r;
	};

	var protocol = window.location.protocol.toLowerCase();
	var host = "training.ensighten.com";
	var filename = "pixel.png"
	var cb = +(new Date());
	var url = x.e(window.location.href).toLowerCase();
	var visid = x.v("visid");
	var name = x.e(x.n("name","//training.ensighten.com/js/tag5"));

	window.$t$ = window.$t$ || {};

	window.$t$.track = function() {
		var requestURL = protocol + "//" + host + "/" + filename + "?tag=5&name=" + name + "&cb=" + cb + "&visid=" + visid + "&url=" + url + "&d1=" + x.e($t$.d1) + "&d2=" + x.e($t$.d2) + "&d3=" + x.e($t$.d3) + "&d4=" + x.e($t$.d4) + "&d5=" + x.e($t$.d5);
		console.log(requestURL);
		x.ir(requestURL);
	}

})();