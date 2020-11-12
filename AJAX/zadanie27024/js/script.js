
$(document).ready( function(){

    $('#button').click( function(){

        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            statusCode: {
                200: function() {
                    console.log(`OK - wszystko gra :)`);
                }
            },
            success: function(data) {
                
                $('body').append(`<br><br><div id="dane-programisty"> ${data} </div>`)
                console.log(data);

            },
            error: function(error) {
                console.error(error);
            },
        });
    });
});

