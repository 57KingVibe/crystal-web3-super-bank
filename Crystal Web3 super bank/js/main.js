// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Get Started / Download / Create Wallet buttons (simple alert mocks)
document.getElementById('getStartedBtn')?.addEventListener('click', () => {
    alert('🚀 Welcome to Crystal! Create your free wallet in seconds.');
});
document.getElementById('watchDemoBtn')?.addEventListener('click', () => {
    const modal = document.getElementById('demoModal');
    if (modal) modal.style.display = 'flex';
});
document.getElementById('downloadMockBtn')?.addEventListener('click', () => {
    alert('📱 Crystal App download will begin shortly (iOS/Android coming soon)');
});
document.getElementById('createWalletMockBtn')?.addEventListener('click', () => {
    alert('🔐 Generate seed phrase and start your Web3 journey with Crystal.');
});

// Demo modal close
const modal = document.getElementById('demoModal');
const closeBtns = document.querySelectorAll('.close-modal, .close-demo-btn');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
    });
});
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// AI Assistant demo simulation
document.getElementById('aiDemoBtn')?.addEventListener('click', () => {
    alert('🧠 Crystal AI: Based on your portfolio, staking yields on Ethereum are 3.2% APY. Ask more!');
});

// Web3 Login Mock (MetaMask-like)
document.getElementById('web3LoginMock')?.addEventListener('click', () => {
    alert('🔌 Crystal Web3 Login: Connect wallet (MetaMask / WalletConnect) to access dashboard.\n(Mock: you would see wallet selection)');
});

// Optional: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Virtual card button
document.querySelector('.card-cta')?.addEventListener('click', () => {
    alert('💳 Order your Crystal Virtual Card – spend crypto anywhere!');
});