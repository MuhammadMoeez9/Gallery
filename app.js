var preview_Img = document.getElementsByClassName('min')[0]
var allSmallImages = document.getElementsByClassName('small')

for (var i = 0; i < allSmallImages.length; i++) {
    console.log(allSmallImages[i])
    allSmallImages[i].addEventListener('mouseover',
        function () {
            preview_Img.src = this.src
            this.style.border = '7px solid black'
        })
    allSmallImages[i].addEventListener('mouseout',
        function () {
            preview_Img.src = this.src
            this.style.border = '7px solid transparent'
        })
}
// var preview_Img = document.getElementsByClassName('large')[0]; // Get the first element with class 'large'
// var allSmallImages = document.getElementsByClassName('small');

// for (var i = 0; i < allSmallImages.length; i++) {
//     allSmallImages[i].addEventListener('mouseover', function () {
//         preview_Img.src = this.src;
//         this.style.border = '7px solid black';
//     });

//     allSmallImages[i].addEventListener('mouseout', function () {
//         this.style.border = '7px solid transparent';
//     });
// }
