$(document).ready(function () {
    $(".Img2").mouseover(function () {
        $(".Img2").stop().animate({"left":"0"},300,function () {
            $(".Img1").show();
        });
    }).mouseleave(function () {
        $(".Img1").hide();
        $(".Img2").stop().animate({"left":"80"},300);
    });
});