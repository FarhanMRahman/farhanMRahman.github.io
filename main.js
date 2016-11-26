function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    document.location.href = "mailto:farhan4839@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}