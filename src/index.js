document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById('dog-breeds');
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            });
        });

    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'red';
        }
    });

    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        const breeds = breedList.querySelectorAll('li');
        breeds.forEach(breed => {
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = '';
            } else {
                breed.style.display = 'none';
            }
        });
    });
});
