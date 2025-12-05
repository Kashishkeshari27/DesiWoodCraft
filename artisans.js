navigator.geolocation.getCurrentPosition(pos => {
  let map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map);

  fetch("data/artisans.json")
    .then(res => res.json())
    .then(list => {
      list.forEach(a => {
        L.marker([a.lat, a.lng]).addTo(map)
          .bindPopup(a.name);
      });
    });
});
