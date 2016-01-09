angular.module('app', [])
    .run(function ($rootScope, $http, $timeout) {
        $rootScope.appName = "Qasidah Burdah";
        $rootScope.appVersion = "1.0.0";
        $rootScope.pacakage_id = "com.razadev.qasidahburdah";
        $rootScope.year = new Date().getUTCFullYear();
        $rootScope.message = {
            type: "",
            text: ""
        };
        $rootScope.submit = function () {
            if ($rootScope.form.email.$valid) {
                $http.post('https://api.parse.com/1/classes/emails', {email: $rootScope.email}, {
                        headers: {
                            "X-Parse-Application-Id": "balvYdu69RMtKZJVDXMRIf81hEBnB5D5tMdFM2jE",
                            "X-Parse-REST-API-Key": "AbD1azr6qec16KvPqAYQ0hiCsT0vkE8JIWuftZac",
                            "Content-Type": "application/json"
                        }
                    })
                    .success(function (data) {
                        if (data.objectId) {
                            $rootScope.message.type = "success";
                            $rootScope.message.text = "We received your email, Thanks";
                            $rootScope.email = "";
                            $rootScope.$$phase || $rootScope.$digest();
                        }
                    })
                    .error(function () {
                        $rootScope.message.type = "error";
                        $rootScope.message.text = "We have not received your email, Try again!";
                        $timeout(function () {
                            $rootScope.message.type = "";
                            $rootScope.message.text = "";
                        }, 5000);
                        $rootScope.$$phase || $rootScope.$digest();
                    })
            }
        };
        $rootScope.features = [
            {
                title: "Modern & User Friendly Design",
                desc: "Simple and user-friendly interface.",
                icon: "smartphone"
            },
            {
                title: "Read Qasidah Burdah",
                desc: "Read Qasidah in beautiful and distinguished Arabic style.",
                icon: "description"
            },
            {
                title: "Listen Qaidah Burdah",
                desc: "Listen Qasidah in voice of your favorite reciters.",
                icon: "library_musics"
            },
            {
                title: "Sharing feature",
                desc: "Ability to share app with others.",
                icon: "share"
            },
            {
                title: "Full Feedback Support",
                desc: "Give us your reliable Feedback through the application.",
                icon: "feedback"
            }
        ];
    })
    .directive('slider', function () {
        return {
            scope: {
                options: "=slider"
            },
            restrict: "A",
            link: function ($scope, $element, $attrs) {
                var options = $scope.options || {items: 1};
                $element.owlCarousel(options);
            }
        }
    })
;