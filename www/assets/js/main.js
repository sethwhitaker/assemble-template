require.config({
  baseUrl: '/assets/js/app/',
  paths : {
    jquery : '../libs/jquery.min',
    bootstrap : '../libs/bootstrap.min'
  },
  shim : {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'swiper': {
      deps: ['jquery'],
      exports: 'swiper'
    }
  }
});

/* Load Modules below */
require([
  'bootstrap',
  'global',
  'move-dom',
  'scroll-to',
  'show-more',
],function(){});