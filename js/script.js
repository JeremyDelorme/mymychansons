// Charger les données depuis le fichier JSON
fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        // Sélectionner l'élément où afficher les albums
        const albumsList = document.getElementById('albums-list');

        // Accéder aux albums (ici, l'album "Fruits")
        data.albums.forEach(album => {
            const albumElement = document.createElement('div');
            albumElement.classList.add('album');

            albumElement.innerHTML = `
                <h3>${album.title}</h3>
                <img src="${album.image}" alt="${album.title}">
                <a href="${album.page}">Voir les chansons</a>
            `;

            // Ajouter l'album à la liste
            albumsList.appendChild(albumElement);
        });
    })
    .catch(error => console.error('Erreur de chargement des données JSON :', error));

// Charger les données des chansons de l'album "Fruits"
if (window.location.pathname.includes('pages/fruits.html')) {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            // Sélectionner l'élément où afficher les chansons
            const songsList = document.getElementById('songs-list');

            // Accéder aux chansons de l'album "Fruits"
            const fruitsSongs = data.songs.Fruits;

            // Générer une liste de chansons
            fruitsSongs.forEach(song => {
                const songElement = document.createElement('div');
                songElement.classList.add('song');

                songElement.innerHTML = `
                    <h3>${song.title}</h3>
                    <img src="${song.image}" alt="${song.title}">
                    <audio controls>
                        <source src="${song.file}" type="audio/wav">
                        Votre navigateur ne supporte pas l'élément audio.
                    </audio>
                    <a href="${song.stems}">Voir les stems</a>
                `;

                // Ajouter la chanson à la liste
                songsList.appendChild(songElement);
            });
        })
        .catch(error => console.error('Erreur de chargement des chansons :', error));
}
