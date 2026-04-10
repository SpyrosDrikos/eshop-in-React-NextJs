
var dropdownButtons = document.querySelectorAll('.toggle-dropdown');

dropdownButtons.forEach(function(button) 
{
    button.addEventListener('click', function(event) 
    {      

        var parentCategory = button.closest('.sidebar-categories');

        var dropdownOptions = parentCategory.querySelector('.dropdown-options');

        dropdownOptions.classList.toggle('show-dropdown');
    });
});