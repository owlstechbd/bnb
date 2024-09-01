let mainHeaderHtml = `
<section class="nav-main">
		<div class="container-2">
			<nav class="navbar navbar-expand-lg">
				<a class="navbar-brand" href="index.html"><img src="images/BnbPartner-logoWeb.png" alt=""></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav">

							<li class="nav-item">
								<a href="index.html">Home</a>
								
							</li>

							<li class="nav-item">
								<a href="about.html">About Us</a>
							</li>

							<li class="nav-item">
								<a href="blog.html">Blog</a>
							</li>

							<li class="nav-item">
								<a href="pricing.html">Pricing</a>
							</li>

						</ul>

					</div>
        	</nav>
		</div><!-- container2 -->
	</section>

`
document.getElementById('gobal-header').innerHTML = mainHeaderHtml

