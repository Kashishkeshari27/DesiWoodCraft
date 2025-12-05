fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(p => {
      html += `
        <div class="col-md-3">
          <div class="card p-2">
            <img src="images/${p.image}" class="card-img-top">
            <h5>${p.name}</h5>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>`;
    });
    document.getElementById("product-list").innerHTML = html;
  });
