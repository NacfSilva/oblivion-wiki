$("section").hover(function () {
    $(this).addClass("hover");
    $(this).siblings().addClass("unhover");
}, function () {
    $(this).removeClass("hover");
    $(this).siblings().removeClass("unhover");
}
);

$("section").click(function () {
    $(this).addClass("click");
    $(this).children('div').delay(300).fadeIn(150);
    $(this).siblings().addClass("unclick");
    $(this).siblings().children("p").fadeOut(50);
});

$(".x").click(function (event) {
    event.stopPropagation();
    $("section").removeClass("click unclick");
    $("section").siblings().children('div').fadeOut(150);
    $("section").siblings().children('p').fadeIn(50);
});

$(document).keydown(function (e) {
    switch (e.which) {
        case 27:
            reset();
            break;
        case 49:
            open(1);
            break;
        case 50:
            open(2);
            break;
        case 51:
            open(3);
            break;
        case 52:
            open(4);
            break;
        default:
            return;
    }
    e.preventDefault();
});

function open(nr) {
    var t = $("section:nth-child(" + nr + ")");
    reset();
    t.toggleClass("click");
    t.children('div').delay(300).fadeToggle(300);
    t.siblings().toggleClass("unclick");
    t.siblings().children("p").fadeToggle(50);
}

function reset() {
    $("section").removeClass("click unclick");
    $("section").siblings().children('div').fadeOut(150);
    $("section").siblings().children('p').fadeIn(50);
}




// armor ==================================================================================================


