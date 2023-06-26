<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="google-site-verification" content="vz_6QuXE1j4gOx6BGTceHiBDuv2JZ6pbFp85l9QSe40" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="theme-color" content="#f06400" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<link rel="stylesheet" href="https://connect.leaseplan.com/quote-main.css" type="text/css" />
<!--<link rel="stylesheet" href="css/quote-main.css" type="text/css" />-->
<link rel="stylesheet" href="https://connect.leaseplan.com/quote-headroom.css" type="text/css" />
<!-- <link rel="stylesheet" href="css/quote-headroom.css" type="text/css" />-->

<link rel="stylesheet" href="https://connect.leaseplan.com/quote-v2.css" type="text/css" />
<!--<link rel="stylesheet" href="css/quote-v2.css" type="text/css" />-->

<link rel="apple-touch-icon" sizes="180x180" href="https://www.leaseplan.com/static/images/favicons/apple-touch-icon.png" />
<link rel="icon" type="image/png" href="https://www.leaseplan.com/static/images/favicons/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://www.leaseplan.com/static/images/favicons/favicon-16x16.png" sizes="16x16" />
<link rel="mask-icon" href="https://www.leaseplan.com/static/images/favicons/safari-pinned-tab.svg" color="#ff6400" />
<link rel="shortcut icon" href="https://www.leaseplan.com/static/images/favicons/favicon.ico" />
<link rel="manifest" href="https://www.leaseplan.com/static/manifest.json" />
<title>Quote Landing Page | LeasePlan</title>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>

</head>

<body>
<div id="app" class="root-app">
  <div class="main-content-wrapper-ie">
    <div class="main-content-wrapper">
      <div id="top-navigation__placeholder" style="height: 67px;"></div>
      <header class="top-navigation__wrap top-navigation__logo--animate-up--primary-lane-only" id="header">
        <nav class="top-navigation">
          <div class="top-navigation__lane">
            <div class="o-wrapper o-wrapper--lg o-wrapper--no-gutter top-navigation__primary">
              <div class="top-navigation__logo"> <a href="/" class="clickable-logo" rel="home"> <img src="https://www.leaseplan.com/static/images/logo-navigation.png" srcset="https://www.leaseplan.com/static/images/logo-navigation@2x.png 2x" class="clickable-logo__logo" alt="LeasePlan" /> </a> </div>
            </div>
          </div>
        </nav>
      </header>
      <main class="main-content u-padding-bottom-huge">
        %%[ IF NOT EMPTY(RequestParameter('resource_id')) THEN ]%%
        %%=TreatAsContent(ContentBlockById("358877"))=%%
        <!-- 
Quote Views: 
1: quote type= null (default)
2: financial summary &type=summary
3: basket &type=basket

-->
        %%[ ELSE ]%%
        <h1>
          Not found
        </h1>
        %%[ENDIF]%%
      </main>
    <footer class="footer">
        <div class="o-wrapper footer__wrapper u-padding-bottom u-padding-top@mobile u-padding-top-huge@tablet"> <img src="https://www.leaseplan.com/static/images/logo-footer-white.png" class="footer__logo u-hide-until@tablet" />
          <div class="o-layout">
            <div class="footer__small-txt o-layout__item u-1/4@tablet u-txt--white u-txt--12"> <span class="translation-label">&copy; %%=Format(Now(), "yyyy")=%% LeasePlan</span> </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> 
<!-- headroom js for logo/header to disappear when scrolling down --> 
<script type="text/javascript" src="https://connect.leaseplan.com/tb-headroom.js"></script> 
<script type="text/javascript">
  // grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init(); </script>
</body>
</html>