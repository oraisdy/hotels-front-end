$(document).ready(function () {
    $input = $('.inputBar');

    $input.keydown(function (event) {
        if (event.which == 13) {
            window.location = '/keyword/' + $input.val();
        }
    });
});
