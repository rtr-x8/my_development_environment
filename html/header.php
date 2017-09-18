<?php
	require_once('./dev.php');
	$site_title       = 'サイト名';
	$site_dscription  = '共通ディスクリプション';
	$site_keywords    = '共通キーワード,共通キーワード';
	$page_title       = $page_name . '｜' . $site_title;
	$page_description = $page_name . '｜' . $site_dscription;
	$page_keywords    = $page_name . ','  . $site_keywords;
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>
		<?php echo $page_title; ?>
	</title>
	<meta name="viewport"
							content="width=device-width,user-scalable=yes">
		<meta name="description"
								content="<?php echo $site_dscription; ?>">
			<meta name="keywords"
									content="&lt;?php echo $page_keywords; ?&gt;">
				<link rel="stylesheet"
										href="<?php echo get_template_directory(); ?>/css/bundle.css">
					<link rel="subresource"
											href="<?php echo get_template_directory(); ?>/css/lazyload.css">
						<link rel="subresource"
												href="//fonts.googleapis.com/earlyaccess/notosansjapanese.css">
							<link rel="subresource"
													href="//fonts.googleapis.com/css?family=Roboto:400,500,700,900">
								<link rel="canonical"
														href="https://<?php echo $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>">
									<meta property="og:title"
															content="<?php echo $page_title; ?>">
										<meta property="og:url"
																content="https://<?php echo $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']; ?>">
											<meta property="og:description"
																	content="<?php echo $site_dscription; ?>">
												<meta property="og:type"
																		content="website">
													<meta property="og:image"
																			content="<?php echo get_template_directory(); ?>">
														<meta property="og:site_name"
																				content="<?php echo $site_title; ?>">
															<meta property="fb:app_id"
																					content="">
																<meta name="twitter:card"
																						content="summary">
																	<meta name="twitter:site"
																							content="@">
																		<meta name="twitter:player"
																								content="@">
																			<meta name="format-detection"
																									content="telephone=no">
																				<!--[if lte IE 9]><script>(function() {alert('Please update to IE 10 or higher.')})();</script><![endif]-->
</head>
<body id='<?php echo $page_id; ?>'
						class='body--<?php echo $page_id; ?>'>
	<div id="loader">
		<div id="loader__bar"></div>
		<p class="font__robot--regular"
					id="loader__txt">000</p>
	</div>
	<div id="js_media_query"></div>
	<div id="wrapper"
						data-gNav_condition='close'>
		<header class="gHeader cf"
										id="gHeader"
										role="banner"
										itemscope
										itemtype="http://schema.org/WPHeader"
										data-color="w">
			<?php if( $page_id === 'home' ): ?>
			<h1 class="gHeader-logo">
				<a class="gHeader-logo__anchor"
							href="<?php home_url('/', 'relative'); ?>/"><span class="gHeader-logo__txt"><?php echo $site_title ?></span></a>
			</h1>
			<?php else: ?>
			<p class="gHeader-logo">
				<a class="gHeader-logo__anchor"
							href="<?php home_url('/', 'relative'); ?>/"><span class="gHeader-logo__txt"><?php echo $site_title ?></span></a>
			</p>
			<?php endif; ?>
			<button class="gHeader-hamburger"
											data-hamburger><span class="gHeader-hamburger-in"><span class="gHeader-hamburger__line--top"></span><span class="gHeader-hamburger__line--mid"></span><span class="gHeader-hamburger__line--btm"></span></span>
				</button>
				<nav class="gHeader-nav gNav is_close"
									id="gNav"
									role="navigation"
									itemscope
									itemtype="http://www.schema.org/SiteNavigationElement">
					<div class="gNav-in">
						<ul class="gNav-list cf">
							<li class="gNav-list__item"
											itemprop="name">
								<a class="gNav-list__item-anchor font__robot--bold"
											href="<?php home_url('/', 'relative'); ?>/"
											itemprop="URL">HOME</a>
									</li>
						</ul>
					</div>
					</nav>
					</header>
					<!-- /header#header-->
					<div id="contents"
										data-pjax_container>
						<main role="main"
												data-body_id='<?php echo $page_id; ?>'>