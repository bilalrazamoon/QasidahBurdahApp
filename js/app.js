angular.module('app', [])
    .run(function ($rootScope, $http) {
        $rootScope.appName="Qasidah Burdah";
        $rootScope.appVersion="1.0";
        $rootScope.year=new Date().getUTCFullYear();
        $rootScope.info="";
        $rootScope.submit= function () {
            if($rootScope.form.email.$valid){
                $http.post('https://api.parse.com/1/classes/emails',{email:$rootScope.email},{headers:{"X-Parse-Application-Id":"balvYdu69RMtKZJVDXMRIf81hEBnB5D5tMdFM2jE","X-Parse-REST-API-Key":"AbD1azr6qec16KvPqAYQ0hiCsT0vkE8JIWuftZac","Content-Type":"application/json"}})
                    .success(function(data){
                        if(data.objectId){
                            $rootScope.info="We received your email, Thanks";
                            $rootScope.email="";
                            $rootScope.$$phase || $rootScope.$digest();
                        }
                    })
                    .error(function(){
                        $rootScope.info="We have not received your email, Try again!";
                        $rootScope.$$phase || $rootScope.$digest();
                    })
            }
        };
        $rootScope.features=[
            {title:"Modern & User Friendly Design",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-mobile-phone"},
            {title:"Read Qasidah Burdah",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-book"},
            {title:"Listen Qaidah Burdah",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-headphones"},
            {title:"Full Feedback Support",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-question"}
        ];
    })
    .directive('slider', function () {
        return {
            scope: {
                options: "=slider"
            },
            restrict: "A",
            link: function ($scope, $element, $attrs) {
                var options = $scope.options || {items:1};
                $element.owlCarousel(options);
            }
        }
    })
;