$(function(){
    var index = 0;
    var timer = null;
    var arrImg = $(".banner-box").children("div");
    $('.banner-one').show()
    timer = setInterval(moveR,3500)

    $('.banner-box').hover(function(){
        clearInterval(timer)
        },function(){
            timer=setInterval(moveR,3500);
    })
    function moveR(){
        if( index >= arrImg.length ) index = 0;
        var next = index + 1;
        if( next > arrImg.length-1 ) next = 0;
        $(arrImg[index]).show();
        $(arrImg[next]).show();
        $(arrImg[next]).css('opacity', '0');
        // 用于调试轮播图动画效果
        $(arrImg[next]).animate({opacity:'0.8'}, 800);
        $(arrImg[index]).animate({opacity:'0'}, 800, function(){});   
        $('#cs-navigation li').eq(next).addClass('selected').siblings('li').removeClass('selected')   
        index++;
    }
    function moveL(){
        
        if( index < 0 ) index = arrImg.length-1;
        var next = index - 1;
        console.log(index,next)
        if( next < 0 ) next = arrImg.length-1;
        $(arrImg[index]).show();
        $(arrImg[next]).show();
        $(arrImg[next]).css('opacity', '0');
        // 用于调试轮播图动画效果
        $(arrImg[next]).animate({opacity:'0.8'}, 800);
        $(arrImg[index]).animate({opacity:'0'}, 800, function(){});
        $('#cs-navigation li').eq(next).addClass('selected').siblings('li').removeClass('selected')
        index = next;
    }
    $('#cs-navigation li').click(function(){
        index = $(this).index();
        $(arrImg).eq(index).show().siblings('div').hide();
        $(arrImg).eq(index).css({opacity:'0.8'}, 800).siblings('div').css({opacity:0}, 800);
        $('#cs-navigation li').eq(index).addClass('selected').siblings('li').removeClass('selected')
    });
    $('#left').click(function(){
        moveL();
    });
    $('#right').click(function(){
        // $(arrImg).stop();
        moveR();
    });
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
   /* Set swiper */
   var w = $(window).width();
   if(w>767){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 10
        });
    }
    else{
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 10
        }); 
    }
    /* to-Top */
    $('.scroll-to-top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
})
    /* 窗口改变事件 */
$(window).resize(function(event) {
     var h = $(window).height();  
     var w = $(window).width();
   $('.page-main').css('height',h);

});
    /* to-Top */
window.onscroll = function () {  
    var top = document.documentElement.scrollTop || document.body.scrollTop;  
    if(top>100){
        $('.scroll-to-top').show()
    }else{
       $('.scroll-to-top').hide() 
    }
}


