//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close').click(function(){
        $('.filter')
        .removeClass('display');
    })
    
    $(".agentSignup").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.agRegist').addClass('display');
    })

    //同意條款checkbox
    $(".agRegist .btnBox .readBtn").click(function(){
        $(this).toggleClass('active');    
    })
    $(".agRegist .btnBox .openAGterms").click(function(){
        $('.agTerms').addClass('display');
        $(".agRegist").addClass("darkness");
    })
    $(".closeTerms,.close_ic.back").click(function(){
        $(".filter").addClass("display");
        $('.agTerms').removeClass('display');
        $(".agRegist").removeClass("darkness");
    })
    //申請已送出，審查中
    $(".agRegist .applycheck").click(function(){
        $('.agApply').addClass('display');
        $(".agRegist").removeClass('display');
    })
})

function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

function loading(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loading').addClass('display');

    setTimeout(function(){
        $(".filter")
        .removeClass("display");
    },2000);
}

//退傭代理QA-leftArea
$(function(){
	$(".qaOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 200){
            $(".leftArea li:eq(0)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 900){
            $(".leftArea li:eq(2)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 200){
            $(".leftArea li:eq(1)")
            .addClass("active")
            .siblings().removeClass("active");
        }
	})
})
//退傭代理Rule-leftArea
$(function(){
	$(".ruleOutter").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 100){
            $(".leftArea li:nth-of-type(1)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 6000){
            $(".leftArea li:nth-of-type(11)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5600){
            $(".leftArea li:nth-of-type(10)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5500){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5400){
            $(".leftArea li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".leftArea li:nth-of-type(8)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 4600){
            $(".leftArea li:nth-of-type(7)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 3400){
            $(".leftArea li:nth-of-type(6)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 2200){
            $(".leftArea li:nth-of-type(5)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 1300){
            $(".leftArea li:nth-of-type(4)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 800){
            $(".leftArea li:nth-of-type(3)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 100){
            $(".leftArea li:nth-of-type(2)")
            .addClass("active")
            .siblings().removeClass("active");
        }

        console.log(scrollVal);
	})
})

//點擊滑動至指定位
$(function(){
    $('.agQA .leftArea li').click(function(){
        var n = $(this).index();
        var target = $(".contentBlock:eq("+ n +") .tiTle").offset().top;
        var ori = $(".qaOutter").offset().top;
        var scrollVal = $(".qaOutter").scrollTop();

        $(".qaOutter").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });
})
$(function(){
    $('.agRule .leftArea li').click(function(){
        var n = $(this).index();
        var target = $(".contentBlock:eq("+ n +") .subTitle").offset().top;
        var ori = $(".ruleOutter").offset().top;
        var scrollVal = $(".ruleOutter").scrollTop();

        $(".ruleOutter").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });
})


//退傭代理同意按鈕
$(function(){
    $('.filter .agRegist.readBtn').click(function(){
        $('.filter .agRegist.readBtn::before').addClass('dispaly');
    });
})