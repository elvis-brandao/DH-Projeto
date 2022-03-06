let image = document.getElementById('img-result');
let uploader = document.getElementById('foto-usuario');
let wrapper = document.querySelector('.wrapper');

image.addEventListener('click', evt => {
    evt.preventDefault();
    uploader.click();
});

uploader.onchange = function () {
    var reader = new FileReader();
    reader.onload = function (evt) {
        // image.classList.remove("no-image");
        wrapper.style.backgroundImage = "url(" + evt.target.result + ")";
    };
    reader.readAsDataURL(uploader.files[0]);
};