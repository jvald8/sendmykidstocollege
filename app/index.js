var Header = React.createClass({
  	render: function() {
		return  (
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">"Toggle navigation"</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">
							<img alt="Brand-Img" className="img-responsive" src="../assets/marvin_logo_small.png"></img>
						</a>
						<a className="navbar-brand" href="/">
							<img alt="Brand-Text" className="img-responsive brand-text small-R6" src="../assets/small-R6.png"></img>
						</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav pull-right navbar-links-right">
							<li>
							<script src="https://donorbox.org/install-popup-button.js" type="text/javascript" defer></script>
<a className="dbox-donation-button donate-button-styling" href="https://donorbox.org/send-my-kids-to-college-homepage">Donate</a>
							</li>
							<li>
								<a href="/why" className="text-uppercase"> Why? </a>
							</li>
						</ul>
					</div>

				</div>
			</nav>
		)
 	}
})

var MainContent = React.createClass({
	render: function() {
		return (
				<div className="container-fluid">
					<div className="row infinite-scroll">
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173">
								<div className="amazonProductTitle"><h4>Amazon Echo - Black</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b">
								<div className="amazonProductTitle"><h4>Soprano Ukulele</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148">
								<div className="amazonProductTitle"><h4>Nest Learning Thermostat</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody’s home to help you save energy.</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf">
								<div className="amazonProductTitle"><h4>4M Tin Can Robot</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173">
								<div className="amazonProductTitle"><h4>Amazon Echo - Black</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b">
								<div className="amazonProductTitle"><h4>Soprano Ukulele</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148">
								<div className="amazonProductTitle"><h4>Nest Learning Thermostat</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody’s home to help you save energy.</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf">
								<div className="amazonProductTitle"><h4>4M Tin Can Robot</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173">
								<div className="amazonProductTitle"><h4>Amazon Echo - Black</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b">
								<div className="amazonProductTitle"><h4>Soprano Ukulele</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148">
								<div className="amazonProductTitle"><h4>Nest Learning Thermostat</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody’s home to help you save energy.</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf">
								<div className="amazonProductTitle"><h4>4M Tin Can Robot</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173">
								<div className="amazonProductTitle"><h4>Amazon Echo - Black</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b">
								<div className="amazonProductTitle"><h4>Soprano Ukulele</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148">
								<div className="amazonProductTitle"><h4>Nest Learning Thermostat</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody’s home to help you save energy.</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf">
								<div className="amazonProductTitle"><h4>4M Tin Can Robot</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B00X4WHP5E/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X4WHP5E&linkCode=as2&tag=jvald8-20&linkId=c13e66ed932858ca02aca29fc98c1173">
								<div className="amazonProductTitle"><h4>Amazon Echo - Black</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X4WHP5E&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B00X4WHP5E" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Answers questions, reads audiobooks and the news, reports traffic and weather, gives info on local businesses, provides sports scores and schedules, and more using the Alexa Voice Service</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B01HQGW39Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01HQGW39Q&linkCode=as2&tag=jvald8-20&linkId=e939c739458a9325c877a5a352d6062b">
								<div className="amazonProductTitle"><h4>Soprano Ukulele</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HQGW39Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B01HQGW39Q" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Complete strater pack: Soprano ukulele, carrying bag, and Ukulele Bartt digital lesson download</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=jvald8-20&linkId=ffd57fd9f441f2bb7e3de7becb7d2148">
								<div className="amazonProductTitle"><h4>Nest Learning Thermostat</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0131RG6VK&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0131RG6VK" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Nest learns the temperatures you like and programs itself in about a week and automatically turns itself down when nobody’s home to help you save energy.</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
						<div className="col-md-3 amazonProduct">
							<a target="_blank"  href="https://www.amazon.com/gp/product/B0014WO96Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014WO96Y&linkCode=as2&tag=jvald8-20&linkId=c43e94eb5ae37ed1f95f0eb2e5e5fdaf">
								<div className="amazonProductTitle"><h4>4M Tin Can Robot</h4></div>
								<img src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014WO96Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=jvald8-20" ></img>
								<img className="amazonProductsImage" src="//ir-na.amazon-adsystem.com/e/ir?t=jvald8-20&l=am2&o=1&a=B0014WO96Y" width="1" height="1" border="0" alt=""></img>
								<div className="amazonProductDescription">Recycle a soda can by turning it into a silly robot, Great for the science enthusiast in your family</div>
								<div><button type="button" className="btn btn-success">Shop Now</button></div>
							</a>
						</div>
					</div>
				</div>
		)
	}
})

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<MainContent />
			</div>
		)
 	}
})

var Profile = React.createClass({
	loadDogsFromServer: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
 	},
	getInitialState: function() {
    	return {data: []};
  	},
  	componentDidMount: function() {
    	this.loadDogsFromServer();
    	setInterval(this.loadDogsFromServer, this.props.pollInterval);	
  	},
	render: function() {
		console.log(this.state.data);
		var dogs = this.state.data.res || [];
		var dogList = dogs.map(function(dog) {
			return (
				<div className="main-container" >

					<Name dogName={dog.name} />

					<ProfileImage dogPhoto={dog.media.photos[1].pn} />

					<CheckContainer dogId={dog.id} />

				</div>
			)
		});

		return <div>{dogList}</div>
 	}
});

$('.infinite-scroll').jscroll({
    loadingHtml: '<img src="loading.gif" alt="Loading" /> Loading...',
    padding: 20
});

ReactDOM.render(<App url="http://localhost:8080/api/getDogs" pollInterval={200000} />, document.getElementById('app'));

