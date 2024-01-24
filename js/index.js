$(() => {
    $(".gitlink").hide();

    $(document).ready(function () {
        var subtitles = ["Hello! I'm Essam.", "Check out my projects below"];
        var typingSpeed = 80;

        function typeSubtitle(subtitle, targetDiv, callback) {

            var i = 0;
            $(targetDiv).addClass('typing-subtitle');

            function typeChar() {
                if (i < subtitle.length) {
                    $(targetDiv).append(subtitle.charAt(i));
                    i++;
                    setTimeout(typeChar, typingSpeed);
                }
                else if (callback) {
                    $(targetDiv).removeClass('typing-subtitle');
                    callback();
                }
                else {
                    $(targetDiv).addClass('typing-subtitle');
                    $(".gitlink").show(500);
                }
            }
            typeChar();
        }

        typeSubtitle(subtitles[0], '#sub', function () { typeSubtitle(subtitles[1], '#sub2'); });
    });
}); // jQuery