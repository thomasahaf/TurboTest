import './bootstrap.js';
import './provide_jquery.js';

//import $ from 'jquery';/

import './vendor/jquery-ui/jquery-ui.index.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import './vendor/bootstrap/dist/css/bootstrap.min.css';
import './styles/jquery-ui-css/jquery-ui.min.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

 $( document ).ready(function() {
    console.log( "Document ready! 2" );
});
