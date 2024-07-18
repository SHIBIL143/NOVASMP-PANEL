const backendUrl = 'http://your-termux-ip:5000';

document.getElementById('start-server').addEventListener('click', function() {
    fetch(`${backendUrl}/start`)
        .then(response => response.json())
        .then(data => document.getElementById('status').innerText = data.status)
        .catch(error => console.error('Error:', error));
});

document.getElementById('stop-server').addEventListener('click', function() {
    fetch(`${backendUrl}/stop`)
        .then(response => response.json())
        .then(data => document.getElementById('status').innerText = data.status)
        .catch(error => console.error('Error:', error));
});

document.getElementById('restart-server').addEventListener('click', function() {
    fetch(`${backendUrl}/restart`)
        .then(response => response.json())
        .then(data => document.getElementById('status').innerText = data.status)
        .catch(error => console.error('Error:', error));
});
