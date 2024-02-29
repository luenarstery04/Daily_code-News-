$(function(){
    // 윈도우 스크롤시 메인 메뉴 고정
    $(window).on('scroll', function(){
        // 스크롤되는 문서의 top이 #headerBox 이상이면 메인 메뉴 고정되고 그림자 표시
        if($(document).scrollTop() >= $('#headerBox').height()){
            $('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
        }else{
            $('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
        }

    });

    // moveToTop 이미지 클릭 시 Top으로 이동
    $('#moveToTop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 500);
    });

    // WeeklyItem hover하면 opacity수정
    $('#weeklyItem li').each(function(index){
        $(this).hover(
            function(){
                $(this).css('opacity', '0.5');
            },
            function(){
                $(this).css('opacity', '1');
            }
    );
    });

      // Top10 hover하면 opacity수정
      $('#topArticle tr').each(function(index){
        $(this).hover(
            function(){
                $(this).css('opacity', '0.5');
            },
            function(){
                $(this).css('opacity', '1');
            }
    );
    });



});

// 오늘의 날짜 출력하기
window.onload = function(){
    // today = Date();
    // year = today.getYear();
    // month = today.getMonth();
    // day = today.getDate();
    document.getElementById("date").innerHTML = Date();
    // document.getElementById("date").innerHTML = Date().getYear();


};