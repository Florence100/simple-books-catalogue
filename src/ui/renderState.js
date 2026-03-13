const container = document.querySelector('.books-list');

export function renderLoading() {
    container.innerHTML = `<div class="state">Loading...</div>`;
}

export function renderEmptyQuery() {
    container.innerHTML = `<div class="state">Введите запрос</div>`;
}

export function renderNotFound() {
    container.innerHTML = `<div class="state">Ничего не найдено</div>`;
}

export function renderError() {
    container.innerHTML = `<div class="state">Ошибка сети</div>`;
}