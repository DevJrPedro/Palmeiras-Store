const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

function update(direction) {

    // Remove a classe active do item e da bolinha atuais
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    // Próximo
    if (direction > 0) {
        active++;

        if (active >= total) {
            active = 0;
        }
    }

    // Anterior
    if (direction < 0) {
        active--;

        if (active < 0) {
            active = total - 1;
        }
    }

    // Ativa o novo item e bolinha
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));