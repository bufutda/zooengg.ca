<!DOCTYPE html>
<html lang="en" dir="ltr">
<!--
	Electrical, Computer, and Software Engineering Students' Society Website
	Website Created in 2020 by Ines Rosito.
-->
	<head>
		<title>
			Council Applications
		</title>
		<!-- Style Guides -->
		<link href='https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet'>
		<link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'>
		<link rel="stylesheet" type="text/css" href="../../styles/website-style.css">
		<link rel="stylesheet" type="text/css" href="../../styles/council-app-style.css">
		<!-- Favicon -->
		<link rel="shortcut icon" type="image/png" href="/icon-images/favicon.png">
	</head>

  <body>

		<h1 id="council-name"> Electrical, Computer, and Software Engineering Students' Society </h1>
</div>

<div id="dropdown">
	<nav>
		<a href="/zoo/index.html"><img  id="zoo-logo" src="/icon-images/zoo.png"></a>
		<div class="vertical-line"></div>
		<ul>
			<li><a href="/main/index.html">HOME</a></li>
			<li><a href="#">COUNCIL<img class="arrow" src="/icon-images/icon-dropdown.png"></a>
				<ul>
					<li class="council-dropdown"><a href="/council/execs/index.html">EXECUTIVES</a></li>
					<li class="council-dropdown"><a href="/council/commissioners/index.html">COMMISSIONERS</a></li>
					<li class="council-dropdown"><a href="/council/applications/index.php">JOIN THE TEAM</a></li>
				</ul>
			</li>
			<li><a href="/events/index.html">EVENTS</a></li>
			<li><a href="#">SPONSORS<img class="arrow" src="/icon-images/icon-dropdown.png"></a>
				<ul>
					<li><a href="/sponsors/our-sponsors/index.html">OUR SPONSORS</a></li>
					<li><a href="/sponsors/sponsor-forms/index.html">BECOME A SPONSOR</a></li>
				</ul>
			</li>
		</ul>
	</nav>
</div>


		<div id="app--body">
			<div id="app--footer-setup">
				<div id="app--content">
					<div id="join-us">
						<img src="/council/assets/join-us.svg">
						<h1 id="right">Join the Team!</h1>

						<p class="right-text">We are accepting applications for the <b>2020-2021</b> academic year! There are various commissioner roles available, so be sure to pick the right one for you.
						<br><br><b>Questions?</b> Email execs@zooengg.ca, otherwise download the form below and submit your application to join today!</p>

						<a id="button" href="/council/assets/CommissionerForm.pdf" target="_blank">Download Form</a>
					</div>
					<div id="app-form">
						<h1>Send Us Your Application!</h1>
						<p>We would like to thank every applicant in advance.</p>
						<form id="grid" action="/council/applications/contact-form-app.php" method="post" enctype="multipart/form-data">
							<label id="name" for="name">Name *</label>
					    <label id="fname" for="fname">First Name</label>
					    <input required id="fname-box" type="text" name="firstname" placeholder="First Name">

					    <label id="lname" for="lname">Last Name</label>
					    <input required id="lname-box" type="text" name="lastname" placeholder="Last Name">

							<label id="email" for="email">Email *</label>
							<input required id="email-box" type="text" name="email" placeholder="Email  (@ucalgary.com preferred)">

							<label id="ucid" for="ucid">UCID *</label>
							<input required maxlength="8" id="ucid-box" type="text" name="ucid" placeholder="UCID">

					    <label id="degree" for="degree">Degree</label>
					    <select required id="degree-select" name="degree">
								<option selected disabled hidden>Please Select from Dropdown</option>
					      <option value="Computer">Computer</option>
					      <option value="Electrical">Electrical</option>
					      <option value="Software">Software</option>
								<option disabled>------------</option>
								<option value="Chemical">Chemical</option>
								<option value="Civil">Civil</option>
								<option value="Geomatics">Geomatics</option>
								<option value="Mechanical">Mechanical</option>
								<option value="Oil & Gas">Oil & Gas</option>
					    </select>

							<label id="year" for="year">Year</label>
					    <select required id="year-select" name="year">
								<option selected="selected" disabled>Please Select from Dropdown</option>
					      <option value="2nd Year">2nd Year</option>
					      <option value="3rd Year">3rd Year</option>
					      <option value="4th Year">4th Year</option>
								<option value="5th Year and Above">5th Year and Above</option>
					    </select>

							<label id="file" for="file">Upload your Commissioner Application *</label>
							<input required id="file-select" accept="application/pdf" type="file" name="fileUpload">

					    <label id="comments" for="comment">Additional Comments</label>
					    <textarea maxlength="6000" id="comments-box" name="comment" placeholder="Additional comments, if any (6000 char. limit)..."></textarea>

					    <input id="submit" name="submit" type="submit" value="Submit">

						</form>
					</div>
				</div>
			</div>
		</div>

	  	<button onclick="topFunction()" id="to-top" title="Go to top">^</button>

	<div id="footer">
		<div id="grid">
			<div id="address">
				<h4> Electrical, Computer, and Software
				Engineering Students' Society<br></h4>
				<p>2500 University Drive, ENA 106<br>
				Calgary, Alberta, Canada<br>
				T2N 1N4</p>
			</div>
				<div id="site-links1">
					<h4>Site Links<br></h4>
					<ul>
						<li><a href="/main/index.html#main-title">   About Us</a></li>
						<li><a href="/council/execs/index.html">   Executive Council</a></li>
						<li><a href="/council/commissioners/index.html">   Commissioners</a></li>
						<li><a href="/council/applications/index.php">   Join the Team</a></li>
					</ul>
				</div>
				<div id="site-links2">
					<ul>
						<br><br>
						<li><a href="/events/index.html">Events</a></li>
						<li><a href="/sponsors/our-sponsors/index.html">Our Sponsors</a></li>
						<li><a href="/sponsors/sponsor-forms/index.html">Become a Sponsor</a></li>
				</div>
		</div>

		<hr>
		<div id="social-media">
			<!--<p><b>FOLLOW US</b></p>-->
			<a href="https://www.linkedin.com/company/zooengg">
				<img class="media-icon" src="/icon-images/linkedin.png" alt="linkedin"></a>
			<a href="https://www.facebook.com/zooengg/">
				<img class="media-icon" src="/icon-images/facebook.png" alt="facebook"></a>
			<a href="https://www.instagram.com/inzoogram/">
				<img class="media-icon" src="/icon-images/instagram.png" alt="instagram"></a>
			<a href="mailto:execs@zooengg.ca">
				<img class="media-icon" src="/icon-images/mail-main.png" alt="email"></a>
			</div>

		<div id="copyright">
			Copyright &#169; 2020 University of Calgary's Electrical, Computer, and Software Engineering Students' Society.
		</div>

	</div>


		<!-- Scripts -->
		<script src="../../scripts/to-top.js"></script>

	</body>
</html>