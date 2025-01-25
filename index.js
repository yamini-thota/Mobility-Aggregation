const mobilityApps = {
    Delhi: {
        Cabs: ['Uber', 'Ola', 'Meru', 'Easy Cabs', 'Savaari', 'Zoomcar'],
        Bikes: ['Rapido', 'Bounce', 'Vogo', 'Yulu', 'Ola Bikes'],
        Autos: ['Ola Auto', 'Jugnoo', 'Uber Auto', 'Bengaluru Auto'],
        Porters: ['Porter', 'Blowhorn', 'Packers & Movers', 'Shadowfax'],
        Trivia: 'Delhi has a rich history of transportation with various modes evolving over time.'
    },
    Bangalore: {
        Cabs: ['Uber', 'Ola', 'Meru', 'Easy Cabs', 'Zoomcar'],
        Bikes: ['Bounce', 'Rapido', 'Ola Bikes'],
        Autos: ['Ola Auto', 'Uber Auto'],
        Porters: ['Porter', 'Blowhorn'],
        Trivia: 'Bangalore is known for its startup culture and vibrant public transport.'
    }
    // Add other cities here...
};


const appDetails = {
    Uber: { description: "Ride-sharing service for cabs and bikes.", rating: "4.5/5", link: "https://www.uber.com" },
    Ola: { description: "Indian-origin ride-hailing service.", rating: "4.4/5", link: "https://www.olacabs.com" },
    Meru: { description: "Premium taxi service in India.", rating: "4.0/5", link: "https://www.merucabs.com" },
    Rapido: { description: "India's largest bike taxi service.", rating: "4.3/5", link: "https://www.rapido.bike" },
    Bounce: { description: "Bike rentals for short-distance travel.", rating: "4.2/5", link: "https://www.bounce.in" },
    Porter: { description: "Logistics and goods transportation service.", rating: "4.1/5", link: "https://www.porter.in" },
    Shadowfax: { description: "Logistics service providing same-day delivery.", rating: "4.6/5", link: "https://www.shadowfax.in" },
    "Packers & Movers": { description: "Professional moving services for home and office.", rating: "4.0/5", link: "https://www.packersandmovers.com" },
    Blowhorn: { description: "On-demand logistics service for transportation of goods.", rating: "4.5/5", link: "https://www.blowhorn.com" },
    "Ola Bikes": { description: "Bike-sharing service by Ola for quick travel.", rating: "4.3/5", link: "https://www.olacabs.com/ola-bikes" },
    "Ola Auto": { description: "Auto-rickshaw service provided by Ola.", rating: "4.2/5", link: "https://www.olacabs.com/ola-auto" },
    "Uber Auto": { description: "Auto-rickshaw service by Uber for convenient travel.", rating: "4.1/5", link: "https://www.uber.com/in/en/ride/auto/" },
    "Bengaluru Auto": { description: "Auto services available across Bengaluru.", rating: "4.0/5", link: "https://www.bengaluru-auto.com" }
    
};

    

// Update the apps for the selected city
function updateApps() {
    const selectedCity = document.getElementById('cityDropdown').value;
    const appContainer = document.getElementById('appContainer');
    const triviaSection = document.getElementById('triviaSection');
    const detailSection = document.getElementById('detailSection');

    appContainer.innerHTML = '';
    triviaSection.innerHTML = '';
    detailSection.innerHTML = '';

    const apps = mobilityApps[selectedCity];

    if (apps) {
        Object.keys(apps).forEach(category => {
            if (apps[category].length > 0 && category !== 'Trivia') {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('appCategory');
                categoryDiv.innerHTML = `
                    <h3>${category}</h3>
                    <p>${apps[category].join(', ')}</p>
                    <button onclick="showCategoryDetails('${category}', '${selectedCity}')">View ${category}</button>
                `;
                appContainer.appendChild(categoryDiv);
            }
        });
        triviaSection.innerHTML = `<h3>Trivia:</h3><p>${apps.Trivia}</p>`;
    } else {
        appContainer.innerHTML = '<p>No data available for this city. We will be adding it soon!</p>';
    }
}

// Show details for the selected category in the same page
function showCategoryDetails(category, city) {
    const detailSection = document.getElementById('detailSection');
    const apps = mobilityApps[city][category];

    if (apps && apps.length > 0) {
        detailSection.innerHTML = `
            <h2>${category} in ${city}</h2>
            <ul class="appList">
                ${apps.map(app => `
                    <li class="appItem">
                        <img src="https://logo.clearbit.com/${app.toLowerCase()}.com" alt="${app} Logo" onerror="this.onerror=null; this.src='https://via.placeholder.com/100';" />
                        <div>
                            <h3>${app}</h3>
                            <p>${appDetails[app]?.description || "No description available."}</p>
                            <p>Rating: ${appDetails[app]?.rating || "Not rated yet"}</p>
                            <a href="${appDetails[app]?.link || "#"}" target="_blank">Visit Website</a>
                        </div>
                    </li>
                `).join('')}
            </ul>
            <button onclick="hideCategoryDetails()">Back to Categories</button>
        `;
    } else {
        detailSection.innerHTML = `<p>No data available for ${category} in ${city}.</p>`;
    }

    // Hide the app container and trivia section
    document.getElementById('appContainer').style.display = 'none';
    document.getElementById('triviaSection').style.display = 'none';
    detailSection.style.display = 'block';
}

// Hide category details and show the main sections
function hideCategoryDetails() {
    document.getElementById('detailSection').style.display = 'none';
    document.getElementById('appContainer').style.display = 'block';
    document.getElementById('triviaSection').style.display = 'block';
}

// Initialize with the default city
updateApps();
