

const clothesSlides = 
[   'clothes1.jpg', 
    'clothes2.jpg',     
    'clothes3.jpg',     
    'clothes4.jpg',     
    'clothes5.jpg'
];

const shoesSlides = 
[   
    'shoes1.jpg',   
    'shoes2.jpg',   
    'shoes3.jpg',   
    'shoes4.jpg',   
    'shoes5.jpg'
];

let currentSlide = 0;

function openModal(imageSrc)
{
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal()
{
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function showSlides(slides, index) 
{
    if (index < 0) 
    {
        currentSlide = slides.length - 1;
    } 
    else if (index >= slides.length) 
    {
        currentSlide = 0;
    } else 
    {
        currentSlide = index;
    }

    const modalImg = document.getElementById('modalImg');
    modalImg.src = 'images/' + slides[currentSlide];
}

function prevImage() 
{
    if (document.querySelector('#clothesButton').classList.contains('active')) 
    {
        showSlides(clothesSlides, currentSlide - 1);
    } 
    else if (document.querySelector('#shoesButton').classList.contains('active')) 
    {
        showSlides(shoesSlides, currentSlide - 1);
    }
}

function nextImage() 
{
    if (document.querySelector('#clothesButton').classList.contains('active')) 
    {
        showSlides(clothesSlides, currentSlide + 1);
    } 
    else if (document.querySelector('#shoesButton').classList.contains('active')) 
    {
        showSlides(shoesSlides, currentSlide + 1);
    }
}

window.addEventListener('keydown', function(event) 
{
    if (event.key === "ArrowLeft") 
    {
        prevImage();
    }
});


window.addEventListener('keydown', function(event) 
{
    if (event.key === "ArrowRight") 
    {
        nextImage(); 
    }
});

window.onclick = function (event)
{
    const modal = document.getElementById('modal');
    if (event.target == modal)
    {
        modal.style.display = 'none';
    }
}

window.addEventListener('keydown', function(event) 
{
    if (event.key === "Escape") 
    {
        closeModal();
    }
});
