define(['jquery'], function($) {
  'use strict';

  var pluginName = "moveDom",
      plugins = [];

  // The plugin constructor
  function Plugin( element, options ) {
    this.queries =  $.extend({},options); // raw query options
    this.handlers = {}; // event handler action
    this.mql = {};
    this.init();
  }
  Plugin.prototype = {

    makeQueryHandler : function(query) {
      var q = this.queries[query];
      return {
        match: function() {
          for (var key in q){
            $(key).detach()[q[key].match.action](q[key].match.target);
          }
        },
        unmatch: function() {
          for (var key in q){
            $(key).detach()[q[key].unmatch.action](q[key].unmatch.target);
          }
        }
      };
    },
    getHandlers : function(a) {
      return this.handlers[a.replace(":", ": ").replace(":  ", ": ")];
    },
    handleQuery : function(mql) {
      if(mql.matches){
        this.getHandlers(mql.media).match.call();
      }else{
        this.getHandlers(mql.media).unmatch.call();
      }
    },
    init : function() {
      for (var key in this.queries){
        this.handlers[key] = this.makeQueryHandler(key);
        this.mql[key] = window.matchMedia(key);
        this.mql[key].addListener($.proxy(this.handleQuery,this));
        this.handleQuery(this.mql[key]);
      }
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
        plugins.push(new Plugin( this, options )));
      }
    });
  };

});


// queries example
/*
$(document).moveDom({
  "screen and (min-width: 768px)": {
    ".header": {
      match: {
        action: "insertAfter",
        target: ".hdr .mobile-btns"
      },
      unmatch: {
        action: "prependTo",
        target: ".nav-inner"
      }
    }
  }
})
*/