$(document).ready(function () {


    $(window).scroll(function () {
        // 뷰포트의 높이를 가져옴
        var viewportHeight = $(window).height();
        // 스크롤된 값 (뷰포트 높이로 나누어 백분율로 표시)
        var scrollPercentage = ($(this).scrollTop() / viewportHeight) * 100;


        console.log('스크롤된 백분율: ' + scrollPercentage + '%');

        var opacity = 100 - scrollPercentage; // 100에서 스크롤된 백분율을 빼서 opacity 값을 계산

        $(".background").css("opacity", opacity + "%"); // opacity 값을 적용

        if (opacity < 0) {
            $(".background").css("display", "none");
        } else {
            $(".background").css("display", "block");
        }
    });
    let u
    $(".c_header").click(function () {
        // 클릭한 헤더의 인덱스를 가져옵니다.
        var index = $(this).index() / 2;


        // 클릭한 헤더의 다음 요소인 쇼를 토글합니다.
        $(".c_show").eq(index).toggle();
        // 클릭한 헤더의 다음 요소인 show_button 아이콘을 토글합니다.
        $(this).find(".show_button").text(function (_, text) {
            return text === "▼" ? "▲" : "▼";
        });

    });

    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                $(".animation_letter").eq(i).css("display", "inline-block")
            }, i * 200);

        }
    }, 500)













})