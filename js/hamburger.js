
function openMenu()
{
    var hamburger = document.getElementById("sidebar");
    var blur = document.querySelector(".blur");
    hamburger.classList.add("show");
    blur.classList.add("show");
}

function closeMenu()
{
    var hamburger = document.getElementById("sidebar");
    var blur = document.querySelector(".blur");
    hamburger.classList.remove("show");
    blur.classList.remove("show");
}

var closeButton = document.getElementById('closeSidebar');

    closeButton.onclick = function()
    {
        closeMenu();
    }

document.addEventListener('click', function(event)
{
    var sidebar = document.getElementById('sidebar');
    var hamburger = document.querySelector('.hamburger');

    if (!sidebar.contains(event.target) && !hamburger.contains(event.target))
        {
            if (sidebar.classList.contains('show'))
                {
                    sidebar.classList.remove('show');
                }
        }
});