angular.module('app', [])
    .run(function ($rootScope) {
        $rootScope.appName="Qasidah Burdah";
        $rootScope.appVersion="1.0";
        $rootScope.year=new Date().getUTCFullYear();
        $rootScope.features=[
            {title:"Beautiful, modern design",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-mobile-phone"},
            {title:"Beautiful, modern design",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-mobile-phone"},
            {title:"Beautiful, modern design",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-mobile-phone"},
            {title:"Beautiful, modern design",desc:"Duis bibendum diam non erat facilaisis tincidunt.",icon:"fa-mobile-phone"},
        ];
    })
    .directive('slider', function () {
        return {
            restrict: "A",
            link: function ($scope, $element, $attrs) {
                $element.owlCarousel({
                    items: 1,
                    lazyLoad: true,
                    autoPlay: true,
                    navigation: false,
                    navigationText: false,
                    pagination: true
                });
            }
        }
    })
;