$(window).ready(function () {

    var init = function () {
        popup();
    };

    var isDone = true;

    var popup = function () {
        var i = 0;
        var $items1 = $('#mini-carousel1 ul');
        var $linkClick= $('.mini-carousel ul li a');
        var $items2 = $('#mini-carousel2 ul');
        var $items3 = $('#mini-carousel3 ul');
        var $items4 = $('#mini-carousel4 ul');
        var $items5 = $('#mini-carousel5 ul');
        var $items6 = $('#mini-carousel6 ul');
        var $items7 = $('#mini-carousel7 ul');
        var $items8 = $('#mini-carousel8 ul');
        var $items9 = $('#mini-carousel9 ul');
        var $items10 = $('#mini-carousel10 ul');
        var $items11 = $('#mini-carousel11 ul');
        var $items12 = $('#mini-carousel12 ul');
        var $items13 = $('#mini-carousel13 ul');
        var $items14 = $('#mini-carousel14 ul');
        var $items15 = $('#mini-carousel15 ul');
        var $items16 = $('#mini-carousel16 ul');
        var $items17 = $('#mini-carousel17 ul');
        var $items18 = $('#mini-carousel18 ul');
        
        var open1 = true;
        var open2 = true; 
        var open3 = true; 
        var open4 = true; 
        var open5 = true; 
        var open6 = true; 
        var open7 = true; 
        var open8 = true;
        var open9 = true;
        var open10 = true;
        var open11 = true;
        var open12 = true;
        var open13 = true;
        var open14 = true;
        var open15 = true;
        var open16 = true;
        var open17 = true;
        var open18 = true;


        //click reader
        $('#btn-view1').on('click', function () {
            open1 = true;
            
            $linkClick = $('#mini-carousel1 ul li a');
            $('#quick-view-pop-up1').fadeToggle();
            $('#quick-view-pop-up1').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view2').on('click', function () {
            open2 = true;
            $linkClick = $('#mini-carousel2 ul li a');
            $('#quick-view-pop-up2').fadeToggle();
            $('#quick-view-pop-up2').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view3').on('click', function () {
            open3 = true;
            $linkClick = $('#mini-carousel3 ul li a');
            $('#quick-view-pop-up3').fadeToggle();
            $('#quick-view-pop-up3').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view4').on('click', function () {
            open4 = true;
            $linkClick = $('#mini-carousel4 ul li a');
            $('#quick-view-pop-up4').fadeToggle();
            $('#quick-view-pop-up4').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view5').on('click', function () {
            open5 = true;
            $linkClick = $('#mini-carousel5 ul li a');
            $('#quick-view-pop-up5').fadeToggle();
            $('#quick-view-pop-up5').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view6').on('click', function () {
            open6 = true;
            $linkClick = $('#mini-carousel6 ul li a');
            $('#quick-view-pop-up6').fadeToggle();
            $('#quick-view-pop-up6').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view7').on('click', function () {
            open7 = true;
            $linkClick = $('#mini-carousel7 ul li a');
            $('#quick-view-pop-up7').fadeToggle();
            $('#quick-view-pop-up7').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view8').on('click', function () {
            open8 = true;
            $linkClick = $('#mini-carousel8 ul li a');
            $('#quick-view-pop-up8').fadeToggle();
            $('#quick-view-pop-up8').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view9').on('click', function () {
            open0 = true;
            $linkClick = $('#mini-carousel9 ul li a');
            $('#quick-view-pop-up9').fadeToggle();
            $('#quick-view-pop-up9').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view10').on('click', function () {
            open10 = true;
            $linkClick = $('#mini-carousel10 ul li a');
            $('#quick-view-pop-up10').fadeToggle();
            $('#quick-view-pop-up10').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view11').on('click', function () {
            open11 = true;
            $linkClick = $('#mini-carousel11 ul li a');
            $('#quick-view-pop-up11').fadeToggle();
            $('#quick-view-pop-up11').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view12').on('click', function () {
            open12 = true;
            $linkClick = $('#mini-carousel12 ul li a');
            $('#quick-view-pop-up12').fadeToggle();
            $('#quick-view-pop-up12').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view13').on('click', function () {
            open13 = true;
            $linkClick = $('#mini-carousel13 ul li a');
            $('#quick-view-pop-up13').fadeToggle();
            $('#quick-view-pop-up13').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view14').on('click', function () {
            open14 = true;
            $linkClick = $('#mini-carousel14 ul li a');
            $('#quick-view-pop-up14').fadeToggle();
            $('#quick-view-pop-up14').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view15').on('click', function () {
            open15 = true;
            $linkClick = $('#mini-carousel15 ul li a');
            $('#quick-view-pop-up15').fadeToggle();
            $('#quick-view-pop-up15').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view16').on('click', function () {
            open16 = true;
            $linkClick = $('#mini-carousel16 ul li a');
            $('#quick-view-pop-up16').fadeToggle();
            $('#quick-view-pop-up16').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view17').on('click', function () {
            open17 = true;
            $linkClick = $('#mini-carousel17 ul li a');
            $('#quick-view-pop-up17').fadeToggle();
            $('#quick-view-pop-up17').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        $('#btn-view18').on('click', function () {
            open18 = true;
            $linkClick = $('#mini-carousel18 ul li a');
            $('#quick-view-pop-up18').fadeToggle();
            $('#quick-view-pop-up18').css({ "top": "34px", "left": "314px" });
            $('.mask').fadeToggle();
        });

        //logic after click

        if (open1 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up1').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up1').fadeOut();
            });

            $('#prev1').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items1.position().top === 0) {
                    $items1.css({ 'top': '-125px' });
                    $items1.children('li').last().prependTo($items1);
                }
                isDone = false;
                $items1.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large1 ul li').last().prependTo($('#image-large1 ul'));
            });

            $('#next1').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items1.position().top === 0) {
                    $items1.css({ 'top': '125px' });
                    $items1.children('li').first().appendTo($items1);
                }
                isDone = false;
                $('#mini-carousel1 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large1 ul li').first().appendTo($('#image-large1 ul'));
            });
        }

        if (open2==true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up2').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up2').fadeOut();
            });

            $('#prev2').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items2.position().top === 0) {
                    $items2.css({ 'top': '-125px' });
                    $items2.children('li').last().prependTo($items2);
                }
                isDone = false;
                $items2.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large2 ul li').last().prependTo($('#image-large2 ul'));
            });

            $('#next2').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items2.position().top === 0) {
                    $items2.css({ 'top': '125px' });
                    $items2.children('li').first().appendTo($items2);
                }
                isDone = false;
                if (open1 == true) {
                    $('.mask').on('click', function () {
                        $('.mask').fadeOut();
                        $('#quick-view-pop-up1').fadeOut();
                    });
                    $('.quick-view-close').on('click', function () {
                        $('.mask').fadeOut();
                        $('#quick-view-pop-up1').fadeOut();
                    });

                    $('#prev1').on('click', function () {
                        //animate on UL element of small image on the left
                        if (!isDone) return;
                        if ($items1.position().top === 0) {
                            $items1.css({ 'top': '-125px' });
                            $items1.children('li').last().prependTo($items1);
                        }
                        isDone = false;
                        $items1.animate({
                            top: "+=125px"
                        }, 200, function () {
                            isDone = true;
                        });
                        $('#image-large1 ul li').last().prependTo($('#image-large1 ul'));
                    });

                    $('#next1').on('click', function () {
                        //animate on UL element of class 'mini-carousel'
                        if (!isDone) return;

                        if ($items1.position().top === 0) {
                            $items1.css({ 'top': '125px' });
                            $items1.children('li').first().appendTo($items1);
                        }
                        isDone = false;
                        $('#mini-carousel1 ul').animate({
                            top: "-=125px"
                        }, 300, function () {
                            isDone = true;
                        });
                        $('#image-large1 ul li').first().appendTo($('#image-large1 ul'));
                    });
                }                $('#mini-carousel2 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large2 ul li').first().appendTo($('#image-large2 ul'));
            });
        }



        if (open3 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up3').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up3').fadeOut();
            });

            $('#prev3').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items3.position().top === 0) {
                    $items3.css({ 'top': '-125px' });
                    $items3.children('li').last().prependTo($items3);
                }
                isDone = false;
                $items3.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large3 ul li').last().prependTo($('#image-large3 ul'));
            });

            $('#next3').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items3.position().top === 0) {
                    $items3.css({ 'top': '125px' });
                    $items3.children('li').first().appendTo($items3);
                }
                isDone = false;
                $('#mini-carousel3 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large3 ul li').first().appendTo($('#image-large3 ul'));
            });
        }



        if (open4 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up4').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up4').fadeOut();
            });

            $('#prev4').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items4.position().top === 0) {
                    $items4.css({ 'top': '-125px' });
                    $items4.children('li').last().prependTo($items4);
                }
                isDone = false;
                $items4.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large4 ul li').last().prependTo($('#image-large4 ul'));
            });

            $('#next4').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items4.position().top === 0) {
                    $items4.css({ 'top': '125px' });
                    $items4.children('li').first().appendTo($items4);
                }
                isDone = false;
                $('#mini-carousel4 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large4 ul li').first().appendTo($('#image-large4 ul'));
            });
        }

 
        if (open5 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up5').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up5').fadeOut();
            });

            $('#prev5').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items5.position().top === 0) {
                    $items5.css({ 'top': '-125px' });
                    $items5.children('li').last().prependTo($items5);
                }
                isDone = false;
                $items5.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large5 ul li').last().prependTo($('#image-large5 ul'));
            });

            $('#next5').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items5.position().top === 0) {
                    $items5.css({ 'top': '125px' });
                    $items5.children('li').first().appendTo($items5);
                }
                isDone = false;
                $('#mini-carousel5 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large5 ul li').first().appendTo($('#image-large5 ul'));
            });
        }



        if (open6 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up6').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up6').fadeOut();
            });

            $('#prev6').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items6.position().top === 0) {
                    $items6.css({ 'top': '-125px' });
                    $items6.children('li').last().prependTo($items6);
                }
                isDone = false;
                $items6.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large6 ul li').last().prependTo($('#image-large6 ul'));
            });

            $('#next6').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items6.position().top === 0) {
                    $items6.css({ 'top': '125px' });
                    $items6.children('li').first().appendTo($items6);
                }
                isDone = false;
                $('#mini-carousel6 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large6 ul li').first().appendTo($('#image-large6 ul'));
            });
        }




        if (open7 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up7').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up7').fadeOut();
            });

            $('#prev7').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items7.position().top === 0) {
                    $items7.css({ 'top': '-125px' });
                    $items7.children('li').last().prependTo($items7);
                }
                isDone = false;
                $items7.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large7 ul li').last().prependTo($('#image-large7 ul'));
            });

            $('#next7').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items7.position().top === 0) {
                    $items7.css({ 'top': '125px' });
                    $items7.children('li').first().appendTo($items7);
                }
                isDone = false;
                $('#mini-carousel7 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large7 ul li').first().appendTo($('#image-large7 ul'));
            });
        }



        if (open8 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up8').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up8').fadeOut();
            });

            $('#prev8').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items8.position().top === 0) {
                    $items8.css({ 'top': '-125px' });
                    $items8.children('li').last().prependTo($items8);
                }
                isDone = false;
                $items8.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large8 ul li').last().prependTo($('#image-large8 ul'));
            });

            $('#next8').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items8.position().top === 0) {
                    $items8.css({ 'top': '125px' });
                    $items8.children('li').first().appendTo($items8);
                }
                isDone = false;
                $('#mini-carousel8 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large8 ul li').first().appendTo($('#image-large8 ul'));
            });
        }



        if (open9 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up9').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up9').fadeOut();
            });

            $('#prev9').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items9.position().top === 0) {
                    $items9.css({ 'top': '-125px' });
                    $items9.children('li').last().prependTo($items8);
                }
                isDone = false;
                $items9.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large9 ul li').last().prependTo($('#image-large9 ul'));
            });

            $('#next9').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items9.position().top === 0) {
                    $items9.css({ 'top': '125px' });
                    $items9.children('li').first().appendTo($items9);
                }
                isDone = false;
                $('#mini-carousel9 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large9 ul li').first().appendTo($('#image-large9 ul'));
            });
        }



        if (open10 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up10').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up10').fadeOut();
            });

            $('#prev10').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items10.position().top === 0) {
                    $items10.css({ 'top': '-125px' });
                    $items10.children('li').last().prependTo($items10);
                }
                isDone = false;
                $items10.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large10 ul li').last().prependTo($('#image-large10 ul'));
            });

            $('#next10').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items10.position().top === 0) {
                    $items10.css({ 'top': '125px' });
                    $items10.children('li').first().appendTo($items10);
                }
                isDone = false;
                $('#mini-carousel10 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large10 ul li').first().appendTo($('#image-large10 ul'));
            });
        }



        if (open11 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up11').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up11').fadeOut();
            });

            $('#prev11').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items11.position().top === 0) {
                    $items11.css({ 'top': '-125px' });
                    $items11.children('li').last().prependTo($items11);
                }
                isDone = false;
                $items11.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large11 ul li').last().prependTo($('#image-large11 ul'));
            });

            $('#next11').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items11.position().top === 0) {
                    $items11.css({ 'top': '125px' });
                    $items11.children('li').first().appendTo($items11);
                }
                isDone = false;
                $('#mini-carousel11 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large11 ul li').first().appendTo($('#image-large11 ul'));
            });
        }



        if (open12 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up12').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up12').fadeOut();
            });

            $('#prev12').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items12.position().top === 0) {
                    $items12.css({ 'top': '-125px' });
                    $items12.children('li').last().prependTo($items12);
                }
                isDone = false;
                $items12.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large12 ul li').last().prependTo($('#image-large12 ul'));
            });

            $('#next12').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items12.position().top === 0) {
                    $items12.css({ 'top': '125px' });
                    $items12.children('li').first().appendTo($items12);
                }
                isDone = false;
                $('#mini-carousel12 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large12 ul li').first().appendTo($('#image-large12 ul'));
            });
        }



        if (open13 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up13').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up13').fadeOut();
            });

            $('#prev13').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items13.position().top === 0) {
                    $items13.css({ 'top': '-125px' });
                    $items13.children('li').last().prependTo($items13);
                }
                isDone = false;
                $items13.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large13 ul li').last().prependTo($('#image-large13 ul'));
            });

            $('#next13').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items13.position().top === 0) {
                    $items13.css({ 'top': '125px' });
                    $items13.children('li').first().appendTo($items13);
                }
                isDone = false;
                $('#mini-carousel13 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large13 ul li').first().appendTo($('#image-large13 ul'));
            });
        }



        if (open14 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up14').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up14').fadeOut();
            });

            $('#prev14').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items14.position().top === 0) {
                    $items14.css({ 'top': '-125px' });
                    $items14.children('li').last().prependTo($items14);
                }
                isDone = false;
                $items14.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large14 ul li').last().prependTo($('#image-large14 ul'));
            });

            $('#next14').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items14.position().top === 0) {
                    $items14.css({ 'top': '125px' });
                    $items14.children('li').first().appendTo($items14);
                }
                isDone = false;
                $('#mini-carousel14 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large14 ul li').first().appendTo($('#image-large14 ul'));
            });
        }



        if (open15 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up15').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up15').fadeOut();
            });

            $('#prev15').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items15.position().top === 0) {
                    $items15.css({ 'top': '-125px' });
                    $items15.children('li').last().prependTo($items15);
                }
                isDone = false;
                $items15.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large15 ul li').last().prependTo($('#image-large15 ul'));
            });

            $('#next15').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items15.position().top === 0) {
                    $items15.css({ 'top': '125px' });
                    $items15.children('li').first().appendTo($items15);
                }
                isDone = false;
                $('#mini-carousel15 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large15 ul li').first().appendTo($('#image-large15 ul'));
            });
        }


        if (open16 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up16').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up16').fadeOut();
            });

            $('#prev16').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items16.position().top === 0) {
                    $items16.css({ 'top': '-125px' });
                    $items16.children('li').last().prependTo($items16);
                }
                isDone = false;
                $items16.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large16 ul li').last().prependTo($('#image-large16 ul'));
            });

            $('#next16').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items16.position().top === 0) {
                    $items16.css({ 'top': '125px' });
                    $items16.children('li').first().appendTo($items16);
                }
                isDone = false;
                $('#mini-carousel16 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large16 ul li').first().appendTo($('#image-large16 ul'));
            });
        }


        if (open17 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up17').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up17').fadeOut();
            });

            $('#prev17').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items17.position().top === 0) {
                    $items17.css({ 'top': '-125px' });
                    $items17.children('li').last().prependTo($items17);
                }
                isDone = false;
                $items17.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large17 ul li').last().prependTo($('#image-large17 ul'));
            });

            $('#next17').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items17.position().top === 0) {
                    $items17.css({ 'top': '125px' });
                    $items17.children('li').first().appendTo($items17);
                }
                isDone = false;
                $('#mini-carousel17 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large17 ul li').first().appendTo($('#image-large17 ul'));
            });
        }


        if (open18 == true) {
            $('.mask').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up18').fadeOut();
            });
            $('.quick-view-close').on('click', function () {
                $('.mask').fadeOut();
                $('#quick-view-pop-up18').fadeOut();
            });

            $('#prev18').on('click', function () {
                //animate on UL element of small image on the left
                if (!isDone) return;
                if ($items18.position().top === 0) {
                    $items18.css({ 'top': '-125px' });
                    $items18.children('li').last().prependTo($items18);
                }
                isDone = false;
                $items18.animate({
                    top: "+=125px"
                }, 200, function () {
                    isDone = true;
                });
                $('#image-large18 ul li').last().prependTo($('#image-large18 ul'));
            });

            $('#next18').on('click', function () {
                //animate on UL element of class 'mini-carousel'
                if (!isDone) return;

                if ($items18.position().top === 0) {
                    $items18.css({ 'top': '125px' });
                    $items18.children('li').first().appendTo($items18);
                }
                isDone = false;
                $('#mini-carousel18 ul').animate({
                    top: "-=125px"
                }, 300, function () {
                    isDone = true;
                });
                $('#image-large18 ul li').first().appendTo($('#image-large18 ul'));
            });
        }


        };
    
    init();
});


// end Armor
//Companions =================================================================================================================


// this works with or without this javascript	
$(document).ready(function () {
    $('.zoom-image').hover(function () {
        $(this).siblings('.zoom-image').css('z-index', 10);
        $(this).css('z-index', 99);
    })
})


//end companions ============================================================================================================