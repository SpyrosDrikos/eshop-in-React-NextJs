
let topBtn = document.getElementById("topBtn");

document.addEventListener("scroll", function() 
{
    if (document.documentElement.scrollTop > 100) 
    {
        topBtn.classList.add("active");
    } else 
    {
        topBtn.classList.remove("active");
    }
});

function topFunction() 
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}