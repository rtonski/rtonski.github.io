$(document).ready(function () {

    $('#g-data1').click(function() {

        $.get('https://akademia108.pl/api/ajax/get-post.php')
            
            .done(function(data) {
                let jqBody = $('body');

                jqBody.append($(`<p>User ID: ${data.userId}<p>`));
                jqBody.append($(`<p>ID: ${data.id}<p>`));
                jqBody.append($(`<p>Title: ${data.title}<p>`));
                jqBody.append($(`<p>Body: ${data.body}<p>`));
            })
            
            .fail(function(error) {
                console.error(error)
            });

    });

    $('#g-data2').click(function() {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            
            .done(function(data) {
                let jqBody = $('body');

                jqBody.append($(`<p>User ID: ${data.userId}<p>`));
                jqBody.append($(`<p>ID: ${data.id}<p>`));
                jqBody.append($(`<p>Title: ${data.title}<p>`));
                jqBody.append($(`<p>Body: ${data.body}<p>`));
            })
            
            .fail(function(error) {
                console.error(error)
            });

    });
});