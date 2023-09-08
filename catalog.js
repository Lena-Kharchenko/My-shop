import { products } from "./db.js";

const gallery = document.querySelector(".gallery-products");

      products.filter((product) => {
        if (product.category === `Садово-паркова техніка`) {
          console.log("product:", product);

          const card = `
            <li class="products-card-item">
              <p class="category-title"><span>${product.category}</span></p>
              <p>Артикул: <span>${product.articule}</span></p>
              <figure class="figure-img">
                <img src=${product.img} alt="${product.name}" />
              </figure>
              <p class="name"><span >${product.name}</span>
              <p class="brand"><span >${product.brand}</span>   <span class="model">${product.model}</span></p>
              <p class="description">Опис товару: <span>${product.description}</span></p>

              <p class="card-price">Ціна: <span>${product.price} грн</span></p>
              <button class="card-btn" disabled>Купити</button>
            </li>
          `;

          gallery.innerHTML += card;
        }
      });