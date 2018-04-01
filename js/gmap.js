function initMap() {
    var uluru = {lat: 50.076063, lng: 19.929704};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru,
        mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP
    });
}