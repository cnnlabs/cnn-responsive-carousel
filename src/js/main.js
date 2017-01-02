'use strict';

require('../css/style.scss');

// TODO: considering some may not want to include the full jquery library in code or via cache; we should require in only the dir's from jquery needed to run this carousel...
const $ = require('jquery');

// TODO: add a config. object so options are a thing...

$(($) => {

    const imgLength = $('.core-img').length;

    // TODO: make this dynamic based on responsive size
    let imgSlide = 800;

    function slide(calculation) {
        for (let j = 0; j < imgLength; j++) {
            let slide = $('.core-img')[j];
            $(slide).animate({
                left: `${calculation}${imgSlide}`
            }, 100, () => {
                $('.core-img').css('margin', '');
            });
        }
    }

    $('.left-nav-btn').click(() => {
        slide('-=');
    });
    $('.right-nav-btn').click(() => {
        slide('+=');
    });

});
