document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        let input = this.parentElement.querySelector('input');
        let value = parseInt(input.value);
        if (this.textContent === '-') {
            if (value > 1) input.value = value - 1;
        } else {
            input.value = value + 1;
        }
    });
});