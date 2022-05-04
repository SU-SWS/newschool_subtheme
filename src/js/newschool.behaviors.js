/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach (context, settings) {
    // console.log("Attached.");
    //(function ($) {

      // if ($('.front').length) {
        // var heading = $('.newschool--top-banner h2.newschool--heading-top-banner a');
      
        // // add the breaks
        // var html = $(heading).html().split(" ");
        // html = html[0] + '<br/>' + html[1] + '<br/>' + html[2];
        // $(heading).html(html);

        // make new variable with the breaks.
        // var brokenheading = $('.newschool--top-banner h2.newschool--heading-top-banner');

        //move the heading with breaks
        // $(brokenheading).insertBefore('.newschool--top-banner article');

        //remove the link
        // $(".newschool--heading-top-banner a").contents().unwrap();
      // }
    //})(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
