document.getElementById('hamburgerBtn').onclick = function() {
        document.getElementById('modalWindow').style.display = 'flex'; // Используем flex для центрирования
    }

document.getElementById('closeModal').onclick = function() {
        document.getElementById('modalWindow').style.display = 'none';
    }

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
        const modal = document.getElementById('modalWindow');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }


document.getElementById('downloadapp').onclick = function() {
        window.location.href = 'https://www.rustore.ru/catalog/app/com.insight.client';
    };
document.getElementById('maindownloadapp').onclick = function() {
        window.location.href = 'https://www.rustore.ru/catalog/app/com.insight.client';
    };
document.getElementById('vkbtn').onclick = function() {
        window.location.href = 'https://vk.com/insight_app';
    };