// ==========================================
// BASE DE DATOS DE PRODUCTOS
// ==========================================
const products = [
  // MUAY THAI
  {
    id: 1,
    name: "Guantes de Muay Thai Profesional",
    category: "muay-thai",
    price: 79.99,
    stock: 15,
    description: "Guantes de alta calidad para entrenamiento y competición",
    image: "https://images.unsplash.com/photo-1600882477700-85a0ca245872?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Short de Muay Thai Premium",
    category: "muay-thai",
    price: 45.99,
    stock: 25,
    description: "Shorts tradicionales tailandeses, diseño moderno",
    image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Espinilleras Muay Thai Pro",
    category: "muay-thai",
    price: 59.99,
    stock: 18,
    description: "Protección completa para tibias y empeines",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=600&h=600&fit=crop",
  },

  // BOXEO
  {
    id: 4,
    name: "Guantes de Boxeo 16oz",
    category: "boxeo",
    price: 89.99,
    stock: 20,
    description: "Guantes profesionales con gel protector",
    image: "https://images.unsplash.com/photo-1509255502621-13af63a46abf?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Vendas de Boxeo Elásticas",
    category: "boxeo",
    price: 12.99,
    stock: 50,
    description: "Vendas de 4 metros con cierre de velcro",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Casco de Boxeo Ajustable",
    category: "boxeo",
    price: 69.99,
    stock: 12,
    description: "Protección total con visibilidad óptima",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=600&fit=crop",
  },

  // JUDO
  {
    id: 7,
    name: "Kimono de Judo Blanco",
    category: "judo",
    price: 99.99,
    stock: 30,
    description: "Gi tradicional de algodón resistente",
    image: "https://images.unsplash.com/photo-1555597408-26bc8e548e46?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    name: "Cinturón de Judo - Varios Colores",
    category: "judo",
    price: 15.99,
    stock: 100,
    description: "Cinturones oficiales IJF aprobados",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop",
  },

  // MMA
  {
    id: 9,
    name: "Guantes MMA 4oz Competition",
    category: "mma",
    price: 74.99,
    stock: 22,
    description: "Guantes abiertos para competición MMA",
    image: "https://images.unsplash.com/photo-1564468781192-711d7d4e0cd8?w=600&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Bucal Profesional MMA",
    category: "mma",
    price: 24.99,
    stock: 40,
    description: "Protector bucal moldeable de doble capa",
    image: "https://images.unsplash.com/photo-1615117972428-28de87caa61d?w=600&h=600&fit=crop",
  },
  {
    id: 11,
    name: "Shorts MMA Fight",
    category: "mma",
    price: 54.99,
    stock: 28,
    description: "Shorts de competición con sistema stretch",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
  },

  // BJJ
  {
    id: 12,
    name: "Kimono BJJ A2 Azul",
    category: "bjj",
    price: 129.99,
    stock: 15,
    description: "Gi de Brazilian Jiu-Jitsu pre-encogido",
    image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=600&h=600&fit=crop",
  },
  {
    id: 13,
    name: "Rashguard BJJ Compresión",
    category: "bjj",
    price: 44.99,
    stock: 35,
    description: "Camiseta de compresión manga larga",
    image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=600&h=600&fit=crop",
  },
  {
    id: 14,
    name: "Cinturón BJJ Negro",
    category: "bjj",
    price: 19.99,
    stock: 8,
    description: "Cinturón de grado superior BJJ",
    image: "https://images.unsplash.com/photo-1598518142144-0a88064fa548?w=600&h=600&fit=crop",
  },

  // ROPA HOMBRES
  {
    id: 15,
    name: "Camiseta Fight Hombre",
    category: "ropa-hombres",
    price: 29.99,
    stock: 45,
    description: "Camiseta de algodón con diseño exclusivo",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 16,
    name: "Pantalón Chándal Hombre",
    category: "ropa-hombres",
    price: 39.99,
    stock: 30,
    description: "Pantalón deportivo cómodo y resistente",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
  },

  // ROPA MUJERES
  {
    id: 17,
    name: "Top Deportivo Mujer",
    category: "ropa-mujeres",
    price: 34.99,
    stock: 40,
    description: "Top de alto impacto para entrenamientos intensos",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
  },
  {
    id: 18,
    name: "Leggings Fight Mujer",
    category: "ropa-mujeres",
    price: 44.99,
    stock: 35,
    description: "Mallas de compresión con diseño moderno",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop",
  },

  // ROPA NIÑOS
  {
    id: 19,
    name: "Kimono Infantil",
    category: "ropa-ninos",
    price: 49.99,
    stock: 25,
    description: "Gi para niños, varios tamaños disponibles",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&h=600&fit=crop",
  },
  {
    id: 20,
    name: "Guantes Infantiles Boxeo",
    category: "ropa-ninos",
    price: 34.99,
    stock: 20,
    description: "Guantes de boxeo 6oz para niños",
    image: "https://images.unsplash.com/photo-1615117950532-a85e3e01c8f1?w=600&h=600&fit=crop",
  },

  // EQUIPAMIENTO
  {
    id: 21,
    name: "Saco de Boxeo 120cm",
    category: "equipamiento",
    price: 149.99,
    stock: 10,
    description: "Saco pesado de 35kg con cadena incluida",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 22,
    name: "Paos de Golpeo Curvos",
    category: "equipamiento",
    price: 64.99,
    stock: 18,
    description: "Par de paos ergonómicos para entrenamiento",
    image: "https://images.unsplash.com/photo-1562771379-2e81b4109cfc?w=600&h=600&fit=crop",
  },
  {
    id: 23,
    name: "Colchoneta Tatami 100x100cm",
    category: "equipamiento",
    price: 89.99,
    stock: 15,
    description: "Colchoneta puzzle EVA 4cm grosor",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=600&h=600&fit=crop",
  },

  // ACCESORIOS
  {
    id: 24,
    name: "Bolsa Deportiva Fight",
    category: "accesorios",
    price: 39.99,
    stock: 40,
    description: "Bolsa espaciosa con compartimentos",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
  },
  {
    id: 25,
    name: "Botella Shaker 700ml",
    category: "accesorios",
    price: 14.99,
    stock: 60,
    description: "Botella mezcladora para batidos",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=600&fit=crop",
  },
  {
    id: 26,
    name: "Toalla Microfibra",
    category: "accesorios",
    price: 19.99,
    stock: 50,
    description: "Toalla de secado rápido 80x40cm",
    image: "https://images.unsplash.com/photo-1583248090297-db65bfe1a8ec?w=600&h=600&fit=crop",
  },
];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let cart = JSON.parse(localStorage.getItem("fightGearCart")) || [];
let currentCategory = "todos";
let currentSearchTerm = "";

