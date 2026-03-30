const fetch = require('node-fetch');

/**
 * Fetch GitHub user activity data from the GitHub API.
 * @param {string} username - The GitHub username to fetch activity for.
 * @returns {Promise<Object>} - The user activity data.
 */
async function fetchUserActivity(username) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

// Example usage (uncomment below to use):
// fetchUserActivity('TellerGra').then(data => console.log(data)).catch(error => console.error(error));
