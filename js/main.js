$("#navComp").load("/components/nav.html");


$(document).ajaxComplete(function () {
    document.getElementById('blogbutton').onclick = blogitems
    document.getElementById('worksbutton').onclick = workitems
    document.getElementById('socialbutton').onclick = socialitems

    function blogitems() {
        // *
        $(".blog-button").removeClass("blog-button-disable");
        $(".blog-item").addClass("blog-item-active");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // social
        $(".social-item").removeClass("social-item-active");
        $(".social-button").addClass("social-button-disable");

        // about
        $(".about-button").addClass("about-button-disable");
    }
    function workitems() {
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // *
        $(".works-button").removeClass("works-button-disable");
        $(".work-item").addClass("work-item-active");

        // social
        $(".social-button").addClass("social-button-disable");
        $(".social-item").removeClass("social-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
    }
    function socialitems() {
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // *
        $(".social-button").removeClass("social-button-disable");
        $(".social-item").addClass("social-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
    }
});