// ==========================================
// FUNCIONES DE RENDERIZADO
// ==========================================
function renderProducts(productsToRender) {
  const productsGrid = document.getElementById("productsGrid");
  const noResults = document.getElementById("noResults");

  if (productsToRender.length === 0) {
    productsGrid.style.display = "none";
    noResults.style.display = "block";
    return;
  }

  productsGrid.style.display = "grid";
  noResults.style.display = "none";

  productsGrid.innerHTML = productsToRender
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22280%22%3E%3Crect fill=%22%231e1e2e%22 width=%22280%22 height=%22280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23ff6b35%22 font-size=%2220%22%3E${product.name.substring(0, 15)}%3C/text%3E%3C/svg%3E'">
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div>
                        <div class="product-price">€${product.price.toFixed(2)}</div>
                        <div class="product-stock">Stock: ${product.stock}</div>
                    </div>
                    <button 
                        class="add-to-cart-btn" 
                        onclick="addToCart(${product.id})"
                        ${product.stock === 0 ? "disabled" : ""}
                    >
                        ${product.stock === 0 ? "❌ Sin Stock" : "🛒 Añadir"}
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function getCategoryName(category) {
  const categoryNames = {
    "muay-thai": "🥊 Muay Thai",
    boxeo: "🥊 Boxeo",
    judo: "🥋 Judo",
    mma: "🤼 MMA",
    bjj: "🥋 BJJ",
    "ropa-hombres": "👕 Ropa Hombres",
    "ropa-mujeres": "👚 Ropa Mujeres",
    "ropa-ninos": "👶 Ropa Niños",
    equipamiento: "🎯 Equipamiento",
    accesorios: "🎒 Accesorios",
  };
  return categoryNames[category] || category;
}

function filterProducts() {
  let filtered = products;

  // Filtrar por categoría
  if (currentCategory !== "todos") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  // Filtrar por búsqueda
  if (currentSearchTerm) {
    const searchLower = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower),
    );
  }

  return filtered;
}

function updateSectionTitle() {
  const sectionTitle = document.getElementById("sectionTitle");
  if (currentSearchTerm) {
    sectionTitle.textContent = `Resultados para: "${currentSearchTerm}"`;
  } else if (currentCategory === "todos") {
    sectionTitle.textContent = "Todos los Productos";
  } else {
    sectionTitle.textContent = getCategoryName(currentCategory);
  }
}

// ==========================================
// FUNCIONES DEL CARRITO
// ==========================================
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product || product.stock === 0) {
    alert("❌ Producto sin stock");
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      alert("❌ No hay más stock disponible");
      return;
    }
    existingItem.quantity++;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      maxStock: product.stock,
    });
  }

  saveCart();
  updateCartCount();

  // Feedback visual
  const btn = event.target;
  const originalText = btn.textContent;
  btn.textContent = "✅ Añadido";
  btn.style.background = "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)";

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
  }, 1000);
}

