
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendPN", function(request, response) {
  
			var iQuery = new Parse.Query(Parse.Installation);
			iQuery.equalTo("userId",request.params.recipientName);
						
			Parse.Push.send(
			{
				  where: iQuery, // Set our Installation query
					  data: {						
						alert: "Hi, "+request.params.recipientName + "! This is a test Parse push note from user " + request.user.username + "!"
					  }
			}, {
				  success: function() {
					
					response.success("Push note to user "+request.params.recipientName+" sent.");
				  },
				  error: function(error) {
					response.error(error);
				  }
			});
  
});
