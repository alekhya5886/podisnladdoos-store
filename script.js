
/* =========================================
   PODIS & LADDOOS — STORE CONFIGURATION

   Edit the values in this section first.
========================================= */

const STORE = {
  name: "Podis n Laddoos",

  // Country code + phone number, digits only.
  // Example: 919876543210
  whatsappNumber: "919652405892",

  // Your personal/business UPI ID.
  // Example: yourname@okaxi

  // Optional: use the Google Analytics Measurement ID
  // you configured in index.html.
  analyticsId: "",

  businessHours: "All days, 7 AM–10 PM",

  currency: "INR"
};

/*
  Add or edit your products here.

  category must be "podi" or "laddoo".
  price is the price in rupees for ONE pack.
  image must be a relative path inside your repository.

  Example:
  {
    id: 1,
    name: "Karam Podi",
    category: "podi",
    description: "A flavourful homemade spice powder.",
    price: 150,
    size: "200 g",
    image: "images/karam-podi.jpg",
    badge: "Bestseller"
  }
*/


const PRODUCTS = [
  // =========================
  // PODIS — ₹500 PER KG
  // Available: 100 g, 250 g, 500 g
  // =========================
  {
    id: 1,
    name: "Kandi Podi",
    category: "podi",
    description: "Traditional homemade kandi podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/kandi-podi.png",
    badge: ""
  },


  {
    id: 2,
    name: "Karivepaaku Karam Podi",
    category: "podi",
    description: "Homemade curry leaf karam podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/karivepaaku-podi.png",
    badge: ""
  },

  {
    id: 3,
    name: "Munagaaku Karam Podi",
    category: "podi",
    description: "Traditional drumstick leaf karam podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/munagaku-karapodi.png",
    badge: ""
  },

  {
    id: 4,
    name: "Kakarakai Karam Podi",
    category: "podi",
    description: "Homemade bitter gourd karam podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/kakarakai-podi.png",
    badge: ""
  },

  {
    id: 5,
    name: "Nalla Karam",
    category: "podi",
    description: "Traditional homemade nalla karam.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/nalla-karam.png",
    badge: ""
  },

  {
    id: 6,
    name: "Vellulli Karam Podi",
    category: "podi",
    description: "Homemade garlic karam podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/vellulli-podi.png",
    badge: ""
  },

  {
    id: 7,
    name: "Nuvvula Podi",
    category: "podi",
    description: "Traditional sesame podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/nuvvula-podi.png",
    badge: ""
  },

  {
    id: 8,
    name: "Kura Karam",
    category: "podi",
    description: "Homemade seasoning powder for curries.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/kura-karam.png",
    badge: ""
  },
 
  {
    id: 9,
    name: "Putnala Podi",
    category: "podi",
    description: "Homemade roasted gram podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/putnala-podi.png",
    badge: ""
  },

  {
    id: 10,
    name: "Palli Podi",
    category: "podi",
    description: "Traditional peanut podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/palli-podi.png",
    badge: ""
  },


  {
    id: 11,
    name: "Kobbari Podi",
    category: "podi",
    description: "Homemade coconut podi.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/kobbari-podi.png",
    badge: ""
  },


  {
    id: 12,
    name: "Charu Podi",
    category: "podi",
    description: "Traditional homemade rasam spice powder.",
    price: 50,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/charu-podi.png",
    badge: ""
  },
  

  // =========================
  // LADDOOS — REGULAR ₹500/KG
  // Available: 250 g, 500 g, 1 kg
  // =========================
  {
    id: 13,
    name: "Ravva Laddoo",
    category: "laddoo",
    description: "Traditional homemade ravva laddoo.",
    price: 125,
        sizes: [
        { label: "250 g", price: 150 },
        { label: "500 g", price: 300 },
        { label: "1 kg", price: 600 }
        ],
    image: "images/ravva-laddoo.png",
    badge: ""
  },

  {
    id: 14,
    name: "Bhoondi Laddoo",
    category: "laddoo",
    description: "Classic homemade bhoondi laddoo.",
    price: 500,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/bhoondi-laddoo.png",
    badge: ""
  },


  {
    id: 15,
    name: "Protein Laddoo",
    category: "laddoo",
    description: "Homemade protein laddoo.",
    price: 125,
    sizes: [
      { label: "250 g", price: 275 },
      { label: "500 g", price: 550 },
      { label: "1 kg", price: 1100 }
    ],
    image: "images/protein-laddoo.png",
    badge: "premium"
  },
  

  // Sunnundalu — ₹600/kg
  {
    id: 16,
    name: "Sunnundalu",
    category: "laddoo",
    description: "Traditional homemade sunnundalu.",
    price: 150,
    sizes: [
      { label: "250 g", price: 175 },
      { label: "500 g", price: 350 },
      { label: "1 kg", price: 700 }
    ],
    image: "images/sunnundalu.png",
    badge: ""
  },

  {
    id: 17,
    name: "Dry Fruit Laddoo",
    category: "laddoo",
    description: "Rich homemade dry fruit laddoo.",
    price: 250,
    sizes: [
      { label: "250 g", price: 250 },
      { label: "500 g", price: 500 },
      { label: "1 kg", price: 1000 }
    ],
    image: "images/dry-fruit-laddoo.png",
    badge: "Premium"
  },


  // =========================
  // PICKLES — REGULAR ₹500/KG
  // Available: 250 g, 500 g, 1 kg
  // =========================
  {
    id: 18,
    name: "Gongura Pickle",
    category: "pickle",
    description: "Traditional homemade gongura pickle.",
    price: 125,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/gongura-pickle.png",
    badge: ""
  },

  {
    id: 19,
    name: "Lemon Pickle",
    category: "pickle",
    description: "Homemade traditional lemon pickle.",
    price: 125,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/lemon-pickle.png",
    badge: ""
  },
  

  {
    id: 20,
    name: "Kothimeera Pickle",
    category: "pickle",
    description: "Homemade coriander pickle.",
    price: 125,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/kothimeera-pickle.png",
    badge: ""
  },

  {
    id: 21,
    name: "Tomato Pickle",
    category: "pickle",
    description: "Traditional homemade tomato pickle.",
    price: 125,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/tomato-pickle.png",
    badge: ""
  },
  
  // Avakaya — ₹600/kg
  {
    id: 22,
    name: "Avakaya",
    category: "pickle",
    description: "Traditional homemade avakaya pickle.",
    price: 150,
    sizes: [
      { label: "250 g", price: 200 },
      { label: "500 g", price: 400 },
      { label: "1 kg", price: 800 }
    ],
    image: "images/avakaya.png",
    badge: ""
  },


  // Magaya — ₹600/kg
  {
    id: 23,
    name: "Magaya",
    category: "pickle",
    description: "Traditional homemade magaya pickle.",
    price: 150,
    sizes: [
      { label: "250 g", price: 200 },
      { label: "500 g", price: 400 },
      { label: "1 kg", price: 800 }
    ],
    image: "images/magaya.png",
    badge: ""
  },
/* =========================================
Sweets & Hot
========================================= */
  {
    id: 24,
    name: "Bellam & Nuvvulu Kajjikayalu",
    category: "sweet",
    description: "Traditional homemade Bellam & Nuvvulu Kajjikayalu made with wheat flour.",
    price: 150,
    sizes: [
      { label: "250 g", price: 250 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/nuvvula-kajjikayalu.png",
    badge: ""
  },
  {
    id: 25,
    name: "Kobbari & Putnalu Kajjikayalu",
    category: "sweet",
    description: "Traditional homemade Kobbari & Putnalu Kajjikayalu made with wheat flour.",
    price: 150,
    sizes: [
      { label: "250 g", price: 250 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/bellam-kajjikayalu.png",
    badge: ""
  },
    {
    id: 26,
    name: "Corn Flakes Mixture",
    category: "sweet",
    description: "Traditional homemade corn flakes mixture.",
    price: 150,
    sizes: [
      { label: "250 g", price: 175 },
      { label: "500 g", price: 250 },
      { label: "1 kg", price: 500 }
    ],
    image: "images/cornflakes-mixture.png",
    badge: ""
  },
  {
    id: 27,
    name: "Bellam Gavvalu with Wheat flour",
    category: "sweet",
    description: "Traditional homemade Bellam Gavvalu made with wheat flour.",
    price: 150,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/gavvalu.png",
    badge: ""
  },
    {
    id: 28,
    name: "Karapusa",
    category: "hot",
    description: "Traditional homemade karapusa",
    price: 150,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/karapusa.png",
    badge: ""
  },
  {
    id: 29,
    name: "Chekkalu",
    category: "hot",
    description: "Traditional homemade chekkalu",
    price: 150,
    sizes: [
      { label: "250 g", price: 150 },
      { label: "500 g", price: 300 },
      { label: "1 kg", price: 600 }
    ],
    image: "images/chekkalu.png",
    badge: ""
  }
];



/* =========================================
   STORE LOGIC
========================================= */

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#product-grid");
const cartItemsElement = $("#cart-items");
const cartCountElement = $("#cart-count");
const cartTotalElement = $("#cart-total");
const checkoutTotalElement = $("#checkout-total");
const checkoutForm = $("#checkout-form");

let cart = [];
let activeCategory = "all";
let searchQuery = "";
let toastTimeout;

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: STORE.currency,
    maximumFractionDigits: 2
  }).format(amount);

function trackEvent(eventName, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

/* =========================================
   STORE BRANDING
========================================= */

function initializeBranding() {
  document.title = `${STORE.name} | Homemade Goodness`;

  const brandName = $("#brand-name");
  const footerBrand = $("#footer-brand");
  const footerName = $("#footer-name");
  const year = $("#year");
  const hours = $("#business-hours");
  const upiDisplay = $("#upi-display");

  if (brandName) brandName.textContent = STORE.name;
  if (footerBrand) footerBrand.textContent = STORE.name;
  if (footerName) footerName.textContent = STORE.name;
  if (year) year.textContent = new Date().getFullYear();
  if (hours) hours.textContent = STORE.businessHours;
  if (upiDisplay) upiDisplay.textContent = STORE.upiId;

  const qr = $("#payment-qr");
  const qrPlaceholder = $("#qr-placeholder");

  if (qr) {
    qr.addEventListener("load", () => {
      qr.hidden = false;
      if (qrPlaceholder) qrPlaceholder.hidden = true;
    });

    qr.addEventListener("error", () => {
      qr.hidden = true;
      if (qrPlaceholder) qrPlaceholder.hidden = false;
    });

    if (qr.complete && qr.naturalWidth > 0) {
      qr.hidden = false;
      if (qrPlaceholder) qrPlaceholder.hidden = true;
    }
  }
}

/* =========================================
   PRODUCT CATALOGUE
========================================= */

function renderProducts() {
  if (!productGrid) return;

  const searchInput = $("#product-search");
  searchQuery = (searchInput?.value || "").trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const searchableText =
      `${product.name} ${product.description}`.toLowerCase();

    return matchesCategory && searchableText.includes(searchQuery);
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      `<p class="no-products">No products found. Try another search.</p>`;
    return;
  }

  productGrid.innerHTML = filteredProducts.map((product) => {
    const sizes = product.sizes || [
      { label: product.size || "1 pack", price: product.price }
    ];

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            class="product-image"
            loading="lazy"
            onerror="this.style.display='none'"
          />
        </div>

        <div class="product-details">
          ${product.badge
            ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
            : ""}

          <h3>${escapeHTML(product.name)}</h3>
          <p>${escapeHTML(product.description)}</p>

          <label for="size-${product.id}">Choose size</label>

          <select
            id="size-${product.id}"
            class="product-size"
          >
            ${sizes.map((size, index) => `
              <option value="${index}">
                ${escapeHTML(size.label)}
              </option>
            `).join("")}
          </select>

          <p class="product-price" id="price-${product.id}">
            ${money(sizes[0].price)}
          </p>

          <button
            type="button"
            data-add="${product.id}"
            class="add-to-cart-button"
          >
            Add to cart
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function updateProductPrice(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  const select = $(`#size-${productId}`);

  if (!product || !select) return;

  const sizes = product.sizes || [
    { label: product.size || "1 pack", price: product.price }
  ];

  const selectedSize = sizes[Number(select.value)];
  const priceElement = $(`#price-${productId}`);

  if (priceElement && selectedSize) {
    priceElement.textContent = money(selectedSize.price);
  }
}

$("#category-filters")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter-button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });

  renderProducts();

  trackEvent("product_category_selected", {
    category: activeCategory
  });
});

$("#product-search")?.addEventListener("input", renderProducts);

productGrid?.addEventListener("change", (event) => {
  const select = event.target.closest(".product-size");
  if (!select) return;

  const productId = Number(select.id.replace("size-", ""));
  updateProductPrice(productId);
});

productGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(Number(button.dataset.add));
});

