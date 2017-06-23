

(function () {
    angular
        .module('myApp')
        .factory('$walkSDService', WalkSDService);

    WalkSDService.$inject = ['$http'];

    function WalkSDService($http) {
        return {
            getPEDEVTbyAsset: _getPEDEVTbyAsset,
            getPEDEVTbyLocation: _getPEDEVTbyLocation,
            //getPEDEVTbyBBbox: _getPEDEVTbyBBbox
        };

        function _getPEDEVTbyAsset(PedAsset, Start, End) {
            var settings = {
                async: true,
                crossDomain: true,
                url: "https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/assets/" + PedAsset + "/events?eventType=PEDEVT&startTime=" + Start + "&endTime=" + End,
                //url: "https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/assets/CAM-HYP1071-F/events?eventType=PEDEVT&startTime=1497908264000&endTime=1497909114000",
                method: "GET",
                headers: {
                    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJlOGE2NzA2MzJlYTM0YzA0OTViODdhOWE5N2I4NmFkMSIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNDk3OTA4MTA2LCJleHAiOjE0OTg1MTI5MDYsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.RhZFZbJOjW8Zk6_p5Y0YNRIJbyDGSj61pkxzetcchwPgTyDgXlJ_LyvU24_IzRo7FvB-UWjOjz3CLyRKK6ztXSTQkdPWzOqLB-n6xF1JnVfStHgCgC5gynzfb0wm9Y3ZQSZex-W2GyxIa7lZPRRwwrDxd87d_DE8nQ9hFEOCcA8RWV9v0tgrxeupOVGqIOOEGLKwpa7RFGkj35YsUmMPjjuZfWhB9LmsHS5yqz5OyFA3Hp5e8xn6hMPhRaNtCJVVFsNE59qFjnnmOXDlG_0CfH5Qi9UJ4CnWIIpyDtPpFulHHwDeTb4EWLUD4OMq0XMtRRA3QzeOGPoXomzo3dtTrw",
                    "predix-zone-id": "SDSIM-IE-PEDESTRIAN"
                    //"cache-control": "no-cache",
                    //"postman-token": "1fae996d-2d4b-151a-a19d-5b6212728dd0"
                },
            }

            return $http(settings)
                .then(getPEDAssetComplete)
                .catch(getPEDAssetFailed);

            function getPEDAssetComplete(response) {
                console.log("In GetPedAssetComplete")
                return response;
            }

            function getPEDAssetFailed(error) {
                console.log('Failed to get data', error);
            }
        }

        function _getPEDEVTbyLocation(PedLoc, Start, End) {
            //var settings = {
            //    async: true,
            //    crossDomain: true,
            //    url: "https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/locations/" + PedLoc + "/events?eventType=PEDEVT&startTime=" + Start + "&endTime=" + End,
            //    //url: "https://ic-event-service.run.aws-usw02-pr.ice.predix.io/v2/locations/LOCATION-30-276/events?eventType=PEDEVT&startTime=1497908264000&endTime=14979091140000",
            //    method: "GET",
            //    headers: {
            //        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJlOGE2NzA2MzJlYTM0YzA0OTViODdhOWE5N2I4NmFkMSIsInN1YiI6ImhhY2thdGhvbiIsInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsImllLWN1cnJlbnQuU0RTSU0tSUUtUFVCTElDLVNBRkVUWS5JRS1QVUJMSUMtU0FGRVRZLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEFSS0lORy5JRS1QQVJLSU5HLkxJTUlURUQuREVWRUxPUCIsImllLWN1cnJlbnQuU0RTSU0tSUUtUEVERVNUUklBTi5JRS1QRURFU1RSSUFOLkxJTUlURUQuREVWRUxPUCJdLCJjbGllbnRfaWQiOiJoYWNrYXRob24iLCJjaWQiOiJoYWNrYXRob24iLCJhenAiOiJoYWNrYXRob24iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjlmMWYyYzRkIiwiaWF0IjoxNDk3OTA4MTA2LCJleHAiOjE0OTg1MTI5MDYsImlzcyI6Imh0dHBzOi8vODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiODkwNDA3ZDctZTYxNy00ZDcwLTk4NWYtMDE3OTJkNjkzMzg3IiwiYXVkIjpbImllLWN1cnJlbnQuU0RTSU0tSUUtVFJBRkZJQy5JRS1UUkFGRklDLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBBUktJTkcuSUUtUEFSS0lORy5MSU1JVEVEIiwiaWUtY3VycmVudC5TRFNJTS1JRS1QVUJMSUMtU0FGRVRZLklFLVBVQkxJQy1TQUZFVFkuTElNSVRFRCIsInVhYSIsImhhY2thdGhvbiIsImllLWN1cnJlbnQuU0RTSU0tSUUtRU5WSVJPTk1FTlRBTC5JRS1FTlZJUk9OTUVOVEFMLkxJTUlURUQiLCJpZS1jdXJyZW50LlNEU0lNLUlFLVBFREVTVFJJQU4uSUUtUEVERVNUUklBTi5MSU1JVEVEIl19.RhZFZbJOjW8Zk6_p5Y0YNRIJbyDGSj61pkxzetcchwPgTyDgXlJ_LyvU24_IzRo7FvB-UWjOjz3CLyRKK6ztXSTQkdPWzOqLB-n6xF1JnVfStHgCgC5gynzfb0wm9Y3ZQSZex-W2GyxIa7lZPRRwwrDxd87d_DE8nQ9hFEOCcA8RWV9v0tgrxeupOVGqIOOEGLKwpa7RFGkj35YsUmMPjjuZfWhB9LmsHS5yqz5OyFA3Hp5e8xn6hMPhRaNtCJVVFsNE59qFjnnmOXDlG_0CfH5Qi9UJ4CnWIIpyDtPpFulHHwDeTb4EWLUD4OMq0XMtRRA3QzeOGPoXomzo3dtTrw",
            //        "predix-zone-id": "SDSIM-IE-PEDESTRIAN"
            //        //"cache-control": "no-cache",
            //        //"postman-token": "1fae996d-2d4b-151a-a19d-5b6212728dd0"
            //    },
            //}

            return $http(settings)
                .then(getPEDlocationComplete)
                .catch(getPEDlocationFailed);


            function getPEDlocationComplete(response) {
                console.log("In GetPedLocationComplete")
                return response;
            }

            function getPEDlocationFailed(error) {
                console.log('Failed to get data', error);
            }
        }

        
    }
})();