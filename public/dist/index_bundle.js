/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Header = React.createClass({
		displayName: "Header",

		render: function () {
			return React.createElement(
				"nav",
				{ className: "navbar navbar-default" },
				React.createElement(
					"div",
					{ className: "container-fluid" },
					React.createElement(
						"div",
						{ className: "navbar-header" },
						React.createElement(
							"button",
							{ type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
							React.createElement(
								"span",
								{ className: "sr-only" },
								"\"Toggle navigation\""
							),
							React.createElement("span", { className: "icon-bar" }),
							React.createElement("span", { className: "icon-bar" }),
							React.createElement("span", { className: "icon-bar" })
						),
						React.createElement(
							"a",
							{ className: "navbar-brand", href: "/" },
							React.createElement("img", { alt: "Brand-Img", className: "img-responsive", src: "../assets/marvin_logo_small.png" })
						),
						React.createElement(
							"a",
							{ className: "navbar-brand", href: "/" },
							React.createElement("img", { alt: "Brand-Text", className: "img-responsive brand-text small-R6", src: "../assets/small-R6.png" })
						)
					),
					React.createElement(
						"div",
						{ className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
						React.createElement(
							"ul",
							{ className: "nav navbar-nav pull-right navbar-links-right" },
							React.createElement(
								"li",
								null,
								React.createElement("script", { src: "https://donorbox.org/install-popup-button.js", type: "text/javascript", defer: true }),
								React.createElement(
									"a",
									{ className: "dbox-donation-button donate-button-styling", href: "https://donorbox.org/send-my-kids-to-college-homepage" },
									"Donate"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "/why", className: "text-uppercase" },
									" Why? "
								)
							)
						)
					)
				)
			);
		}
	});

	var MainContent = React.createClass({
		displayName: "MainContent",

		render: function () {
			return React.createElement(
				"div",
				{ className: "container-fluid" },
				React.createElement(
					"div",
					{ className: "row infinite-scroll" },
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Amazon Echo - Black"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Soprano Ukulele"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Nest Learning Thermostat"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody\u2019s home to help you save energy."
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"4M Tin Can Robot"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Amazon Echo - Black"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Soprano Ukulele"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Nest Learning Thermostat"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody\u2019s home to help you save energy."
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"4M Tin Can Robot"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Amazon Echo - Black"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Soprano Ukulele"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Nest Learning Thermostat"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody\u2019s home to help you save energy."
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"4M Tin Can Robot"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Amazon Echo - Black"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Soprano Ukulele"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Nest Learning Thermostat"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody\u2019s home to help you save energy."
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"4M Tin Can Robot"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Amazon Echo - Black"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Soprano Ukulele"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"Nest Learning Thermostat"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody\u2019s home to help you save energy."
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-3 amazonProduct" },
						React.createElement(
							"a",
							{ target: "_blank", href: "https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf" },
							React.createElement(
								"div",
								{ className: "amazonProductTitle" },
								React.createElement(
									"h4",
									null,
									"4M Tin Can Robot"
								)
							),
							React.createElement("img", { src: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" }),
							React.createElement("img", { className: "amazonProductsImage", src: "//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y", width: "1", height: "1", border: "0", alt: "" }),
							React.createElement(
								"div",
								{ className: "amazonProductDescription" },
								"Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family"
							),
							React.createElement(
								"div",
								null,
								React.createElement(
									"button",
									{ type: "button", className: "btn btn-success" },
									"Shop Now"
								)
							)
						)
					)
				)
			);
		}
	});

	var App = React.createClass({
		displayName: "App",

		render: function () {
			return React.createElement(
				"div",
				null,
				React.createElement(Header, null),
				React.createElement(MainContent, null)
			);
		}
	});

	var Profile = React.createClass({
		displayName: "Profile",

		loadDogsFromServer: function () {
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				cache: false,
				success: function (data) {
					this.setState({ data: data });
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		},
		getInitialState: function () {
			return { data: [] };
		},
		componentDidMount: function () {
			this.loadDogsFromServer();
			setInterval(this.loadDogsFromServer, this.props.pollInterval);
		},
		render: function () {
			console.log(this.state.data);
			var dogs = this.state.data.res || [];
			var dogList = dogs.map(function (dog) {
				return React.createElement(
					"div",
					{ className: "main-container" },
					React.createElement(Name, { dogName: dog.name }),
					React.createElement(ProfileImage, { dogPhoto: dog.media.photos[1].pn }),
					React.createElement(CheckContainer, { dogId: dog.id })
				);
			});

			return React.createElement(
				"div",
				null,
				dogList
			);
		}
	});

	$('.infinite-scroll').jscroll({
		loadingHtml: '<img src="loading.gif" alt="Loading" /> Loading...',
		padding: 20
	});

	ReactDOM.render(React.createElement(App, { url: "http://localhost:8080/api/getDogs", pollInterval: 200000 }), document.getElementById('app'));

/***/ }
/******/ ]);