<script>
document.addEventListener('DOMContentLoaded', function() {
    // Находим все ссылки с якорями (#home, #catalog, #contacts...)
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартный переход

            // Получаем координаты цели
            let targetId = this.getAttribute('href').substring(1); // Убираем символ #
            let targetElement = document.getElementById(targetId);
            
            if (!targetElement) return;

            // Плавная прокрутка до элемента
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
</script>
