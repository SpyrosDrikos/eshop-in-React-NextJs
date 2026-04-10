
let activeimage = 0;
let showImages = changeSum();

function changeSum()
{
    if (window.innerWidth <= 1000) 
    {
        return 1;
    } 
    else if (window.innerWidth <= 1500) 
    {
        return 2;
    } 
    else 
    {
        return 3;
    }
}


function showslides(index)
{
    const slide = document.querySelectorAll('.slide-img');
    const totalSlides = slide.length;

    if ( index < 0)
    {
        activeimage = totalSlides - showImages;
    }
    else if ( index > totalSlides - showImages )
    {
        activeimage = 0;
    }
    else
    {
        activeimage = index;
    }

    const transformValue = -activeimage*(100/showImages) + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';

}

function prevSlide()
{
    showslides(activeimage - 1)
}

function nextSlide()
{
    showslides(activeimage + 1)
}

window.addEventListener('resize',function()
{
    showImages = changeSum();
    showslides(activeimage);
})

document.addEventListener('DOMContentLoaded', function () 
{
    showslides(activeimage);
});

setInterval(function() { nextSlide(); }, 4500); 


