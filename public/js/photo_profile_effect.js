let image = document.getElementById('img-result');
let uploader = document.getElementById('foto-usuario');

image.addEventListener('click', evt => {
    evt.preventDefault();
    uploader.click();
});

uploader.onchange = function () {
    var reader = new FileReader();
    reader.onload = function (evt) {
        image.classList.remove("no-image");
        image.style.backgroundImage = "url(" + evt.target.result + ")";
    };
    reader.readAsDataURL(uploader.files[0]);
};