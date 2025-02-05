// Object for storing albums and songs
const albums = [
    {
        title: "Fruits",
        page: "/pages/fruits.html", // Adjusted path for fruits page
        image: "../assets/Images/Fruits/fruits.jpg", // ✅ Correct path to image
        songs: [
            { title: "Pomme", file: "../assets/audio/Fruits/pomme.wav" }, // Updated path for fruits audio
            // Add other songs here if necessary
        ]
    },
    {
        title: "Légumes",
        page: "legumes.html",
        image: "../assets/Images/Legumes/legumes.jpg", // ✅ Image ajoutée
    },
    {
        title: "Berlin",
        page: "berlin.html",
        image: "../assets/Images/Berlin/beach.jpg", // ✅ Image ajoutée
        songs: [
            { title: "And I take off", file: "audio/Berlin/and_i_take_off.wav" },
            { title: "Plane", file: "audio/Berlin/plane.wav" },
        ]
    },
    {
        title: "Panpan",
        page: "panpan.html",
        image: "../assets/Images/Panpan/panpan.png", // ✅ Image ajoutée
        songs: [
            { title: "Intro", file: "audio/Panpan/intro.wav" },
            { title: "Panpan à la maison", file: "audio/Panpan/panpan_a_la_maison.wav" },
            { title: "Danse du feu", file: "audio/Panpan/danse_du_feu.wav" },
        ]
    },
];

// Function to display albums
function displayAlbums() {
    const albumsList = document.getElementById('albums-list');
    albumsList.innerHTML = ''; // Vide seulement la liste des albums

    albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album-item');
        albumDiv.innerHTML = `
            <img src="${album.image}" alt="${album.title}" class="album-image"> <!-- ✅ Image ajoutée -->
            <h3>${album.title}</h3>
            <a href="${album.page}"><button>Chansons</button></a>
        `;
        albumsList.appendChild(albumDiv);
    });
}

// Display albums when the page loads
window.onload = displayAlbums;