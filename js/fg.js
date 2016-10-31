function loopBanner(index){
    var arrImg = $(".banner-box").children("div");
    if( index >= arrImg.length ) index = 0;
    var next = index + 1;
    if( next > arrImg.length-1 ) next = 0;
    $(arrImg[index]).show();
    $(arrImg[next]).show();
    $(arrImg[next]).css('opacity', '0');

    // 用于修改轮播间隔时间
    setTimeout(timeOut,3000);

    // 用于调试轮播图动画效果
    function timeOut(){
        if(next==2){
            $(arrImg[next]).animate({opacity:'0.5'}, 2500);
        }else {
            $(arrImg[next]).animate({opacity:'0.8'}, 2500);
        }
        $(arrImg[index]).animate({opacity:'0'}, 2500, function(){
            $(arrImg[index]).hide();
            $(arrImg[next]).hide();
            loopBanner(index+1) }
        );
    }
}

$(document).ready(function(){
    loopBanner(0);      // 从第 0 个开始播放
});

// nav过渡控制
$(document).on("scroll", function(){
    if ($(document).scrollTop() > 0){
        $(".header").addClass("small");
        $(".nav").addClass("small");
        $(".logo img").addClass("small");
    } else {
        $(".header").removeClass("small");
        $(".nav").removeClass("small");
        $(".logo img").removeClass("small");
    }
});

// nav-list-hover 下划线
$(function(){
    //$(selector).hover(inFunction,outFunction);
    $('.nav-list').hover(function(){
        //链式操作,先停止当前正在运行的动画然后改变css
        $('span',this).stop().css('height','3px');
        $('span',this).animate({height:'3px'},200);
    },function(){
        $('span',this).stop().animate({height:'0'},200);
    });
    
});
$(function(){
    var h = $(window).height();
   $('.page-main').css('height',h); 
})
$(window).resize(function(event) {
     var h = $(window).height();
   $('.page-main').css('height',h); 
});;

