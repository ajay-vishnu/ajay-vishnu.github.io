var btn = document.getElementById('search-button');

function buttonClicked()    {
    var txt = document.getElementById('search-bar').value;
    console.log("User searched for " + txt + ".");
}

btn.addEventListener('click', buttonClicked);
