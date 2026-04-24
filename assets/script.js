// ==============================
        // JavaScript Navigasi
        // ==============================
        function handleNavigation(sectionId) {
            // 1. Sembunyikan semua section materi
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                section.classList.remove('active-section');
            });

            // 2. Hapus status 'active' dari semua menu sidebar
            const menuItems = document.querySelectorAll('.nav-item');
            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            // 3. Tampilkan section yang dipilih dengan animasi
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active-section');
                window.scrollTo(0, 0); // Scroll ke atas
            }

            // 4. Aktifkan menu sidebar yang sesuai
            const activeMenu = document.getElementById('menu-' + sectionId);
            if (activeMenu) {
                activeMenu.classList.add('active');
            } else if (sectionId === 'home') {
                document.getElementById('menu-home').classList.add('active');
            }
        }