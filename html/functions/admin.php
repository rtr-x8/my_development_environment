<?php
/* ======================================================================================
管理画面
====================================================================================== */

if ( is_admin() ) {
	/* メニューを非表示にする　編集者権限を対象
	------------------------------------------------------------ */
	/*function remove_menus(){
		global $current_user;
		remove_menu_page( 'edit.php' );							// 投稿
		remove_menu_page( 'edit-comments.php' );				// コメント
		remove_menu_page('separator2');							// セパレータ2
		if(!current_user_can('level_10')){						// 管理者権限以外に適用
			remove_menu_page('wpcf7');							// Contact Form 7
			remove_menu_page( 'edit.php?post_type=page' );		// 固定ページ
			remove_submenu_page('edit.php?post_type=page', 'edit.php?post_type=page');
			remove_submenu_page('edit.php?post_type=page', 'post-new.php?post_type=page');
			remove_menu_page( 'themes.php' );					// 外観
			remove_submenu_page('themes.php', 'themes.php');
			remove_submenu_page('themes.php', 'widgets.php');
			remove_submenu_page('themes.php', 'theme-editor.php');
			remove_submenu_page('plugins.php', 'plugin-editor.php');
			remove_menu_page( 'users.php' );					// ユーザー
			remove_submenu_page('users.php', 'users.php');
			remove_submenu_page('users.php', 'user-new.php');
			remove_submenu_page('users.php', 'profile.php');
			remove_menu_page( 'tools.php' );					// ツール
			remove_submenu_page('tools.php', 'tools.php');
			remove_submenu_page('tools.php', 'import.php');
			remove_submenu_page('tools.php', 'export.php');
			remove_submenu_page('options-general.php', 'options-media.php');
			remove_submenu_page('options-general.php', 'options-permalink.php');
		}
	}
	add_action('admin_menu', 'remove_menus');*/

	/* 固定ページ編集時にビジュアルエディタを非表示に
	/* http://webdesignerwork.jp/wordpress/wordpress_visualeditor/
	------------------------------------------------------------ */
	function disable_visual_editor_in_page(){
		global $typenow;
		if( $typenow == 'page' ){
			add_filter('user_can_richedit', 'disable_visual_editor_filter');
		}
	}
	function disable_visual_editor_filter(){
		return false;
	}
	add_action( 'load-post.php', 'disable_visual_editor_in_page' );
	add_action( 'load-post-new.php', 'disable_visual_editor_in_page' );

	/* ======================================================================================
	投稿
	====================================================================================== */
	/* 管理画面カテゴリ欄の縦幅を伸ばす
	------------------------------------------------------------ */
	function custom_admin_style() {
		?><style>
			.categorydiv div.tabs-panel {max-height:100%;}
		</style><?php
	}
	add_action('admin_head','custom_admin_style');
}

add_action( 'wp_print_styles', 'deregister_styles' );
function deregister_styles() {
  if ( ! is_page( 'contact' ) ) {
    wp_deregister_style( 'contact-form-7' );
  }
}