//console.log("event Handler is called")


 
 queryURL1 = "http://api.eventful.com/json/events/search?app_key=C4twR9SMnMSRvt9T&location=27713&country_name=united+states&within=5&date=Next+week"

$.ajax({
      url: queryURL1,
      method: 'GET',
      dataType: 'jsonp'

      }).done(function(response, err) {
	
	          for (i=0; i<10; i++){
	              var cityName=response.events.event[i].city_name;
	              
	              //$("#placeholder").append(cityName);
	              var eventName=response.events.event[i].title;
	              //$("#placeholder").prepend("event title: " + eventName);
	              /*var date=new Date();*/
	              var d=response.events.event[i].start_time;
	              //var date=formatDate(d);
	             /* var date=moment(d).format('LLL');*/
	              var address=response.events.event[i].venue_address;
	              //var imgURL=results.events.event[0].image.thumb.url;
	              
	              console.log(cityName);
	              $('#eventResults').append("<br><br>Event:" + eventName + "- will be in " + cityName + " <br> Date: " + d + "<br> Location " + address);
	                  
	          }  // end of for LOOP



}); // end of request


