;(function($){
    var portFolio = {
        btn:0,


        init:function(){
            var that = this;
            
            that.mobileBarFn();
            that.headerFn();
            that.sectionPop();
            that.section0Fn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.footerFn();
            that.upupFn();
        },

        mobileBarFn:function(){
        },

        headerFn:function(){
            var $window         = $(window);
            var $mainBtn        = $('#header .main-btn');
            var $mobileBtn      = $('#wrap .mobile-btn');
            var $header         = $('#header');
            var $subBtn         = $('#header .sub-btn');
            var $subSubBtn      = $('#header .sub-sub-btn');
            var $sub            = $('#header .sub');
            var $subSub         = $('#header .sub-sub');  
            var $mainUl         = $('#nav > ul');
            var $bar            = $('.bar ')
            var $nav            = $('#nav');

            var $subBack        = $('#header .sub-back');
            var $subSubBack     = $('#header .sub-sub-back');            
            var mobileBtnClick = 0;

           
                function deskTopFn(){
                    // console.log('데스크 탑');
                    // 데스크탑 초기화
                    if( mobileBtnClick == 1 ){
                        mobileBtnClick = 0;
                        $bar.removeClass('addClick');
                    }
                    $header.stop().show();
                    $sub.stop().fadeOut(0);
                    $subSub.stop().fadeOut(0);
                    $subBack.stop().hide();
                    $subSubBack.stop().hide();
                }
                
                function mobileFn(){
                    // console.log('모바일');
                    // 모바일 초기화
                    $header.stop().hide();
                    $sub.stop().hide();
                    $subSub.stop().show();
                    $subBack.stop().hide();
                    $subSubBack.stop().hide();
                }

                function resizeFn(){
                    if( $window.innerWidth() > 1200 ){
                        deskTopFn();
                    }
                    else{
                        mobileFn();
                    }
                }

                $window.resize(function(){
                    resizeFn();
                })
                resizeFn();

                //네비게이션 메뉴 마우스 떠나면
                $nav.on({
                    mouseleave:function(){
                        $sub.stop().fadeOut(0);
                        $subSub.stop().fadeOut(0);
                        $subBack.stop().hide();
                        $subSubBack.stop().hide();
                    }
                });
                
                
                //데스크탑 메인메뉴 버튼
                $mainBtn.on({
                    mouseenter:function(){
                        if( $window.innerWidth() > 1200){
                            $sub.stop().fadeOut(300);
                            $subSub.stop().fadeOut(10);
                            $(this).next().stop().fadeIn(300);
                            $subBack.stop().fadeIn(300);
                            $subBack.stop().animate({opacity:.92},200);
                        }
                    }
                });

                //데스크탑 서브메뉴 버튼
                //$subBtn
                $subBtn.on({
                    mouseenter:function(){
                        if( $window.innerWidth() > 1200){
                            $subSub.stop().fadeOut(300);
                            $(this).next().stop().fadeIn(300);
                            $subSubBack.stop().fadeIn(300);
                            $subBack.css({opacity:1});
                            $subSubBack.stop().animate({opacity:.92},200);
                        }
                    }
                });   

                //$subSubBtn
                $subSubBtn.on({
                    mouseenter:function(){
                        if( $window.innerWidth() > 1200){
                            $subSubBack.stop().animate({opacity:1},200);
                        }
                    }
                });  



               



                //모바일 메인메뉴 버튼
                $mainBtn.on({
                    click:function(){
                        if( $window.innerWidth() <= 1200){

                            $sub.stop().slideUp(300);
                            $(this).next().stop().slideToggle(300); 

                        }
                    }
                });      
                
                $subBtn.on({
                    click:function(){
                        if(window.innerWidth() <= 1200){
                            $subSub.stop().slideUp(0);
                            $(this).next.stop().slideToggle(300);
                        }
                    }
                });



                //햄버거 버튼
                $mobileBtn.on({
                    click:function(){
                        if( mobileBtnClick==0 ){
                            mobileBtnClick=1;
                            $header.show();
                            $bar.addClass('addClick');
                        }
                        else{
                            mobileBtnClick=0;
                            $header.hide();
                            $bar.removeClass('addClick');
                        }                        
                    }
                });


        },

        section0Fn:function(){ 

            $('#section0 .background').addClass('addShow');
            



        },
        sectionPop:function(){


        },
        section1Fn:function(){
            var t = 0;
            var $1Ul = $('#section1 .section1-gap .img-box-wrap > ul');
            var $img = $('#section1 .img-box');
            var img0 = null;
            var img1 = null;
            var img2 = null;
            var img3 = null;
            var img4 = null;
            var img5 = null;
            var img6 = null;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section1').offset().top-500){
                    if(t==0){
                        t=1;
                        img0= setTimeout(function(){
                            $img.eq(0).addClass('addScale');
                        },100);
                        img1= setTimeout(function(){
                            $img.eq(1).addClass('addScale');
                        },300);
                        img2= setTimeout(function(){
                            $img.eq(2).addClass('addScale');
                        },500);
                        img3= setTimeout(function(){
                            $img.eq(3).addClass('addScale');
                        },700);
                        img4= setTimeout(function(){
                            $img.eq(4).addClass('addScale');
                        },900);
                        img5= setTimeout(function(){
                            $img.eq(5).addClass('addScale');
                        },1100);
                        img6= setTimeout(function(){
                            $img.eq(6).addClass('addScale');
                        },1300);
                        
                    }
                }
                
                if($(window).scrollTop() ==0){
                    t=0;
                    $1Ul.removeClass('addScale');
                }
            });
        },
        section2Fn:function(){
            var t = 0;
            var $sec2Gap = $('#section2 .section2-gap');
            var $2Div = $('#section2 .content-wrap');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top-500){
                    if(t==0){
                        t=1;
                        $sec2Gap.addClass('add2Show');
                        setTimeout(formatFn,100);
                    }
                }
                if($(window).scrollTop() ==0){
                    t=0;
                    $sec2Gap.removeClass('add2Show');
                }
            });

        },
        section3Fn:function(){
            var t = 0;
            var $sec3Gap = $('#section3 .section3-gap');
            var $3Ul = $('#section3 > ul');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top-500){
                    if(t==0){
                        t=1;
                        $sec3Gap.addClass('add3Show');
                        setTimeout(formatFn,100);
                    }
                }
                
                if($(window).scrollTop() ==0){
                    t=0;
                    $sec3Gap.removeClass('add3Show');
                }
            });
            function formatFn(){
                $3Ul.css({top:0});
            }
            setTimeout(formatFn,200);


        },
        section4Fn:function(){        
            var t = 0;
            var $4Ul = $('#section4 .info-box-wrap > ul');
            var $infoBox = $('#section4 .info-box-wrap > ul > li');
            var info0 = null;
            var info1 = null;
            var info2 = null;
            var info3 = null;


            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top-600){
                    if(t==0){
                        t=1;
                        info0= setTimeout(function(){
                            $infoBox.eq(0).addClass('addToRight');
                        },300);
                        info1= setTimeout(function(){
                            $infoBox.eq(1).addClass('addToRight');
                        },600);
                        info2= setTimeout(function(){
                            $infoBox.eq(2).addClass('addToRight');
                        },900);
                        info3= setTimeout(function(){
                            $infoBox.eq(3).addClass('addToRight');
                        },1200);

                    
                    }
                }
                else if($(window).scrollTop() ==0){
                    t=0;
                    $infoBox.removeClass('addToRight');
                    // $infoBoxGap1.removeClass('addToRight');
                    // $infoBoxGap2.removeClass('addToRight');
                    // $infoBoxGap3.removeClass('addToRight');
                }
            });



        },
        section5Fn:function(){

            //스크롤 이벤트 //인물사진 하나씩 차례로 등장, 아래서 위로 퐁퐁퐁


        },
        section6Fn:function(){


            //스크롤이벤트//사진만 내리면 등장. //

            //가운데 사진 마우스무브 
            var $sec6Img            = $('#section6 .section6-img');
            var left                = 0;
            var bottom              = 0;
              
            $('#section6').on({
                mousemove:function(event){
                    left = -(event.pageX-$sec6Img.offset().left)*.03;
                    bottom = -(event.pageY-$sec6Img.offset().bottom)*.03;

                    $sec6Img.css({bottom:bottom,left:left});
                }
            })


        },
        section7Fn:function(){

            //슬라이드
            var $slideView              = $('#section7 .slide-view');
            var $slideWrap              = $('#section7 .slide-wrap');
            var cnt                     = 0;
            var setId                   = null;
            var setId2                  = null;

            //1.메인슬라이드함수
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-292*cnt}, 300, 'easeInOutSine', function(){
                    if(cnt>3){cnt=0}
                    else if(cnt<0){cnt=3}
                    $slideWrap.stop().animate({left:-292*cnt},0);
                });
            }
            //2.카운트함수 
            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();

            }
            function prevSlideCountFn(){
                cnt--;
                mainslideFn();

            }
            //3.버튼등록
            //4.스와이프이벤트등록
            // $slideView.swipe({
            //     swipeLeft:function(){
            //         if(!$slideWrap.is(':animated'))
            //         {   timerFn();
            //             nextSlideCountFn();  
            //         }
            //     },
            //     swipeRight:function(){
            //         if(!$slideWrap.is(':animated'))
            //         {
            //             timerFn();
            //             prevSlideCountFn();
            //         }
            //     }
            // });

            //5.오토플레이함수
            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,3000);
            }
            setTimeout(autoPlayFn,100);
            //6.타이머함수
            function timerFn(){
               var t=0;
                clearInterval(setId);
                clearInterval(setId2);

                setId2 = setInterval(function(){
                    t++;
                    if(t=4){
                        t=0;
                    clearInterval(setId);
                    clearInterval(setId2);
                    nextSlideFn();
                    autoPlayFn();
                    }
                },1000);
            }

        },
        footerFn:function(){
            
            //없음

        },
        upupFn:function(){
            var t = 0;
            var $upup = $('#upup');
            var show = null;
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section1').offset().top-500){
                    if(t==0){
                        t=1;
                        show= setTimeout(function(){
                            $upup.stop().fadeIn(500);
                        });
                       
                    }
                }
                
                if($(window).scrollTop() == 500){
                    t=0;
                    $upup.stop().fadeOut(300);
                }
            });

        }
    }
    portFolio.init();
})(jQuery);