
var prevScroll = window.scrollY;

window.onscroll = function()
{
    var currentScroll = window.scrollY;

    if (prevScroll > currentScroll)
    {
        document.querySelector(".main-header").style.top = "0";
    }
    else
    {
        document.querySelector(".main-header").style.top = "-500px";
    }

    prevScroll = currentScroll;
}