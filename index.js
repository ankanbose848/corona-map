function updateMap(){
    fetch("https://www.trackcorona.live/api/countries")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.confirmed;

            if (cases > 1000000){
                color = `red`;
            }
	    else if (cases > 100000){
		color = 'yellow'
	    }

            else{
                color = `green`;
            }

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

//let interval = 200000; 
//setInterval(updateMap, interval);

updateMap();
