document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student info
    var studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200549269 | Name: Rebacca Min';

    var apiUrl = 'https://api.thecatapi.com/v1/images/search';
    var catImage = document.getElementById('cat-image');
    var newCatBtn = document.getElementById('new-cat-btn');

    function getNewCatImage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                var imageUrl = data[0].url;
                var breed = (data[0].breeds && data[0].breeds.length > 0) ? data[0].breeds[0].name : 'Unknown'; // Fetch breed if available, otherwise display 'Unknown'
                var catId = data[0].id; // Fetch cat ID from the API response
                catImage.innerHTML = `
                    <img src="${imageUrl}" alt="Random Cat Image">
                    <p>Breed: ${breed}</p>
                    <p>Cat ID: ${catId}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
            });
    }

    // Get new cat image when button is clicked
    newCatBtn.addEventListener('click', getNewCatImage);

    // Load a random cat image when the page loads
    getNewCatImage();
});
