
	
	function pushNotify() {
	
		var push = PushNotification.init({
            "ios": {
			 "alert": true,
              "sound": true,
              "vibration": true,
              "badge": true,
              "clearBadge": true
            }
        });

        push.on('registration', function(data) {
            // send data.registrationId to push service
			alert(data.registrationId+'sent');
			$.post(
		"https://www.nd2nosmart.cards/nd2no/admin/send-push",
		{
		  tocken_id: data.registrationId
		},
		function(data,status){
			var dataArray = jQuery.parseJSON(data);
			var htmlStr='';
			$.each(dataArray, function(i, field){
				
				alert (field);
				if(field){
					alert("yes");
				} else {
					alert("no");		
				}					
			});					
		});
			
			
			
        });


        push.on('notification', function(data) {
            // do something with the push data
            // then call finish to let the OS know we are done
			alert(data.message);
			//alert(data.title);
			//alert(data.count);
			//alert(data.sound);
			//alert(data.image);
			//alert(data.additionalData);
			// data.title,
			// data.count,
			// data.sound,
			// data.image,
			// data.additionalData
			//alert(data.registrationId+'here');
            push.finish(function() {
			alert('finish');
                console.log("processing of push data is finished");
            });
        });
		
		push.on('error', function(e) {
			alert(e.message+ 'error');
			console.log(e.message);
		});
		
	}
	
	