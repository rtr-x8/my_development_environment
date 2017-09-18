<?php
/* ======================================================================================
<head>内
====================================================================================== */
/* 不要タグ削除
------------------------------------------------------------ */
remove_action('wp_head', 'feed_links', 2); //サイト全体のfeed
remove_action('wp_head', 'feed_links_extra', 3); //その他のfeed
remove_action('wp_head', 'rsd_link'); //Really Simple Discovery Link
remove_action('wp_head', 'wlwmanifest_link'); //Windows Live Writer Link
remove_action('wp_head', 'rel_canonical'); //canonical
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0); //前後の記事 Link
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0); //Short Link
remove_action('wp_head', 'wp_generator'); //WP version
remove_action('wp_head', 'print_emoji_detection_script', 7 ); //emoji JS
remove_action('wp_print_styles', 'print_emoji_styles' ); //emoji CSS
remove_action('wp_head', 'rest_output_link_wp_head'); //Embed Link
remove_action('wp_head', 'wp_oembed_add_discovery_links'); //Embed Link
remove_action('wp_head', 'wp_oembed_add_host_js'); //Embed JS
remove_action('template_redirect', 'rest_output_link_header', 11); //Embed HTTP Response Header
function remove_dns_prefetch( $hints, $relation_type ){
	if ( 'dns-prefetch' === $relation_type ){
		return array_diff( wp_dependencies_unique_hosts(), $hints );
	}
	return $hints;
}
add_filter( 'wp_resource_hints', 'remove_dns_prefetch', 10, 2 );

// cf7 でinput type=dateに対応
add_filter( 'wpcf7_support_html5_fallback', '__return_true' );

// cf7 でCSS読みこまない
//add_filter( 'wpcf7_load_css', '__return_false' );