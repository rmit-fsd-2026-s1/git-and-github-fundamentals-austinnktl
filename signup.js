function createUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.name === username)) {
        return {
            success: false,
            message: 'Username already exists'
        }
    }
    users.push({ name: username, password: password, score: 0 });
    localStorage.setItem('users', JSON.stringify(users));
    return {
        success: true
    }
}

function signUp(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = createUser(username, password);
    if (result.success) {
        alert('Sign up successful!');
        window.location.href = 'login.html';
    } else {
        alert(result.message);
    }
}

document.getElementById('signup-form').addEventListener('submit', signUp);