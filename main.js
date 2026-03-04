function populateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    scoreboard.innerHTML = users.map(user => `<b>${user.name}: ${user.score}</b>`).join('');
}

document.addEventListener('DOMContentLoaded', populateScoreboard);

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    if (currentUser) {
        document.getElementById('current-user').textContent = currentUser.name;
    }
});

function logout(e) {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    window.location.href = 'index.html';
}