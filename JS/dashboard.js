document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('but-div').addEventListener('click', function(){
        let newText = document.createElement('h1')
        newText.innerText = "Redirecting to login page";
        document.appendChild('article', 'newText');
        window.location.href = "../login.html";
    })
})