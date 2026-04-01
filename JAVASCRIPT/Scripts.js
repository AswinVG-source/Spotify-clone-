  /* =========================================
    1. HORIZONTAL SCROLLING (VIDEOS & ARTISTS)
    ========================================= */
    const row = document.getElementById('videoRow');
    const btnRight = document.getElementById('scrollRightBtn');
    const btnLeft = document.getElementById('scrollLeftBtn');

    if (row && btnRight && btnLeft) {
        btnRight.addEventListener('click', () => row.scrollBy({ left: 200, behavior: 'smooth' }));
        btnLeft.addEventListener('click', () => row.scrollBy({ left: -200, behavior: 'smooth' }));
    }

    const artistRow = document.getElementById('artistRow');
    const artistBtnRight = document.getElementById('artistScrollRight');
    const artistBtnLeft = document.getElementById('artistScrollLeft');

    if (artistRow && artistBtnRight && artistBtnLeft) {
        artistBtnRight.addEventListener('click', () => artistRow.scrollBy({ left: 300, behavior: 'smooth' }));
        artistBtnLeft.addEventListener('click', () => artistRow.scrollBy({ left: -300, behavior: 'smooth' }));
    }

    /* =========================================
    2. SIDEBAR TOGGLE LOGIC (LEFT & RIGHT)
    ========================================= */
    const body = document.body;

    // RIGHT SIDEBAR
    const rightCollapseBtn = document.querySelector('.collapse-trigger'); 
    const rightExpandBtn = document.getElementById('expand-right-trigger');

    if (rightCollapseBtn && rightExpandBtn) {
        rightCollapseBtn.addEventListener('click', () => {
            body.classList.add('right-sidebar-collapsed');
        });

        rightExpandBtn.addEventListener('click', () => {
            body.classList.remove('right-sidebar-collapsed');
        });
    }

    // LEFT SIDEBAR (Updated for multi-trigger support)
    const leftStateBtn = document.getElementById('left-state-btn'); // The bracket that appears on hover
    const leftCollapseBtn = document.getElementById('left-collapse-btn'); // The bracket in the expanded header

    [leftStateBtn, leftCollapseBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                body.classList.toggle('left-sidebar-expanded');
            });
        }
    });
