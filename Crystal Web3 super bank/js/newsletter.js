// Newsletter subscription handler with mock local storage
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsEmail');
    const msgDiv = document.getElementById('newsletterMsg');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

            if (!email) {
                showMsg('❌ Please enter your email address.', 'error');
                return;
            }
            if (!emailPattern.test(email)) {
                showMsg('⚠️ Enter a valid email (e.g., name@domain.com).', 'error');
                return;
            }

            // Mock storing to localStorage (simulate backend)
            let subscribers = JSON.parse(localStorage.getItem('crystal_newsletter')) || [];
            if (subscribers.includes(email)) {
                showMsg('📧 You’re already subscribed!', 'info');
            } else {
                subscribers.push(email);
                localStorage.setItem('crystal_newsletter', JSON.stringify(subscribers));
                showMsg(`🎉 Thanks ${email}! You're now part of Crystal Pulse.`, 'success');
                emailInput.value = '';
            }
        });
    }

    function showMsg(message, type) {
        if (!msgDiv) return;
        msgDiv.innerHTML = message;
        msgDiv.style.color = type === 'success' ? '#00FF88' : (type === 'error' ? '#ff5e7c' : '#aaa');
        setTimeout(() => {
            msgDiv.innerHTML = '';
        }, 4000);
    }
});