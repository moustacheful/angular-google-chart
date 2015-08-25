/* global angular */
(function(){
    angular.module('googlechart')
        .provider('googleFrozenJsapiUrl', googleFrozenJsapiUrlProvider);
        
    function googleFrozenJsapiUrlProvider() {
        var protocol = 'https:';
        var url = '//www.gstatic.com/charts/loader.js';
        
        this.setProtocol = function (newProtocol) {
            protocol = newProtocol;
        };

        this.setUrl = function (newUrl) {
            url = newUrl;
        };

        this.$get = function () {
            return (protocol ? protocol : '') + url;
        };
    }
})();