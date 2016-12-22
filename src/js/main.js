'use strict';

require('../css/style.scss');

const $ = require('jquery');

$(($) => {
    // $('.core-img').css({'margin-left', '-200px'});
    // const coreImageLength = $('.core-img').length;
    // for (let i = 0; i < coreImageLength; i++) {
        // for (let j = 0; j < coreImageLength; j++) {
        //     $('.core-img')[j].animate({
        //         left: '800px'
        //     }, 100, () => {
        //         console.log('asdfjkl;');
        //     });
        // }
    // }
    // $('.core-img').animate({
    //     left: -400
    // }, 100, () => {
    //     $('.core-img').get(1).css('left', '');
    // });
    // const coreImageCount = $('.core-img').length,
    //     thumbnailImageCount = $('.thumbnail-img').length,
    //     singleCoreImageWidth = $('.core-img').width(),
    //     singleThumbnailImageWidth = $('.thumbnail-img').width(),
    //     coreImageElements = $('.core-img'),
    //     thumbnailImageElements = $('.thumbnail-img');
    //     // imgSliderWidth = coreImageCount * singleCoreImageWidth,
    //     // imgThumbnailSliderWidth = thumbnailImageCount * singleThumbnailImageWidth;
    // // $('#img-slider').css({width: imgSliderWidth});
    // // $('#img-thumbnail-slider').css({width: imgThumbnailSliderWidth});
    // // function moveLeft () {
    // // }
    // function moveRight () {
    //     console.log(coreImageElements);
    //     // coreImageElements.forEach((el) => {
    //     //     el.animate({
    //     //         left: -singleCoreImageWidth
    //     //     }, 1000, () => {
    //     //         console.log('...');
    //     //     });
    //     // });
    // }
    // setTimeout(() => {
    //     moveRight();
    // }, 1000);
});

// NOTE: jQuery for the slider
// $(document).ready(($) => {
//     const slideCount = $('#slider ul li').length,
//         slideWidth = $('#slider ul li').width(),
//         slideHeight = $('#slider ul li').height(),
//         sliderUlWidth = slideCount * slideWidth;
//     $('#slider ul li').css({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });
//     $('#slider').css({ width: slideWidth, height: slideHeight });
//     $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//     $('#slider ul li:last-child').prependTo('#slider ul');
//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 100, () => {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 100, () => {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//     // NOTE: jQuery effect notes: make previous viewed image that's currently sliding away get a grey transparent overlay and for the loading in image; do a 'before end' type of delay for the main image sliding area.
//     $('a.control_prev').click(() => {
//         moveLeft();
//     });
//     $('a.control_next').click(() => {
//         moveRight();
//     });
// });
// when using 'webpack' to compile these items; use this first: webpack --display-modules
// when serving this use; webpack-dev-server --progress --colors