/* =========================================
   SHOPPING CART
========================================= */

function addToCart(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const select = $(`#size-${productId}`);

  const sizes = product.sizes || [
    { label: product.size || "1 pack", price: product.price }
  ];

  const selectedSize = select
    ? sizes[Number(select.value)]
    : sizes[0];

  if (!selectedSize) {
    showToast("Please choose a product size.");
    return;
  }

  const existingItem = cart.find((item) =>
    item.id === product.id &&
    item.size === selectedSize.label
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      size: selectedSize.label,
      price: selectedSize.price,
      image: product.image,
      quantity: 1
    });
  }

  renderCart();

  showToast(
    `${product.name} (${selectedSize.label}) added to your basket!`
  );

  trackEvent("add_to_cart", {
    currency: STORE.currency,
    value: selectedSize.price,
    items: [{
      item_id: String(product.id),
      item_name: product.name,
      item_variant: selectedSize.label,
      price: selectedSize.price,
      quantity: 1
    }]
  });
}

function addSelectedProductToCart(productId) {
  addToCart(productId);
}

function getCartDetails() {
  return cart.map((item) => ({
    ...item,
    lineTotal: item.price * item.quantity
  }));
}

function getCartTotal() {
  return getCartDetails().reduce(
    (total, item) => total + item.lineTotal,
    0
  );
}

