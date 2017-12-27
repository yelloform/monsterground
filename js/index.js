$(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
                menu: '.main_menu',
                scrollingSpeed: 300,
                slidesNavigation: true,
                paddingTop: 0,
                paddingBottom: 0,
                scrollOverflow:true,
                afterLoad: function(anchorLink, index){
                    var loadedSection = $(this);

                    if(index == 1){
                      $('.title-wrap h2').hide();

                    }
                    if(index == 2){
                        $('.title-wrap h2').show();
                      TweenLite.from('.title-wrap h2',1,{opacity:1, top:"-20px", delay:0.5 })

                    }


                },
                onLeave: function(index, nextIndex, direction) {
                    var loadedSection = $(this);
                }
            });
            $('#pofol01').appendTo("body");
            $('#pofol02').appendTo("body");
            $('#pofol03').appendTo("body");
            $('#pofol04').appendTo("body");
            $('#pofol05').appendTo("body");
            $('#pofol06').appendTo("body");
            $('#pofol07').appendTo("body");
            $('#pofol08').appendTo("body");
            $('#pofol09').appendTo("body");
            $('#pofol10').appendTo("body");
        });
