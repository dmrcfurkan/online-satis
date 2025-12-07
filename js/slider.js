 document.addEventListener('DOMContentLoaded', function() {
        const sliderItems = document.querySelectorAll('.slider-item');
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');
        let currentSlide = 0;
        let slideInterval;
        
        // Başlangıçta slider'ı göster
        showSlide(currentSlide);
        
        // Otomatik geçişi başlat
        startAutoSlide();
        
        // Önceki slayt fonksiyonu
        function prevSlide() {
            currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
            showSlide(currentSlide);
            resetAutoSlide();
        }
        
        // Sonraki slayt fonksiyonu
        function nextSlide() {
            currentSlide = (currentSlide + 1) % sliderItems.length;
            showSlide(currentSlide);
            resetAutoSlide();
        }
        
        // Belirli bir slaytı gösterme fonksiyonu
        function showSlide(index) {
            // Tüm slaytları gizle
            sliderItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Aktif slaytı göster
            sliderItems[index].classList.add('active');
        }
        
        // Otomatik slider başlatma
        function startAutoSlide() {
            slideInterval = setInterval(nextSlide, 3000); // 3 saniye
        }
        
        // Otomatik slider'ı sıfırlama (kullanıcı etkileşimi sonrası)
        function resetAutoSlide() {
            clearInterval(slideInterval);
            startAutoSlide();
        }
        
        // Ok tuşlarına tıklama olayları
        prevArrow.addEventListener('click', prevSlide);
        nextArrow.addEventListener('click', nextSlide);
        
        // Fare slider üzerine geldiğinde otomatik geçişi durdur
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        // Fare slider'dan ayrıldığında otomatik geçişi tekrar başlat
        sliderContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
        
        // Klavye tuşları ile kontrol (isteğe bağlı)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
    });