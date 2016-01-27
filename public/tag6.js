/* Tag VI - tag6.js */
(function tag6(){
	
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

	var name = x.e(window.t_conversion_name);
	var id = x.e(window.t_conversion_id);
	var language = x.e(window.t_conversion_language);
	var format = x.e(window.t_conversion_format);
	var color = x.e(window.t_conversion_color);
	var label = x.e(window.t_conversion_label);
	var value = x.e(window.t_conversion_value);

	var requestURL = protocol + "//" + host + "/" + filename + "?tag=6&name=" + name + "&cb=" + cb + "&visid=" + visid + "&url=" + url + "&id=" + id + "&language=" + language + "&format=" + format + "&color=" + color + "&label=" + label + "&value=" + value;
	console.log(requestURL);
	x.ir(requestURL);

})();