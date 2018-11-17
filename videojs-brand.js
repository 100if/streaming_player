/**
 * videojs-brand
 * @version 0.0.4
 * @copyright 2016 Emmanuel Alves <manel.pb@gmail.com>
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsBrand = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

// Default options for the plugin.
var defaults = {
  image: "logo image",
  title: "Logo Title",
  id: "nothing",
  image2: "logo image",
  title2: "Logo Title",
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  var containerElement = document.createElement("div");
  containerElement.className = "vjs-brand-container";

  var linkElement = document.createElement("a");
  linkElement.className = "vjs-brand-container-link";
  // linkElement.setAttribute("href", options.destination || defaults.destination);
  linkElement.setAttribute("title", options.title || defaults.title);
    // linkElement.setAttribute("href", options.destination || defaults.destination);
  linkElement.setAttribute("id", options.id || defaults.id);
  // linkElement.setAttribute("target", options.destinationTarget || defaults.destinationTarget);
  linkElement.addEventListener("click", function(){
      doDisplay();
    // showSurvey();
});
  var imageElement = document.createElement("img");
  imageElement.src = options.image || defaults.image;

  linkElement.appendChild(imageElement);
  containerElement.appendChild(linkElement);
/*--------------------- end of chatbox Button -----------------------*/
   var containerElement2 = document.createElement("div");
   containerElement2.className = "vjs-brand-container2";

   var linkElement2 = document.createElement("a");
   linkElement2.className = "vjs-brand-container-link2";
   //linkElement.setAttribute("href", options.destination || defaults.destination);
   linkElement2.setAttribute("title2", options.title2 || defaults.title2);
   //linkElement.setAttribute("target", options.destinationTarget || defaults.destinationTarget);
   linkElement2.addEventListener("click", function(){
     showSurvey();
   });
   var imageElement2 = document.createElement("img");
   imageElement2.src = options.image2 || defaults.image2;

   linkElement2.appendChild(imageElement2);
   containerElement2.appendChild(linkElement2);

  player.controlBar.el().insertBefore(containerElement, player.controlBar.fullscreenToggle.el());
  player.controlBar.el().insertBefore(containerElement2, containerElement);
  player.addClass('vjs-brand');
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function brand
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var brand = function brand(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2["default"].mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
_videoJs2["default"].plugin('brand', brand);

// Include the version number.
brand.VERSION = '0.0.4';

exports["default"] = brand;
module.exports = exports["default"];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
