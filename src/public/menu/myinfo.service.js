(function () {
"use strict";

angular.module('public')
.service('MyInfoService', MyInfoService)
.constant('ApiBasePath', "https://james-course5.herokuapp.com");

MyInfoService.$inject = ['$http', 'ApiBasePath'];
function MyInfoService($http, ApiBasePath) {
  var service = this;
  service.BasePath = ApiBasePath;
  service.fName = "";
  service.lName = "";
  service.phone = "";
  service.email = "";
  service.favoritesname= "";
  service.favoritename = "";
  service.description="";

  service.getAllCategories = function(){
    console.log("getAllCategories invoked");
    $http({
      method: "Get",
      url: ApiBasePath + "/categories.json"
    }).then (function (result){
      return result.data;
    });
    
  };

  service.saveMyInfo = function (info) {
    service.fName = info.fName;
    service.lName = info.lName;
    service.phone = info.phone;
    service.email = info.email;
    service.favoritesname= info.favoritesname;
    service.favoritename = info.favoritename;
    service.description=info.description;
    
  };

  service.getMyInfo = function () {
    var info = {
      fName: service.fName,
      lName: service.lName,
      phone: service.phone,
      email:  service.email,
      favoritesname:  service.favoritesname,
      favoritename:  service.favoritename,
      description:  service.description
    }
    return info;
  };

  service.getItem = function (shortName) {
    var promise = $http({
      method: "GET",
      url: ApiBasePath + "/menu_items/" + shortName + ".json"
    })
      return promise;
  };
    

}

})();
