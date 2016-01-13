let homeController = function($http) {
  
  let vm = this;

  let newsURL = 'https://json-data.herokuapp.com/restaurant/news/1';
  let menuURL = 'https://json-data.herokuapp.com/restaurant/menu/1';
  let specialURL = 'https://json-data.herokuapp.com/restaurant/special/1';
  let menuURL2 = 'https://json-data.herokuapp.com/restaurant/menu/1';
  

  vm.getSpecial = getSpecial;
  vm.getNews = getNews;
  vm.getMenu = getMenu;



  getNews();
  function getNews() {
    $http.get(newsURL).success(function(data){
      vm.newsTitle = data.title;
      vm.date = data.date_published;
      vm.description = data.post;
    });
  }


  getSpecial();
  function getSpecial() {
    $http.get(specialURL).success(function(data){
      let specialId = data.menu_item_id;
      
      $http.get(menuURL).success(function(data){
        let special = data.entrees;
        special.forEach(function(x){
          if(x.id === specialId) {
            vm.specialItem = x.item;
            vm.specialDescription = x.description;
            vm.price = x.price;
          }
        });
      });
    });
  }


  getMenu();
  function getMenu() {
    $http.get(menuURL2).success(function(data){
      vm.apps = data.appetizers;
      vm.entrees = data.entrees;
      vm.sides = data.sides;
    });
  }








};

homeController.$inject = ['$http'];

export default homeController;
