let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })

    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'homeController as vm'
    })
  ;


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;