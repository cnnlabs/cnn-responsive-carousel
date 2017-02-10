'use strict';
require('../css/style.scss');
const $ = require('jquery');
const Handlebars = require('handlebars');
$(($) => {
    let slideCount = 0;
    // TODO: Hypatia API data will be filled here, and that's it...
    const videoCollectionDataArr = [
        {
            videoUrl: 'http://www.html5videoplayer.net/videos/toystory.mp4',
            videoPosterUrl: 'http://www.html5videoplayer.net/poster/toystory.jpg'
        },
        {
            videoUrl: 'http://www.html5videoplayer.net/videos/toystory.mp4',
            videoPosterUrl: 'http://www.html5videoplayer.net/poster/toystory.jpg'
        },
        {
            videoUrl: 'http://www.html5videoplayer.net/videos/toystory.mp4',
            videoPosterUrl: 'http://www.html5videoplayer.net/poster/toystory.jpg'
        }
    ];
    slideInit();
    function slideInit () {
        getTemplate(videoCollectionDataArr);
        prepareSlide();
    }
    function getTemplate (data) {
        var template = Handlebars.compile('<div class="slide"><video controls="controls" poster={{videoPosterUrl}}><source src={{videoUrl}} type="video/mp4" /><img alt="HTML5 MP4/H.264 Video" src={{videoPosterUrl}} title="No video playback capabilities, please download the video below" /></video></div>');
        if (slideCount < data.length) {
            var output = template(data[slideCount]);
            slideCount++;
            $('#slider').append(output);
        } else {
            console.log('There are no more slides to instantiate');
        }
    }
    function prepareSlide () {
        $('.slide').first().addClass('active');
        $('.slide').hide();
        $('.active').show();
        $('#prev').on('click', function () {
            prevSlide();
        });
        $('#next').on('click', function () {
            nextSlide();
        });
    }
    function slideBeginConfig () {
        $('.active').removeClass('active').addClass('oldActive');
    }
    function slidePrevConfig () {
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
    }
    function slideNextConfig () {
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
    }
    function slideEndConfig () {
        $('.oldActive').removeClass('oldActive');
        $('.slide').hide();
        $('.active').show();
        $('video').trigger('pause');
    }
    function prevSlide () {
        getTemplate(videoCollectionDataArr);
        slideBeginConfig();
        slidePrevConfig();
        slideEndConfig();
    }
    function nextSlide () {
        getTemplate(videoCollectionDataArr);
        slideBeginConfig();
        slideNextConfig();
        slideEndConfig();
    }
});
