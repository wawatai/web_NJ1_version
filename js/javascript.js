//swiper
$(function(){
    var swiper = new Swiper('.swiper', {
        loop: false,
        autoHeight: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    });
})

//topList
$(function(){
    $(".mainArea .topList>ul li").on("click",function(){

        if($(this).hasClass("inputBtn"))
        {
            $(".mainArea .topList .inputBox")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("typeBtn"))
        {
            $(".mainArea .topList .btnBox.type")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("partnerBtn"))
        {
            $(".mainArea .topList .btnBox.partner")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
})

//hamBtn
$(function(){
    $("header .hamBtn").on('click',function(){
        $("nav")
        .addClass("display");
    })

    $("nav .cancelBtn").on("click",function(){
        $("nav")
        .removeClass("display");
    })
})

//bannerRWD
$(function(){
    var w = $(window).innerWidth();

    if(w <= 650)
    {
        $(".mainArea .swiper img")
        .attr("src","./images/banner_rwd.jpg");
    }
    else {
        $(".mainArea .swiper img")
        .attr("src","./images/banner.png");
    }

    $(window).resize(function(){
        var w = $(window).innerWidth();

        if(w <= 650)
        {
            $(".mainArea .swiper img")
            .attr("src","./images/banner_rwd.jpg");
        }
        else {
            $(".mainArea .swiper img")
            .attr("src","./images/banner.png");
        }
    })
})

//label checkBox
$(function(){
    $(".loginWrap .remember").on("change",function(){
        $(this)
        .toggleClass("active");
    })
})