function saveCart() {
  localStorage.setItem("fightGearCart", JSON.stringify(cart));
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (totalItems > 0) {
    cartCount.style.animation = "none";
    setTimeout(() => {
      cartCount.style.animation = "pulse 0.5s ease";
    }, 10);
  }
}

function showCart() {
  window.location.href = "cart.html";
}

// ==========================================
// CART PAGE FUNCTIONS
// ==========================================
function renderCartPage() {
  const cartEmpty = document.getElementById("cartEmpty");
  const cartContent = document.getElementById("cartContent");
  const cartItemsList = document.getElementById("cartItemsList");

  if (!cartEmpty || !cartContent || !cartItemsList) return;

  updateCartCount();

  if (cart.length === 0) {
    cartEmpty.style.display = "flex";
    cartContent.style.display = "none";
    return;
  }

  cartEmpty.style.display = "none";
  cartContent.style.display = "grid";

  cartItemsList.innerHTML = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      const itemImage = product
        ? product.image
        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%231e1e2e' width='80' height='80'/%3E%3C/svg%3E";
      const lineTotal = item.price * item.quantity;

      return `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-product">
            <img src="${itemImage}" alt="${item.name}" class="cart-item-image"
              onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect fill=%22%231e1e2e%22 width=%2280%22 height=%2280%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23ff6b35%22 font-size=%2212%22%3EImg%3C/text%3E%3C/svg%3E'">
            <div class="cart-item-details">
              <h3 class="cart-item-name">${item.name}</h3>
              <span class="cart-item-unit-price">€${item.price.toFixed(2)} / ud.</span>
            </div>
          </div>
          <div class="cart-item-price">€${item.price.toFixed(2)}</div>
          <div class="cart-item-quantity">
            <div class="quantity-controls">
              <button class="qty-btn qty-minus" onclick="updateQuantity(${item.id}, -1)">−</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn qty-plus" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-total">€${lineTotal.toFixed(2)}</div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Eliminar producto">
            🗑️
          </button>
        </div>
      `;
    })
    .join("");

  updateCartSummary();

  // Clear cart button
  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.onclick = clearCart;
  }

  // Checkout button
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const shippingCost = total >= 50 ? 0 : 4.99;
      const finalTotal = total + shippingCost;
      alert(
        `✅ ¡Gracias por tu compra!\n\n💰 Total: €${finalTotal.toFixed(2)}\n📦 Tu pedido será procesado en breve.\n\n(Funcionalidad de pago en desarrollo)`
      );
    };
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCartPage();
}

function updateQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  const product = products.find((p) => p.id === productId);
  const newQty = item.quantity + delta;

  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }

  if (product && newQty > product.stock) {
    alert(`❌ Solo hay ${product.stock} unidades disponibles`);
    return;
  }

  item.quantity = newQty;
  saveCart();
  renderCartPage();
}

function clearCart() {
  if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
    cart = [];
    saveCart();
    renderCartPage();
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shippingCost;

  const subtotalEl = document.getElementById("summarySubtotal");
  const shippingEl = document.getElementById("summaryShipping");
  const totalEl = document.getElementById("summaryTotal");

  if (subtotalEl) subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
  if (shippingEl) {
    if (shippingCost === 0) {
      shippingEl.textContent = "Gratis";
      shippingEl.classList.add("free");
    } else {
      shippingEl.textContent = `€${shippingCost.toFixed(2)}`;
      shippingEl.classList.remove("free");
    }
  }
  if (totalEl) totalEl.textContent = `€${total.toFixed(2)}`;
}

// ==========================================
// EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Check if we are on the main store page
  const productsGrid = document.getElementById("productsGrid");

  if (productsGrid) {
    // Renderizar productos iniciales
    renderProducts(products);
    updateCartCount();
    updateSectionTitle();

    // Categorías
    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Actualizar activo
        categoryBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Filtrar
        currentCategory = btn.dataset.category;
        currentSearchTerm = ""; // Limpiar búsqueda
        document.getElementById("searchInput").value = "";

        updateSectionTitle();
        renderProducts(filterProducts());
      });
    });

    // Búsqueda
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch();
      }
    });

    function performSearch() {
      currentSearchTerm = searchInput.value.trim();
      updateSectionTitle();
      renderProducts(filterProducts());
    }

    // Hero CTA
    const heroCta = document.querySelector(".hero-cta");
    if (heroCta) {
      heroCta.addEventListener("click", () => {
        document
          .querySelector(".container")
          .scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  // Carrito button (works on both pages)
  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.addEventListener("click", showCart);
  }

  // Update cart count on load (works on both pages)
  updateCartCount();
});

// Animación para el contador del carrito
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

