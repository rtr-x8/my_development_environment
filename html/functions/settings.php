<?php
/* ======================================================================================
画像
====================================================================================== */
/* srcset属性を無効化
/* http://increment-log.com/wordpress-disabling-responsive-images/
------------------------------------------------------------ */
add_filter( 'wp_calculate_image_srcset', '__return_false' );

/* カスタム投稿etcでもアイキャッチを有効化
------------------------------------------------------------ */
add_theme_support('post-thumbnails');

/* トリミングサイズ設定
------------------------------------------------------------ */
add_image_size('pic136x90', 136, 90, true);
add_image_size('pic190x126', 190, 126, true);
add_image_size('pic200x136', 200, 136, true);
add_image_size('pic400x225', 400, 225, true);
add_image_size('pic580x388', 580, 388, true);