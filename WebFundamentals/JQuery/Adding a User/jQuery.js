$(document).ready(function()
{
    $("#button").click(function()
    {
        var first = $("input[name='fname']").val();
        var last = $("input[name='lname']").val();
        var email = $("input[name='email']").val();
        var contact = $("input[name='contact']").val();

        $('#table').append("<tr>" + "<td>" + first + "</td>" + "<td>" + last + "</td>" + "<td>" + email + "</td>" + "<td>" + contact + "</td>" + "</tr>");
    });
});
