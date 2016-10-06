(function (module) {
    mifosX.controllers = _.extend(module, {
        NotificationResponseHeaderProvider: function ($rootScope) {
        	return {
        		'response': function(response){
        			var method = response.config.method;
        			var url = response.config.url;
        			if(!url.includes("notifications")){
        				$rootScope.$broadcast('eventFired', {
        					notificationsStatus: response.headers('X-Notifications-Refresh')
        				});
        			}
        			return response;
        		}
        	}
    }).run(function($log){
    	$log.info("NotificationResponseHeaderFactory initialized");
    })
}(mifosX.services || {}));
