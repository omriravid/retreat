// ריטריט תנועה במדבר - Women in Motion

// Configuration
const CONFIG = {
    whatsappNumber: '9720506623828',
    paymentPageUrl: 'https://pay.tranzila.com/fxpmpilates',
    retreatName: 'ריטריט תנועה במדבר - מרץ 2026',
};

// DOM Elements
const registerButtons = document.querySelectorAll('#register-btn, #register-btn-2, #register-btn-3');
const paymentModal = document.getElementById('payment-modal');
const paymentModalClose = document.getElementById('payment-modal-close');
const paymentIframe = document.getElementById('payment-iframe');
const whatsappModal = document.getElementById('whatsapp-modal');
const whatsappModalClose = document.getElementById('modal-close');

// Register Buttons - Open Payment Modal
registerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        paymentIframe.src = CONFIG.paymentPageUrl;
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close Payment Modal
if (paymentModalClose) {
    paymentModalClose.addEventListener('click', closePaymentModal);
}

if (paymentModal) {
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
}

function closePaymentModal() {
    paymentModal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        paymentIframe.src = '';
    }, 300);
}

// Close WhatsApp Modal
if (whatsappModalClose) {
    whatsappModalClose.addEventListener('click', closeWhatsappModal);
}

if (whatsappModal) {
    whatsappModal.addEventListener('click', (e) => {
        if (e.target === whatsappModal) {
            closeWhatsappModal();
        }
    });
}

function closeWhatsappModal() {
    whatsappModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (paymentModal && paymentModal.classList.contains('active')) {
            closePaymentModal();
        }
        if (whatsappModal && whatsappModal.classList.contains('active')) {
            closeWhatsappModal();
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header && scrolled < window.innerHeight) {
                header.style.backgroundPositionY = `${scrolled * 0.4}px`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Console message
console.log('%c ריטריט תנועה במדבר ', 'background: linear-gradient(135deg, #B8704B, #8B6B4D); color: white; font-size: 18px; padding: 12px 20px; border-radius: 8px;');
console.log('Women in Motion | נוף צוקים 2026');
