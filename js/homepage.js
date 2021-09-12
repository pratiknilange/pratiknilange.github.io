// req for homepage
// home.js
switch (window.location.hash) {
    case '#blog':
        // *
        $(".blog-button").removeClass("blog-button-disable");
        $(".blog-item").addClass("blog-item-active");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // social
        $(".social-item").removeClass("social-item-active");
        $(".social-button").addClass("social-button-disable");

        // about
        $(".about-button").addClass("about-button-disable");
        break;
    case "#works":
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // *
        $(".works-button").removeClass("works-button-disable");
        $(".work-item").addClass("work-item-active");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // social
        $(".social-button").addClass("social-button-disable");
        $(".social-item").removeClass("social-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
        break;
    case "#reviews":
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".reviews-button").removeClass("reviews-button-disable");
        $(".review-item").addClass("review-item-active");

        // work
        $(".social-item").removeClass("social-item-active");
        $(".social-button").addClass("social-button-disable");

        // about
        $(".about-button").addClass("about-button-disable");
        break;
    case "#social":
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // *
        $(".social-button").removeClass("social-button-disable");
        $(".social-item").addClass("social-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
    default:
    // code block
}

document.getElementById('blogbutton').onclick = blogitems;
document.getElementById('worksbutton').onclick = workitems;
document.getElementById('socialbutton').onclick = socialitems;
document.getElementById('reviewsbutton').onclick = reviewitems;

function blogitems() {
    // *
    $(".blog-button").removeClass("blog-button-disable");
    $(".blog-item").addClass("blog-item-active");

    // work
    $(".work-item").removeClass("work-item-active");
    $(".works-button").addClass("works-button-disable");

    // reviews
    $(".review-item").removeClass("review-item-active");
    $(".reviews-button").addClass("reviews-button-disable");

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

    // reviews
    $(".review-item").removeClass("review-item-active");
    $(".reviews-button").addClass("reviews-button-disable");

    // social
    $(".social-button").addClass("social-button-disable");
    $(".social-item").removeClass("social-item-active");

    // about
    $(".about-button").addClass("about-button-disable");
}
function reviewitems() {
    // blog
    $(".blog-item").removeClass("blog-item-active");
    $(".blog-button").addClass("blog-button-disable");

    // work
    $(".work-item").removeClass("work-item-active");
    $(".works-button").addClass("works-button-disable");

    // reviews
    $(".reviews-button").removeClass("reviews-button-disable");
    $(".review-item").addClass("review-item-active");

    // work
    $(".social-item").removeClass("social-item-active");
    $(".social-button").addClass("social-button-disable");

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

    // reviews
    $(".review-item").removeClass("review-item-active");
    $(".reviews-button").addClass("reviews-button-disable");

    // *
    $(".social-button").removeClass("social-button-disable");
    $(".social-item").addClass("social-item-active");

    // about
    $(".about-button").addClass("about-button-disable");
}