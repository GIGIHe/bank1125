$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
   
    $(".gxh .itm").each(function(index){
        $(this).on('touchstart',function(){
            $(this).addClass('hover').siblings('.itm').removeClass('hover')
        })
    })
    $('.navs a').click(function () {
        let index = $(this).index()
        $(this).addClass('on').siblings(".navs a").removeClass('on')
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        $(".kc_con").hide().stop().eq(index).fadeIn(500);
        $(".kc_navs .nav").removeClass('selected').eq(index).addClass('selected');
        return false;
        });
    $(".kc_navs .nav").each(function(index){
        $(this).click(function(){
            $(this).addClass('selected').siblings('.nav').removeClass('selected');
             $(".kc_con").hide().stop().eq(index).fadeIn(500);
        })
    })
})