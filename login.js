function authenticateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.name === username && user.password === password);
}

function login(e) {
    e.preventDefault();

    if(localStorage.getItem('currentUser')) {
        alert('Already logged in!');
        window.location.href = 'index.html';
        return;
    }

    console.log("abc");

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = authenticateUser(username, password);
    if (user) {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}

document.getElementById('login-form').addEventListener('submit', login);