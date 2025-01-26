var currentImageIndex = 0;
var images = document.querySelectorAll('.image-container img');

function showImage(imageId) {
    // 隐藏所有图片
    images.forEach(function(img) {
        img.style.display = 'none';
    });

    // 显示指定图片
    var selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'block';
}

function changeImage() {
    // 隐藏当前显示的图片
    images[currentImageIndex].style.display = 'none';

    // 切换到下一张图片
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // 显示下一张图片
    images[currentImageIndex].style.display = 'block';
}
