var testMessage = ''
+'<h3>TEST MODE LINKS</h3>'
+'<ul>'
	+'<li><a href="#" id="fireBeacon1">Fire Tag 1</a></li>'
	+'<li><a href="#" id="fireBeacon2">Fire Tag 2</a></li>'
	+'<li><a href="#" id="fireBeacon3">Fire Tag 3</a></li>'
	+'<li><a href="#" id="fireBeacon4">Fire Tag 4</a></li>'
	+'<li><a href="#" id="fireBeacon5">Fire Tag 5</a></li>'
	+'<li><a href="#" id="fireBeacon6">Fire Tag 6</a></li>'
	+'<li><a href="#" id="fireBeacon7">Fire Tag 7</a></li>'
	+'<li><a href="#" id="fireBeaconParty">Fire All Tags!</a></li>'
+'</ul>';

jQuery("div.testingTooltip").tooltipster({
  theme: "tooltipster-punk",
  animation: "slide",
  updateAnimation: false,
  arrow: false,
  autoClose: false,
  interactive: true,
  trigger: "custom",
  position: "top-right",
  onlyOne: false,
  offsetX: -30,
  offsetY: 2,
  content: jQuery(testMessage)
}).tooltipster("show");

var beaconHost = "/";

function t1(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=1&name=jeffreyterry&cb=";
	b += cb;
	new Image().src = a + b;
}
function t2(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=2&name=timothypope&cb="
	b += cb;
	b += "&visid=4873-b7d3-c298-5fe2-34a5-d747&url=http://jbt81.com/ensighten/learning/manage2prod.html&ua=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36";
	new Image().src = a + b;
}
function t3(){
	var cb = (+new Date());
	var a = beaconHost + "iframe.html?";
	var b = "tag=3&name=timothybenhart&cb=";
	new Image().src = a + b;
}
function t4(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=4&name=timpope&d1=value&d2=value&d3=value&cb=";
	b += cb;
	new Image().src = a + b;
}
function t5(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=5&name=jeffterry&cb=";
	b += cb;
	b += "&visid=edb8-a8e0-11a6-27ca-59a7-3ab4&url=http://jbt81.com/ensighten/learning/manage2prod.html&d1=test&d2=values&d3=to&d4=be&d5=replaced";
	new Image().src = a + b;
}
function t6(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=6&name=timpope&cb=";
	b += cb;
	b += "&visid=ea23-30eb-8764-926d-de15-534e&url=http://jbt81.com/ensighten/learning/manage2prod.html&id=1048&language=en&format=1&color=567A55&label=54873_848547363_01&value=45.95";
	new Image().src = a + b;
}
function t7(){
	var cb = (+new Date());
	var a = beaconHost + "pixel.png?";
	var b = "tag=7&name=timbenhart&cb=";
	b += cb;
	b += "&visid=ea23-30eb-8764-926d-de15-534e&url=http%3a%2f%2fjbt81.com%2fensighten%2flearning%2fmanage2prod.html&orderId=55555&tax=0.00&shipping=1.00&total=121.00&city=Austin&state=TX&country=USA&currency=USD&userId=7448dc2&itemSKUs=abc,def&itemPrices=10.00,100.00&itemQuantities=2,1";
	new Image().src = a + b;
}
function party(){
	var t = 100;
	setTimeout(function(){t1();
		setTimeout(function(){t2();
			setTimeout(function(){t3();
				setTimeout(function(){t4();
					setTimeout(function(){t5();
						setTimeout(function(){t6();
							setTimeout(function(){t7();
							},t);
						},t);
					},t);
				},t);
			},t);
		},t);
	},t);
}

jQuery("#fireBeacon1").click(t1);
jQuery("#fireBeacon2").click(t2);
jQuery("#fireBeacon3").click(t3);
jQuery("#fireBeacon4").click(t4);
jQuery("#fireBeacon5").click(t5);
jQuery("#fireBeacon6").click(t6);
jQuery("#fireBeacon7").click(t7);
jQuery("#fireBeaconParty").click(party);
