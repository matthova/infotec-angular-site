'use strict';

/* Services */

angular.module('InfotecApp.services', [])
  .factory('TrackService', function($http) {
    return{
      getTracks: function(){
        //getTracks URL	
        var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=sequence_number&query[orderBy][]=track_name&query[includeOnlyColumns][track_name]=track_name&query[includeOnlyColumns][track_oid]=track_oid";
        return $http.get(url);
      },
  
      getSessions: function(trackID){
        var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=start_datetime&query[orderBy][]=activity_name&query[whereEqualsAlpha][track_oid]=" + trackID + "&query[includeExtraColumns][in_minute]=MINUTE(start_datetime)&query[includeExtraColumns][in_hour]=HOUR(start_datetime)&query[includeExtraColumns][in_date]=DATE(start_datetime)&query[includeExtraColumns][in_day_of_week]=DAYOFWEEK(start_datetime)&query[includeExtraColumns][in_month]=MONTH(start_datetime)&query[includeExtraColumns][in_day]=DAY(start_datetime)";
        return $http.get(url);
      }
    }
  });
  
//getTracks URL	
//var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=sequence_number&query[orderBy][]=track_name&query[includeOnlyColumns][track_name]=track_name&query[includeOnlyColumns][track_oid]=track_oid";

//getSessions URL
//var url = "https://event.crowdcompass.com/e/zQCMTRgHzA/query/v_activity_tracks?query[orderBy][]=start_datetime&query[orderBy][]=activity_name&query[whereEqualsAlpha][track_oid]=" + trackID + "&query[includeExtraColumns][in_minute]=MINUTE(start_datetime)&query[includeExtraColumns][in_hour]=HOUR(start_datetime)&query[includeExtraColumns][in_date]=DATE(start_datetime)&query[includeExtraColumns][in_day_of_week]=DAYOFWEEK(start_datetime)&query[includeExtraColumns][in_month]=MONTH(start_datetime)&query[includeExtraColumns][in_day]=DAY(start_datetime)";

