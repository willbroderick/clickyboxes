Clickyboxes
===========

Turn ordinary dropdowns into chunky boxes in a Shopify theme



To get this working on a shop.

1. Upload jquery.clickboxes.js and add a script tag linking to it, or add the contents into the main JS file.
2. Do the same with the CSS file. Adding it to the bottom of styles.css.liquid will be simplest.
3. Add the script below to product.liquid, right at the bottom.

<script>
$(function($){
	//Turn inputs into clickable boxes
	$('.selector-wrapper select').clickyBoxes();
});
</script>