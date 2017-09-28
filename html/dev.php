<?php
	

	function is_wordpress_activate() {
		if( isset($wp_version) ) {
			return true;
		}else {
			return false;
		}
	}

	function get_stylesheet_directory_uri() {
		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';

		return '';
	}

	function home_url() {
		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';

		return '';
	}

	function get_header() {
		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';

		require_once($_SERVER['DOCUMENT_ROOT'] . '/header.php');
	}

	function get_footer() {
		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';
		
		require_once($_SERVER['DOCUMENT_ROOT'] . '/footer.php');
	}

	function get_sidebar() {
		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';
		
		require_once($_SERVER['DOCUMENT_ROOT'] . '/sidebar.php');
	}

	function get_template_part($filename) {

		if( is_wordpress_activate() ) return 'dev.phpの読み込みを解除';
		
		require_once($_SERVER['DOCUMENT_ROOT'] . '/' . $filename . '.php');

	}

?>