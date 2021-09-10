// $(document).ready(function () {
//   // executes when HTML-Document is loaded and DOM is ready
//   // breakpoint and up  
//   const menu = $('#portal-globalnav-collapse');
//   const submenu = $('#subsite-navigation');



//   $(".close-nav").click(function () {
//     closeNav();
//   });

//   $(document).mouseup(e => {
//     if (!menu.is(e.target) // if the target of the click isn't the container...
//       && menu.has(e.target).length === 0
//       && !submenu.is(e.target)
//       && submenu.has(e.target).length === 0
//       ) // ... nor a descendant of the container
//     {
//       closeNav();
//     }
//   });

//   // when you hover a toggle show-nav its dropdown menu

//   $("li.has_subtree > a").click(function () {


//     // MENU
//     if($(this).closest(menu).length > 0){
//       if (!$("#portal-globalnav .show-nav").length > 0) {
//         $(menu).toggleClass("activated");
//         $(".mask-menu").toggleClass("in");
//       }
//       $(this).parent().toggleClass("show-nav");
//       $(this).parent().find(".show-nav").toggleClass("show-nav");
//       $(this).parent().siblings(".show-nav").toggleClass("show-nav")
//       $(this).parent().find(".activated").toggleClass(".activated");
//       if (!$("#portal-globalnav .show-nav").length > 0) {
//         closeNav()
//       }
//     }

//         // SUBMENU
//     if($(this).closest(submenu).length > 0){
//       if (!$("#subsite-navigation .show-nav").length > 0) {
//         $(submenu).toggleClass("activated");
//         // console.log("coucou")
//         // $(".mask-menu").toggleClass("in");
//       }
//       $(this).parent().toggleClass("show-nav");
//       // $(this).parent().find(".show-nav").toggleClass("show-nav");
//       $(this).parent().siblings(".show-nav").toggleClass("show-nav")
//       $(this).parent().find(".activated").toggleClass(".activated");
//       if (!$("#subsite-navigation .show-nav").length > 0) {
//         closeNav()
//       }
//     }


//     // if (!$("#subsite-navigation .show-nav").length > 0) {
//     //   $(submenu).toggleClass("activated");
//     //   $(".mask-menu").toggleClass("in");
//     // }
//     return false
//   });
// // Prev nav

// $(".prev-nav").click(function () {
//   $(this).closest(".show-nav").toggleClass("show-nav")
// });
// // close nav fonction

// function closeNav() {
//   menu.removeClass('activated');
//   submenu.removeClass('activated');
//   $('.show-nav').removeClass('show-nav');
//   $(".mask-menu").removeClass("in");
// }
// });



$(document).ready(function () {
    var div = $('#subsite-navigation > ul');
    var hasHorizontalScrollbar = div.scrollWidth > div.clientWidth;
    console.log(document.querySelectorAll('#subsite-navigation > ul').scrollWidth);
});