function changeQuantity(productId, change, size) {
  const item = cart.find((entry) =>
    entry.id === productId && entry.size === size
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry !== item);
  }

  renderCart();
}

function renderCart() {
  if (!cartItemsElement) return;

  const items = getCartDetails();
  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartCountElement) cartCountElement.textContent = count;
  if (cartTotalElement) cartTotalElement.textContent = money(getCartTotal());
  if (checkoutTotalElement) {
    checkoutTotalElement.textContent = money(getCartTotal());
  }

  if (items.length === 0) {
    cartItemsElement.innerHTML = `
      <div class="empty-cart">
        <p style="font-size:32px">🥣</p>
        <p>Your basket is waiting for something delicious.</p>
        <button
          class="secondary-button"
          id="browse-products"
          type="button"
        >
          Browse products
        </button>
      </div>
    `;
    return;
  }

  cartItemsElement.innerHTML = items.map((item) => `
    <div class="cart-item">
      <div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${money(item.price)} · ${escapeHTML(item.size)}</p>

        <div class="quantity-controls">
          <button
            type="button"
            data-quantity="${item.id}"
            data-size="${escapeHTML(item.size)}"
            data-change="-1"
            aria-label="Decrease quantity"
          >−</button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-quantity="${item.id}"
            data-size="${escapeHTML(item.size)}"
            data-change="1"
            aria-label="Increase quantity"
          >+</button>

          <button
            type="button"
            class="remove-button"
            data-quantity="${item.id}"
            data-size="${escapeHTML(item.size)}"
            data-change="remove"
          >Remove</button>
        </div>
      </div>

      <div class="cart-item-price">${money(item.lineTotal)}</div>
    </div>
  `).join("");
}

