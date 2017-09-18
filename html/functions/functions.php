<?php

/* 親ページと子ページをスラッグで判定
------------------------------------------------------------ */
function is_parent_slug() {
	global $post;
	if ($post->post_parent) {
		$post_data = get_post($post->post_parent);
		return $post_data->post_name;
	}
}

/* 文字数制限 */
function ex_text($txt, $count) {
    if(mb_strlen($txt,'UTF-8')>$count) {
    	$txt = wp_strip_all_tags($txt, true);
        $content= str_replace("\n", "<br />n", mb_substr(strip_tags($txt,'<a><br>'),0,$count,'UTF-8'));
        return $content.…;
    } else {
        return $txt;
    }
}

/*function add_head_link() {
    echo '<script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>';
    echo "
    <script type=\"text/javascript\">
    jQuery(function($){
    $(\"#zip\").attr('onKeyUp', 'AjaxZip3.zip2addr(this,\'\',\'address\',\'address\');');})";
    echo '</script>';
	
	echo'<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>';
	echo'<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/i18n/jquery.ui.datepicker-ja.min.js"></script>';
	echo'<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css" >';
	echo"
		<script>
		  jQuery(function($) {
			$(\"#datepicker01\").datepicker();
			$(\"#datepicker02\").datepicker();
		  })";
		echo'</script>';
}
add_action('wp_head', 'add_head_link');*/


/* ショートコード登録 */
function shortcode_templateurl() {
    return get_stylesheet_directory_uri();
}
add_shortcode('themePath', 'shortcode_templateurl');
function shortcode_url() {
    return home_url('/','relative');
}
add_shortcode('homeUrl', 'shortcode_url');

/* ショートコードの登録  Contact Form 7*/
add_action( 'wpcf7_init', 'custom_add_shortcode_pass' );
function custom_add_shortcode_pass() {
    wpcf7_add_shortcode( 'cf7path', 'shortcode_templateurl' );
    wpcf7_add_shortcode( 'cf7home', 'shortcode_url' );
}
