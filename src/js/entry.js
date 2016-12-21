'use strict';
// NOTE: this file should only be a bunch of require('');'s for our slider jQuery/JS code'
// NOTE: we're only loading in the sections of jQuery 3.x that we need.

require('../css/style.scss');

const $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/manipulation');
require('jquery/src/css');
require('jquery/src/ajax');
require('jquery/src/ajax/xhr');
require('jquery/src/effects/animatedSelector');
// when using 'webpack' to compile these items; use this first: webpack --display-modules
// when serving this use; webpack-dev-server --progress --colors
