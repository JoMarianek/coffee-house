const buttons = document.querySelectorAll('.tab-item');

document.querySelector('.tab-item-coffee').addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    showSection('coffee-grid');
});
document.querySelector('.tab-item-tea').addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    showSection('tea-grid');
});
document.querySelector('.tab-item-dessert').addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    showSection('dessert-grid');
});
function showSection(sectionID) {
    var sections = document.querySelectorAll('.grid');
    sections.forEach(function(section) {
        section.classList.remove('show')
    });
    document.getElementById(sectionID).classList.add('show');
};
document.querySelector('.tab-item-coffee').classList.add('active');
showSection('coffee-grid');

document.querySelector('.refresh').addEventListener('click', function() {
    var addProducts = document.querySelectorAll('.hidden');
    addProducts.forEach(function(product) {
        product.style.display = 'flex';
    });
    this.style.display = 'none';
})