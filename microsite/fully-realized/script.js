// ==================== TAB NAVIGATION ====================
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and tabs
        navBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked button and corresponding tab
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Scroll content to top when switching tabs
        document.querySelector('.content').scrollTop = 0;
    });
});

// ==================== PLAY BUTTON TOGGLE ====================
const playBtn = document.querySelector('.play-controls button');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    const icon = playBtn.querySelector('.material-symbols-outlined');
    icon.textContent = isPlaying ? 'pause' : 'play_arrow';
});