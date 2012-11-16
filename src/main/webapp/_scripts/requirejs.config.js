//retreive the base url of scripts (to run from playcanvas launch local)
var baseUrl = '/_scripts';
var l = document.scripts;
for (var i = l.length-1; i > -1; i--) {
  var v = l[i].src;
  var p = v.indexOf('requirejs.config.js');
  if (p > -1) baseUrl = v.substring(0, p);
}
console.log('baseUrl', baseUrl);

require.config({
  baseUrl: baseUrl,
  //urlArgs: "bust=" +  (new Date()).getTime(),
  //enforceDefine: true,
  paths: {
    'underscore': '../_vendors/underscore-1.4.2/underscore.min',
    'Stats': '../_vendors/stats-r8/Stats',
    'dat' : '../_vendors/dat-gui-20111206/dat.gui.min',
    'ko' : '../_vendors/knockout-2.2.0',
    'Box2D' : '../_vendors/box2dweb-2.1alpha/Box2D.min',
    'd3' : '../_vendors/d3.v2.min',
    'jquery' : [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
      //LOAD FROM THIS LOCATION IF THE CDN LOCATION FAILS
      '../_vendors/jquery-1.7.1/jquery-1.7.1.min'
    ],
    'bootstrap' : '../_vendors/bootstrap/js/bootstrap.min',
    // polyfil
    'webglDetector' : '../_vendors/three-r49/Detector',
    'console' : '../_vendors/console_log',
    'requestAnimationFrame' : '../_vendors/RequestAnimationFrame',
    // test

    'jasmine' : '../_vendors/jasmine-1.2.0/jasmine',
    'jasmine-html' : '../_vendors/jasmine-1.2.0/jasmine-html',
    // requirejs plugins
    'domReady' : '../_vendors/requirejs-2.1.1/domReady'
  },
  shim: {
    'bootstrap':      { deps: ['jquery'] },
    'underscore':     { deps: [], exports: '_' },
    'dat':            { deps: [], exports: 'dat' },
    'Stats' :         { deps: [], exports: 'Stats' },
    'd3' :            { deps: [], exports: 'd3' },
    'Box2D' :         { deps: [], exports: 'Box2D' },
    'jasmine' :       { deps: [], exports: 'jasmine'},
    'jasmine-html' :  { deps: ['jasmine'], exports: 'jasmine.TrivialReporter'}
  },
  waitSeconds: 15,
  locale: "fr-fr"
});
define('requirejs.config', [], function(){});
/*
define('console', [], function() {
  return console;
});

define('r7/timer', [], function(){
  return {
    t: function(){
      return new Date().getTime();
    }
  };
});

define('main', [
    'r7/Ring',
    'r7/evt',
    'r7/timer',
    'r7/TargetG1',
    'r7/Stage4GameRules',
    'r7/Stage4UserInput',
    'r7/Stage4Layer2D',
    'r7/Stage4Loaders',
    'r7/Stage4Render',
    'r7/Stage4Physics',
    'THREE',
    'r7/Stage4DatGui',
    'r7/Stage4Periodic'
], function(
  Ring,
  evt,
  timer,
  TargetG1,
  Stage4GameRules,
  Stage4UserInput,
  Stage4Layer2D,
  Stage4Loaders,
  Stage4Render,
  Stage4Physics,
  THREE,
  Stage4DatGui,
  Stage4Periodic
) {

  return function(){
    var container = window.document.getElementById('layers');

    var ring = Ring([
      Stage4UserInput(window.document.body).onEvent,
      Stage4Periodic().onEvent,
      TargetG1().onEvent,
      Stage4GameRules().onEvent,
      Stage4Loaders().onEvent,
      Stage4Physics().onEvent,
      Stage4Render(container).onEvent,
      Stage4Layer2D(window.document.getElementById('layer2D')).onEvent
  //    Stage4DatGui().onEvent
    ]);
    ring.push(evt.Init);
    ring.push(evt.Start); //TODO push Start when ready and user hit star button
    var loop = function() {
      // loop on r<F10>equest animation loop
      // - it has to be at the beginning of the function
      // - @see http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
      //RequestAnimationFrame.request(loop);
      // note: three.js includes requestAnimationFrame shim
      requestAnimationFrame(loop);
      ring.push(evt.Tick(new Date().getTime()));
    };

    loop();
  };
});
*/
/*
require(['main'], function(main){
  main();
});
*/
