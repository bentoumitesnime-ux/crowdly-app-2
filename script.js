// script.js

// Splash Screen Animation
function showSplashScreen() {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(() => {
        splash.style.display = 'none';
    }, 2000);
}

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const contentId = tab.getAttribute('data-content');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(contentId).style.display = 'block';
    });
});

// QR Code Canvas Animation
function generateQRCode(data) {
    const canvas = document.getElementById('qrCodeCanvas');
    const qrCode = new QRCode(canvas, {
        text: data,
        width: 128,
        height: 128,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
    });
}

// SOS Button
function sosButton() {
    const button = document.getElementById('sosButton');
    button.addEventListener('click', () => {
        alert('SOS alert triggered!');
        button.classList.add('pulsing');
        setTimeout(() => button.classList.remove('pulsing'), 3000);
    });
}

// Card Customization
function customizeCard(theme) {
    const card = document.getElementById('customCard');
    card.className = theme;
}

// Badge Toggle Checkboxes
const badges = document.querySelectorAll('.badge-checkbox');
badges.forEach(badge => {
    badge.addEventListener('change', () => {
        const selectedBadges = [...badges].filter(b => b.checked);
        // Update badge display logic here
    });
});

// Avatar Selection
function selectAvatar(avatar) {
    const avatarContainer = document.getElementById('avatarSelection');
    avatarContainer.src = avatar;
}

// Custom Message Scrolling
function startScrollingMessages(messages) {
    const messageContainer = document.getElementById('scrollingMessages');
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.textContent = msg;
        messageContainer.appendChild(div);
    });
}

// Card Flip Animation
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Stadium Map Gate Traffic Simulation
function simulateGateTraffic() {
    const gates = document.querySelectorAll('.gate');
    gates.forEach(gate => {
        // Simulate traffic logic here
    });
}

// Wallet Management
let walletBalance = 0;
function topUpWallet(amount) {
    walletBalance += amount;
    showTransactionHistory();
}

function showTransactionHistory() {
    // Logic to display transaction history
}

// Booking Events
function bookEvent(event) {
    if (walletBalance < event.price) {
        alert('Insufficient balance to book this event.');
    } else {
        // Booking logic here
    }
}

// Events Grid Rendering
function renderEvents(events) {
    const grid = document.getElementById('eventsGrid');
    events.forEach(event => {
        const div = document.createElement('div');
        div.textContent = `${event.name} - ${event.category}`;
        grid.appendChild(div);
    });
}

// Tutorial Section
function startTutorial() {
    // Logic to show tutorial steps
}

// Auto-notification System
setInterval(() => {
    // Logic to send notifications about gates, offers, and security checks
}, 30000);

// Initialize functions
showSplashScreen();
sosButton();