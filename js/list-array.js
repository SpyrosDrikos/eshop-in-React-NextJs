
const clothes = 
[
    { price: 19.99, src: 'images/clothes1.jpg', title: 'Δερμάτινη Φούστα' },
    { price: 29.99, src: 'images/clothes2.jpg', title: 'Jean Παντελόνι' },
    { price: 25.99, src: 'images/clothes3.jpg', title: 'Ανδρικό Παντελόνι Σομόν' },
    { price: 22.99, src: 'images/clothes4.jpg', title: 'Δερμάτινο Jacket' },
    { price: 29.99, src: 'images/clothes5.jpg', title: 'Mini Φόρεμα' }
];

const shoes = 
[
    { price: 34.99, src: 'images/shoes1.jpg', title: 'Μποτάκια με αλυσίδα' },
    { price: 29.99, src: 'images/shoes2.jpg', title: 'Μποτάκια με τακούνι λευκά' },
    { price: 25.99, src: 'images/shoes3.jpg', title: 'Ανδρικά Σκαρπίνια' },
    { price: 34.99, src: 'images/shoes4.jpg', title: 'Γόβες Λευκές' },
    { price: 29.99, src: 'images/shoes5.jpg', title: 'Γυναικεία Sneakers' }
];

document.addEventListener('DOMContentLoaded', function() 
{
    changeCategory(clothes);
});

document.querySelector('#shoesButton').addEventListener('click', () => 
{
    changeCategory(shoes);
});

document.querySelector('#clothesButton').addEventListener('click', () => 
{
    changeCategory(clothes);
});

document.querySelectorAll('#btn-Container button').forEach(button => 
    {
    button.addEventListener('click', () => 
    {
        document.querySelectorAll('#btn-Container button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const changeCategory = (category) => 
{
    const slider = document.querySelector('#slider');
    slider.innerHTML = '';
    category.forEach(item => 
        {
        const div = document.createElement('div');
        div.classList.add('slide-img');
        div.innerHTML = `
            <div class="add-to-wishlist">
                <button><img style="width: 40px; height: 40px;" src="images/add-to-wishlist.png" alt=""></button>
            </div>
            <img src="${item.src}" alt="${item.title}" onclick="openModal('${item.src}')">
            <div class="title"><p>${item.title}</p> <p>${item.price} &euro;</p> </div>
            <button>Προσθήκη στο Καλάθι</button>
        `;
        slider.appendChild(div);
    });

};

