
const itemEl = document.querySelectorAll('.item');

console.log('Number of categories:', itemEl.length);

itemEl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
});