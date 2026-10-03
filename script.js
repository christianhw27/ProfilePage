/* ==========================================================================
   PERSONA 5 INTERACTIVE SCRIPT - DANNY CHRISTIAN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. CALLING CARD MODAL CONTROLS
    const callingCardModal = document.getElementById('calling-card-modal');
    const openCallingCardBtn = document.getElementById('open-calling-card');
    const sendCardBtn = document.getElementById('btn-send-card');
    const closeCallingCardBtn = document.getElementById('close-calling-card');
    const callingCardForm = document.getElementById('calling-card-form');
    const callingCardSuccess = document.getElementById('calling-card-success');

    function openCallingCardModal() {
        if (callingCardModal) {
            callingCardModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCallingCardModal() {
        if (callingCardModal) {
            callingCardModal.classList.remove('active');
            document.body.style.overflow = '';
            // Reset form state after close
            setTimeout(() => {
                if (callingCardForm && callingCardSuccess) {
                    callingCardForm.classList.remove('hidden');
                    callingCardSuccess.classList.add('hidden');
                    callingCardForm.reset();
                }
            }, 300);
        }
    }

    if (openCallingCardBtn) openCallingCardBtn.addEventListener('click', openCallingCardModal);
    if (sendCardBtn) sendCardBtn.addEventListener('click', openCallingCardModal);
    if (closeCallingCardBtn) closeCallingCardBtn.addEventListener('click', closeCallingCardModal);

    // Close modal on background click
    if (callingCardModal) {
        callingCardModal.addEventListener('click', (e) => {
            if (e.target === callingCardModal) {
                closeCallingCardModal();
            }
        });
    }

    // Form Submit Handler
    if (callingCardForm) {
        callingCardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            callingCardForm.classList.add('hidden');
            callingCardSuccess.classList.remove('hidden');
        });
    }

    // 2. MISSION LOGS / ARCHIVES MODAL CONTROLS
    const missionLogsModal = document.getElementById('mission-logs-modal');
    const btnMissionLogsNav = document.getElementById('btn-mission-logs-nav');
    const btnArchivesNav = document.getElementById('btn-archives-nav');
    const btnReadLogs = document.getElementById('btn-read-logs');
    const closeMissionLogsBtn = document.getElementById('close-mission-logs');

    function openMissionLogsModal() {
        if (missionLogsModal) {
            missionLogsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMissionLogsModal() {
        if (missionLogsModal) {
            missionLogsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (btnMissionLogsNav) btnMissionLogsNav.addEventListener('click', (e) => { e.preventDefault(); openMissionLogsModal(); });
    if (btnArchivesNav) btnArchivesNav.addEventListener('click', (e) => { e.preventDefault(); openMissionLogsModal(); });
    if (btnReadLogs) btnReadLogs.addEventListener('click', openMissionLogsModal);
    if (closeMissionLogsBtn) closeMissionLogsBtn.addEventListener('click', closeMissionLogsModal);

    if (missionLogsModal) {
        missionLogsModal.addEventListener('click', (e) => {
            if (e.target === missionLogsModal) {
                closeMissionLogsModal();
            }
        });
    }

    // 3. SOUND / BGM CONTROLLER
    const bgmToggle = document.getElementById('bgm-toggle');
    const p5Bgm = document.getElementById('p5-bgm');
    let isPlaying = false;

    if (bgmToggle && p5Bgm) {
        bgmToggle.addEventListener('click', () => {
            if (!isPlaying) {
                p5Bgm.play().then(() => {
                    isPlaying = true;
                    bgmToggle.classList.add('playing');
                    bgmToggle.querySelector('.sound-label').innerText = 'MUSIC: ON (PLAYING)';
                }).catch(err => {
                    console.log('Audio playback prevented by browser:', err);
                });
            } else {
                p5Bgm.pause();
                isPlaying = false;
                bgmToggle.classList.remove('playing');
                bgmToggle.querySelector('.sound-label').innerText = 'P5 SOUNDTRACK';
            }
        });
    }

    // 4. STAT HOVER ANIMATION & INTERACTION
    const statRows = document.querySelectorAll('.stat-row');
    statRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const stars = row.querySelectorAll('.star.filled');
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.25) rotate(15deg)';
                }, index * 40);
            });
        });

        row.addEventListener('mouseleave', () => {
            const stars = row.querySelectorAll('.star.filled');
            stars.forEach(star => {
                star.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    });

    // 5. ESC KEY TO CLOSE ANY OPEN MODAL
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCallingCardModal();
            closeMissionLogsModal();
        }
    });

    console.log('Persona 5 Landing Page — Initialized for Danny Christian (Cehaa)!');
});
