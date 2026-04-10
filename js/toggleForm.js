
function toggleForm() 
{
    var button = document.querySelector('.text-area button');

    document.querySelector('.register').classList.toggle('hidden');
    document.querySelector('.login').classList.toggle('hidden');


    if (button.textContent == "ΕΓΓΡΑΦΗ") 
    {
        button.textContent = "ΣΥΝΔΕΣΗ";
    } 
    else 
    {
        button.textContent = "ΕΓΓΡΑΦΗ";
    }
}

function togglePasswordVisibility(passwordFieldID, IconID)
{
    const icon = document.getElementById(IconID);
    let passwordField = document.getElementById(passwordFieldID);

    icon.addEventListener('click', function()
    {
        if (passwordField.type === "password")
        {
            passwordField.type = "text";
            icon.classList.add("fa-eye-slash");
            icon.classList.remove("fa-eye");
        }
        else
        {
            passwordField.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
}