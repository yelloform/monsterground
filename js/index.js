$(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
                menu: '.main_menu',
                scrollingSpeed: 300,
                slidesNavigation: true,
                paddingTop: 0,
                paddingBottom: 0,
                onLeave: function(index, nextIndex, direction) {
                    var loadedSection = $(this);
                }
            });
            $('#pofol01, #pofol02, #pofol03, #pofol04, #pofol05, #pofol06, #pofol07, #pofol08, #pofol09').appendTo("body");


        });
