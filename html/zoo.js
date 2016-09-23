window.locked = false;

if (/chrome/i.test(window.navigator.userAgent)) {
    window.ua = "chrome";
    window.transitionevent = "webkitTransitionEnd";
    window.cssPref = "-webkit-";
} else if (/safari/i.test(window.navigator.userAgent)) {
    window.ua = "safari";
    window.transitionevent = "webkitTransitionEnd";
    window.cssPref = "-webkit-";
} else if (/firefox/i.test(window.navigator.userAgent)) {
    window.ua = "firefox";
    window.transitionevent = "transitionend";
    window.cssPref = "-moz-";
} else if (/msie/i.test(window.naviagor.userAgent)) {
    window.ua = "internet explorer";
    window.transitionevent = "transitionend";
    window.cssPref = "-ms-";
} else {
    window.ua = "opera";
    window.transitionevent = "oTransitionEnd";
    window.cssPref = "-webkit-";
}
if (/mobile/i.test(window.navigator.userAgent)) {
    // if (/ipad/i.test(window.navigator.userAgent)) {
    //     window.mobile = true;
    // } else {
        window.location = "http://suclubs.orgsync.com/org/zoo";
    // }
}

$(document).ready(function () {
    document.getElementById("left_panel_innertext").scrollLeft = 788;

    function goLeft () {
        if (!window.locked && ($("#leftarm").css("left") === "0px" || window.mobile)) {
            window.locked = true;
            $("#leftsecond").css("width", "100%");
            $("#menu_council").addClass("hovered");
            setTimeout(function () {
                document.title = "ZOO | Council";
                $("#center_panel").css(window.cssPref + "transform", "translateX(100%)");
                $("#left_panel").css(window.cssPref + "transform", "translateX(0%)");
                $("#leftreturn").css("width", "100%");
                $("#menu_leftreturn .innercircle").css("background", "#e9ba8f");
                setTimeout(function () {
                    $("#left_panel .canvas").css("border-color", "#E88730");
                    window.locked = false;
                });
            }, 1000);
        }
    }
    $("#menu_council").click(function () {
        $("#menu_council").addClass("hovered");
    });
    document.getElementById("leftarm").addEventListener(window.transitionevent, goLeft);
    $("#menu_leftreturn").click(function () {
        if (!window.locked) {
            window.locked = true;
            $("#leftreturn").css("width", 0);
            $("#left_panel .canvas").css("border-color", "rgba(0,0,0,0)");
            setTimeout(function () {
                document.title = "ZOO Engineering UofC";
                $("#menu_leftreturn .innercircle").css("background", "white");
                $("#left_panel").css(window.cssPref + "transform", "translateX(-100%)");
                $("#center_panel").css(window.cssPref + "transform", "translateX(0%)");
                $("#leftsecond").css("width", 0);
                setTimeout(function () {
                    $("#menu_council").removeClass("hovered");
                    window.locked = false;
                }, 1000);
            }, 1000);
        }
    });

    function goRight () {
        if (!window.locked && ($(".movingpartright").css("width") === "130px" || window.mobile)) {
            window.locked = true;
            $("#rightsecond").css("width", "100%");
            $("#menu_events").addClass("hovered");
            setTimeout(function () {
                document.title = "ZOO | Events";
                $("#center_panel").css(window.cssPref + "transform", "translateX(-100%)");
                $("#right_panel").css(window.cssPref + "transform", "translateX(0%)");
                $("#rightreturn").css("width", "100%");
                $("#menu_rightreturn .innercircle").css("background", "#e9ba8f");
                setTimeout(function () {
                    $("#right_panel .canvas").css("border-color", "#E88730");
                    window.locked = false;
                });
            }, 1000);
        }
    }
    $("#menu_events").click(function () {
        $("#menu_events").addClass("hovered");
    });
    document.getElementsByClassName("movingpartright")[0].addEventListener(window.transitionevent, goRight);
    $("#menu_rightreturn").click(function () {
        if (!window.locked) {
            window.locked = true;
            $("#rightreturn").css("width", 0);
            $("#right_panel .canvas").css("border-color", "rgba(0,0,0,0)");
            setTimeout(function () {
                document.title = "ZOO Engineering UofC";
                $("#menu_rightreturn .innercircle").css("background", "white");
                $("#right_panel").css(window.cssPref + "transform", "translateX(100%)");
                $("#center_panel").css(window.cssPref + "transform", "translateX(0%)");
                $("#rightsecond").css("width", 0);
                setTimeout(function () {
                    $("#menu_events").removeClass("hovered");
                    window.locked = false;
                }, 1000);
            }, 1000);
        }
    });

    function goDown () {
        if (!window.locked && ($(".movingpartdown").css("height") === "100px") || window.mobile) {
            window.locked = true;
            $("#downsecond").css("height", "100%");
            $("#menu_sponsers").addClass("hovered");
            setTimeout(function () {
                document.title = "ZOO | Sponsors";
                $("#center_panel").css(window.cssPref + "transform", "translateY(-100%)");
                $("#down_panel").css(window.cssPref + "transform", "translateY(0%)");
                $("#downreturn").css("height", "100%");
                $("#menu_downreturn .innercircle").css("background", "#e9ba8f");
                setTimeout(function () {
                    $("#down_panel .canvas").css("border-color", "#E88730");
                    window.locked = false;
                });
            }, 1000);
        }
    }
    $("#menu_sponsers").click(function () {
        $("#menu_sponsers").addClass("hovered");
    });
    document.getElementsByClassName("movingpartdown")[0].addEventListener(window.transitionevent, goDown);
    $("#menu_downreturn").click(function () {
        if (!window.locked) {
            window.locked = true;
            $("#downreturn").css("height", 0);
            $("#down_panel .canvas").css("border-color", "rgba(0,0,0,0)");
            setTimeout(function () {
                document.title = "ZOO Engineering UofC";
                $("#menu_downreturn .innercircle").css("background", "white");
                $("#down_panel").css(window.cssPref + "transform", "translateY(100%)");
                $("#center_panel").css(window.cssPref + "transform", "translateY(0%)");
                $("#downsecond").css("height", 0);
                setTimeout(function () {
                    $("#menu_sponsers").removeClass("hovered");
                    window.locked = false;
                }, 1000);
            }, 1000);
        }
    });

    function goUp () {
        if (!window.locked && ($(".movingpartup").css("width") === "140px") || window.mobile) {
            window.locked = true;
            $("#upsecond").css("height", "100%");
            $("#menu_about").addClass("hovered");
            setTimeout(function () {
                document.title = "ZOO | About";
                $("#center_panel").css(window.cssPref + "transform", "translateY(100%)");
                $("#up_panel").css(window.cssPref + "transform", "translateY(0%)");
                $("#upreturn").css("height", "100%");
                $("#menu_upreturn .innercircle").css("background", "#e9ba8f");
                setTimeout(function () {
                    $("#up_panel .canvas").css("border-color", "#E88730");
                    window.locked = false;
                });
            }, 1000);
        }
    }
    $("#menu_about").click(function () {
        $("#menu_about").addClass("hovered");
    });
    document.getElementsByClassName("movingpartup")[0].addEventListener(window.transitionevent, goUp);
    $("#menu_upreturn").click(function () {
        if (!window.locked) {
            window.locked = true;
            $("#upreturn").css("height", 0);
            $("#up_panel .canvas").css("border-color", "rgba(0,0,0,0)");
            setTimeout(function () {
                document.title = "ZOO Engineering UofC";
                $("#menu_upreturn .innercircle").css("background", "white");
                $("#up_panel").css(window.cssPref + "transform", "translateY(-100%)");
                $("#center_panel").css(window.cssPref + "transform", "translateY(0%)");
                $("#upsecond").css("height", 0);
                setTimeout(function () {
                    $("#menu_about").removeClass("hovered");
                    window.locked = false;
                }, 1000);
            }, 1000);
        }
    });
});
