$(document).ready(function(){
    
    $(window).scroll(function(){
        var val = $(window).scrollTop();
        if(val>=415){
            $(".navbar").css('background-color', 'rgba(255, 255, 255, 1)');
            $(".navigacija").addClass("smaller");
        }
        else{
            $(".navbar").css('background-color', 'rgba(255, 255, 255, 0.8)');
            $(".navigacija").removeClass("smaller");
        }    
    });
    
    
});


function initialize() {
    var myLatlng = new google.maps.LatLng(43.8766766,18.308544900000015);
    
      var mapProp = {
        center:new google.maps.LatLng(43.8766766,18.308544900000015),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("map"), mapProp);
    
    var marker = new google.maps.Marker({
    position: myLatlng,
    title:"INIT dd Sarajevo"
});

// To add the marker to the map, call setMap();
marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

/*function initMap(){
    var mapDiv = $("#map");
    var map = new google.maps.Map(mapDiv, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}*/