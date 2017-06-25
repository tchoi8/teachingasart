'use strict';

var jade = require('jade');

function jadeCompile(data) {
  return jade.compile(data.text, {
    filename: data.path
  });
}

function jadeRenderer(data, locals) {
  return jadeCompile(data)(locals);
}

jadeRenderer.compile = jadeCompile;

module.exports = jadeRenderer;
