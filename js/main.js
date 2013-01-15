$(document).ready(function() {

    $('input[type=button]').click(function() {
        var that = $(this),
              thisButton = that.attr('value'),
              currSlide = $('.current'),
              currSlideNum = currSlide.attr('data-num'),
              inputs = $('.current input[type=text]'),
              slides = $('.cartPiece'),
              i = 0;

        if ( thisButton === 'Next' ) {

            for ( i; i < inputs.length; i++ ) {
                if ( $(inputs[i]).val() === '' ) {
                    alert('Please fill out all fields');
                    return false;
                }
            }

            if ( currSlideNum === 'first' ) {
                slides.addClass('hidden');
                currSlide.removeClass('current');
                $('.second').removeClass('hidden');
                $('.second').addClass('current')
                $('input[type=button]').removeClass('hidden');
                $('.steps p').html('Step 2 of 3');
            } else if ( currSlideNum === 'second' ) {
                that.addClass('hidden');
                slides.addClass('hidden');
                currSlide.removeClass('current');
                $('.third').removeClass('hidden');
                $('.third').addClass('current');
                $('.steps p').html('Step 3 of 3');
            }

        } else {
            if ( currSlideNum === 'third' ) {
                slides.addClass('hidden');
                currSlide.removeClass('current');
                $('.second').removeClass('hidden');
                $('.second').addClass('current');
                $('input[type=button]').removeClass('hidden');
                $('.steps p').html('Step 2 of 3');
            } else if ( currSlideNum === 'second' ) {
                that.addClass('hidden');
                slides.addClass('hidden');
                currSlide.removeClass('current');
                $('.first').removeClass('hidden');
                $('.first').addClass('current');
                $('.steps p').html('Step 1 of 3');
            }
        }

    });

    var customerInfo = {
        fName : '',
        lName : '',
        email : '',
        state : '',
        city : '',
        address : '',
        phone : '',
        class : '',
        promo : ''
    }

    $('input[type=text]').blur(function() {
        var inputs = $('input[type=text]'),
             output = $('.output'),
             i = 0;
        output.html('');
        for ( i; i < inputs.length; i++ ) {
            var thisInput = $(inputs[i]).attr('name'),
                 thisInputVal = $(inputs[i]).val();
            if ( thisInputVal !== '' ) {
                customerInfo[thisInput] = thisInputVal;
            }
        }

        for ( e in customerInfo ) {
            output.append('<p>' + e + ' : ' + customerInfo[e] + '</p>');
        }

    });

});