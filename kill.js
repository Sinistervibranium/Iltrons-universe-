document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.cyrus').forEach(product => {
    const price = parseFloat(product.getAttribute('data-price')) || 0;
    const category = product.getAttribute('data-category') || '';

    if (price <= 0 || category === 'hidden') {
      product.style.display = 'none'; // <== REMOVE THIS LINE to show all products
    }
  });
});

