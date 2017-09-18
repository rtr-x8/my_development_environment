<?php

	function is_wordpress_activate() {
		if( isset($wp_version) ) {
			return true;
		}else {
			return false;
		}
	}

	function get_template_directory() {
		if( is_wordpress_activate() ) {
			return '/';
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

	function home_url() {
		if( is_wordpress_activate() ) {
			return '';
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

	function get_header() {
		if( is_wordpress_activate() ) {
			require_once($_SERVER['DOCUMENT_ROOT'] . '/header.php');
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

	function get_footer() {
		if( is_wordpress_activate() ) {
			require_once($_SERVER['DOCUMENT_ROOT'] . '/footer.php');
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

	function get_sidebar() {
		if( is_wordpress_activate() ) {
			require_once($_SERVER['DOCUMENT_ROOT'] . '/sidebar.php');
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

	function get_template_part($filename) {
		if( is_wordpress_activate() ) {
			require_once($_SERVER['DOCUMENT_ROOT'] . '/' . $filename . '.php');
		}else {
			return 'dev.phpの読み込みを解除';
		}
	}

?>