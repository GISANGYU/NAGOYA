$(document).ready(function () {
    // 초기에 사용자의 높이값을 저장할 변수
    var initialViewportHeight = $(window).height();

    $(".background").css("height", initialViewportHeight + "px");//초기 높이값을받아 배경 높이값을 변경되지않는 값으로 적용

    $(window).scroll(function () {
        // 스크롤된 값 (뷰포트 높이로 나누어 백분율로 표시)
        var scrollPercentage = ($(this).scrollTop() / initialViewportHeight) * 100;

        console.log('스크롤된 백분율: ' + scrollPercentage + '%');

        var opacity = 100 - scrollPercentage; // 100에서 스크롤된 백분율을 빼서 opacity 값을 계산

        $(".background").css("opacity", opacity + "%"); // opacity 값을 적용

    });
});