cartItemsElement?.addEventListener("click", (event) => {
  if (event.target.id === "browse-products") {
    closeCart();
    $("#products")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const button = event.target.closest("[data-quantity]");
  if (!button) return;

  const productId = Number(button.dataset.quantity);
  const size = button.dataset.size;
  const change = button.dataset.change;

  if (change === "remove") {
    cart = cart.filter((item) =>
      !(item.id === productId && item.size === size)
    );
    renderCart();
    return;
  }

  changeQuantity(productId, Number(change), size);
});

/* =========================================
   CART DRAWER
========================================= */

const cartDrawer = $("#cart-drawer");
const cartOverlay = $("#cart-overlay");

function openCart() {
  if (!cartDrawer || !cartOverlay) return;

  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.classList.add("no-scroll");

  $("#close-cart")?.focus();
}

function closeCart() {
  if (!cartDrawer || !cartOverlay) return;

  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.classList.remove("no-scroll");
}

$("#open-cart")?.addEventListener("click", openCart);
$("#close-cart")?.addEventListener("click", closeCart);
cartOverlay?.addEventListener("click", closeCart);

/* =========================================
   CHECKOUT
========================================= */

const checkoutOverlay = $("#checkout-overlay");

function openCheckout() {
  if (cart.length === 0) {
    showToast("Add at least one product to your basket.");
    return;
  }

  closeCart();

  if (checkoutTotalElement) {
    checkoutTotalElement.textContent = money(getCartTotal());
  }

  checkoutOverlay.hidden = false;
  document.body.classList.add("no-scroll");

  $("#customer-name")?.focus();

  trackEvent("begin_checkout", {
    currency: STORE.currency,
    value: getCartTotal()
  });
}

function closeCheckout() {
  if (!checkoutOverlay) return;

  checkoutOverlay.hidden = true;
  document.body.classList.remove("no-scroll");
}

$("#checkout-button")?.addEventListener("click", openCheckout);
$("#close-checkout")?.addEventListener("click", closeCheckout);

checkoutOverlay?.addEventListener("click", (event) => {
  if (event.target === checkoutOverlay) {
    closeCheckout();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (checkoutOverlay && !checkoutOverlay.hidden) {
    closeCheckout();
  } else {
    closeCart();
  }
});

/* =========================================
   UPI PAYMENT DETAILS
========================================= */

$("#copy-upi")?.addEventListener("click", async () => {
  const upiId = STORE.upiId.trim();

  if (!upiId) {
    showToast("Add your UPI ID in script.js first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(upiId);
    showToast("UPI ID copied!");
  } catch {
    showToast(`Copy your UPI ID manually: ${upiId}`);
  }
});

/* =========================================
   WHATSAPP CONTACT & ORDER
========================================= */

/*
  IMPORTANT:
  WhatsApp requires the full phone number with country code,
  digits only. Your current number is already in this format.

  We open a new tab synchronously during the button click to
  reduce the chance of popup blocking.
*/

function getWhatsAppUrl(message) {
  const number = String(STORE.whatsappNumber || "").replace(/\D/g, "");

  if (!number || number.length < 10) {
    showToast("Please check the WhatsApp number in script.js.");
    return null;
  }

  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message, newTab = true) {
  const url = getWhatsAppUrl(message);
  if (!url) return;

  if (newTab) {
    const whatsappWindow = window.open(url, "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
      return;
    }
  }

  // Fallback if the browser blocks opening a new tab.
  window.location.assign(url);
}

$("#contact-whatsapp")?.addEventListener("click", () => {
  openWhatsApp(
    `Hi ${STORE.name}! I'd like to know more about your products.`
  );
});

/* =========================================
   PLACE ORDER
========================================= */

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      closeCheckout();
      showToast("Your basket is empty.");
      return;
    }

    if (!checkoutForm.reportValidity()) return;

    const formData = new FormData(checkoutForm);

    const customer = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      notes: String(formData.get("notes") || "").trim()
    };

    if (!customer.name || !customer.phone || !customer.address) {
      showToast("Please fill in your name, phone and address.");
      return;
    }

    const items = getCartDetails();
    const subtotal = getCartTotal();

    const productLines = items.map((item) =>
      `• ${item.name} (${item.size}) x ${item.quantity} = ${money(item.lineTotal)}`
    );

    const message = [
      `Hi ${STORE.name}! I'd like to place an order.`,
      "",
      "CUSTOMER DETAILS",
      `Name: ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Delivery address: ${customer.address}`,
      customer.notes ? `Notes: ${customer.notes}` : "",
      "",
      "ORDER ITEMS",
      ...productLines,
      "",
      `Subtotal: ${money(subtotal)}`,
      "Delivery charges: To be confirmed",
      "",
      "Total: To be confirmed",
    ].filter(Boolean).join("\n");

    trackEvent("whatsapp_order_initiated", {
      currency: STORE.currency,
      value: subtotal,
      item_count: items.length
    });

    /*
      Open WhatsApp without submitting/reloading the website.
      The customer must still press Send in WhatsApp.
    */
    openWhatsApp(message, true);
  });
}

/* =========================================
   INITIALIZE WEBSITE
========================================= */

initializeBranding();
renderProducts();
renderCart();
