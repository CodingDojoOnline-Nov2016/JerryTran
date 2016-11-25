$(document).ready(function()
{
    $("form").submit(function(e)
    {
        e.preventDefault()

        var fields = {
            "firstName": $("#first-name").val(),
            "lastName": $("#last-name").val(),
            "description": $("#description").val()
        }
        var $ele = $('<div></div>')
        $ele.html("<h2>" + fields.firstName + " " + fields.lastName + "</h2><p>" + fields.description + "</p>")
        $('.cards').append($ele)
    });

    $("div.cards").on("click", "h2", function()
    {
        $(this).siblings().toggle();
    })
});
