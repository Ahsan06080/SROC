document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication logic
    if (username === 'yourUsername' && password === 'yourPassword') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'gradio.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
});
