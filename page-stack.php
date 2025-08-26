<?php
/**
 * Plugin Name: Page Stack 
 * Description:  A WordPress plugin that provides a block for stacking pages Horizontaly.
  * Plugin URI: https://bplugins.com
 * Version: 1.0.0
 * Author: Bplugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks 
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PSKB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PSKB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PSKB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PSKBPLUGIN' ) ){
	class PSKBPLUGIN{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );

		}
	}
	new PSKBPLUGIN();
}


add_filter( 'template_include', function( $template ) {
    if ( is_singular( 'page' ) ) {
        global $post;
        if ( has_block( 'b-blocks/page-stack', $post ) ) {
            // Use a stripped-down template
			$dir  = plugin_dir_path( __FILE__ );
			$file = 'templates/page-stack-template.php';
			if ( file_exists( $dir . $file ) )
				return $dir . $file;

        }
    }
    return $template;
});



