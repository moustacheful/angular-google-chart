/* global angular */
(function(){
    angular.module('googlechart')
        
        .provider('googleChartApiConfig', function googleChartApiConfigProvider() {
            var config = {
                useFrozen: false,
                version: 1,
                optionalSettings: {
                    packages: ['corechart']
                }
            };
            
            this.setVersion = function(version){
                config.version = version;
                config.useFrozen = true;
            };
            
            this.addPackages = function(packages){
                config.optionalSettings.packages = config.optionalSettings.packages.concat(packages);
            };

            this.$get = function(){
                return config;
            };
        });
})();