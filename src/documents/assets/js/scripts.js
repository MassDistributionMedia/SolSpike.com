/*
    Countdown initializer
*/
$(function() {
    var now = new Date();
    var countTo = 19 * 24 * 60 * 60 * 1000 + now.valueOf();
    $('.timer').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });
});


/*
    Show latest tweet
*/
jQuery(function($) {
    $(".show-tweets").tweet({
        username: "SolX2010",
        join_text: "auto",
        count: 1,
        loading_text: "loading tweet...",
        template: "{time} {text}"
    });
});


/*
    Progress bar
*/
var percentage = $('.progress .bar').attr("data-percentage");
$('.progress .bar').animate({width: (percentage)+'%'}, 1000);


/*
    Show/hide button (top of page)

jQuery(document).ready(function() {

    $('.show-hide a').tooltip();

    $('.show-hide a').click(function(e) {
        e.preventDefault();
        var isHidden = $('.show-hide a').html();
        if(isHidden == '+') {
            $('.progress').slideDown('slow');
            $('.footer').slideDown('slow');
            $('.show-hide a').html('-');
            $('.show-hide a').attr('data-original-title', 'Hide footer');
            $('.show-hide a').tooltip('hide');
        }
        if(isHidden == '-') {
            $('.progress').slideUp('slow');
            $('.footer').slideUp('slow');
            // adjust slider size
            if($(window).width() >= 980) {
                $('ul#supersized li a img').css('width', '100%');
            }
            // adjust gridrotator size
            if($(window).width() > 1024) {
                $('#ri-grid ul li').css('width', 100/8 + '%');
            }
            if($(window).width() <= 1024) {
                $('#ri-grid ul li').css('width', 100/6 + '%');
            }
            if($(window).width() <= 768) {
                $('#ri-grid ul li').css('width', 100/5 + '%');
            }
            if($(window).width() <= 480) {
                $('#ri-grid ul li').css('width', 100/4 + '%');
            }
            if($(window).width() <= 320) {
                $('#ri-grid ul li').css('width', 100/2 + '%');
            }
            if($(window).width() <= 240) {
                $('#ri-grid ul li').css('width', 100/1 + '%');
            }
            $('#ri-grid ul li a').css('width', '100%');

            $('.show-hide a').html('+');
            $('.show-hide a').attr('data-original-title', 'Show footer');
            $('.show-hide a').tooltip('hide');
        }
    });
});
*/


//    Subscription form

jQuery(document).ready(function() {

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscription-form form').submit(function() {
        var postdata = $('.subscription-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.progress').css('margin', '10px 0 0 0');
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscription-form form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 133){
            $(".close-header, .fixed-logo").removeClass('hide').addClass('block');
          } else {
            $(".close-header, .fixed-logo").removeClass('block').addClass("hide");
          }

        if($(this).scrollTop() === 0){
            $(".navbar").css('display', 'block');
        }
    });

            $(".close-header").click(function() {
                $(".navbar").toggle();
    });

    $("#percentage-popo, #site_info-popo,#chimp-popo, #mdm-popo, #tweet-popo, #github-popo, #timer-popo, #sunglass-popo, #titanium-popo, #n-popo, #cheap-popo, #moving-popo, #cube-popo, #lite-popo").popover();
    $(".fork-me").hover(function(){
        $("#github-popo").popover('show');
    }, 
    function(){
        $("#github-popo").popover('hide');
    });

});
