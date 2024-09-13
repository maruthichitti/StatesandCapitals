// List of Indian States and their Capitals
const statesAndCapitals = [
    { state: 'Andhra Pradesh', capital: 'Amaravati' },
    { state: 'Arunachal Pradesh', capital: 'Itanagar' },
    { state: 'Assam', capital: 'Dispur' },
    { state: 'Bihar', capital: 'Patna' },
    { state: 'Chhattisgarh', capital: 'Raipur' },
    { state: 'Goa', capital: 'Panaji' },
    { state: 'Gujarat', capital: 'Gandhinagar' },
    { state: 'Haryana', capital: 'Chandigarh' },
    { state: 'Himachal Pradesh', capital: 'Shimla' },
    { state: 'Jharkhand', capital: 'Ranchi' },
    { state: 'Karnataka', capital: 'Bengaluru' },
    { state: 'Kerala', capital: 'Thiruvananthapuram' },
    { state: 'Madhya Pradesh', capital: 'Bhopal' },
    { state: 'Maharashtra', capital: 'Mumbai' },
    { state: 'Manipur', capital: 'Imphal' },
    { state: 'Meghalaya', capital: 'Shillong' },
    { state: 'Mizoram', capital: 'Aizawl' },
    { state: 'Nagaland', capital: 'Kohima' },
    { state: 'Odisha', capital: 'Bhubaneswar' },
    { state: 'Punjab', capital: 'Chandigarh' },
    { state: 'Rajasthan', capital: 'Jaipur' },
    { state: 'Sikkim', capital: 'Gangtok' },
    { state: 'Tamil Nadu', capital: 'Chennai' },
    { state: 'Telangana', capital: 'Hyderabad' },
    { state: 'Tripura', capital: 'Agartala' },
    { state: 'Uttar Pradesh', capital: 'Lucknow' },
    { state: 'Uttarakhand', capital: 'Dehradun' },
    { state: 'West Bengal', capital: 'Kolkata' }
];

// Function to display the states and capitals
function displayStatesAndCapitals() {
    const container = document.getElementById('states-container');

    statesAndCapitals.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('state-item');
        
        div.innerHTML = `<span class="state">${item.state}</span><span class="capital">${item.capital}</span>`;
        
        container.appendChild(div);
    });
}

// Initialize the display
window.onload = displayStatesAndCapitals;
