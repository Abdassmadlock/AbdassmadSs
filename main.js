// إرسال النموذج
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
    document.getElementById('contact-form').reset();
});

