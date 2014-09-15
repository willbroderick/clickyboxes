Clickyboxes
===========

Turn ordinary dropdowns into chunky boxes in a Shopify theme

[Example](http://beard-theme.myshopify.com/collections/beard-care/products/beard-trimmer)

To get this working on a shop:

1. Upload jquery.clickboxes.js and add a script tag linking to it, or add the contents into the main JS file.
2. Do the same with the CSS file. Adding it to the bottom of styles.css.liquid will be simplest.
3. Add the script below to product.liquid, at the bottom, just *before* the &lt;/body&gt; tag

&lt;script&gt;
$(function($){
$('.selector-wrapper select').clickyBoxes();
});
&lt;/script&gt;

---

FYI, for our *Symmetry* theme you'll have to skip (3) and put this code *$('.selector-wrapper select').clickyBoxes();* in main.js.liquid, just after Shopify.OptionSelectors (which is around line 606). So on the line underneath:

    new Shopify.OptionSelectors($(this).attr('id'), ...
