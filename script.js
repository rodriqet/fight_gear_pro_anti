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
    image: "assets/muay-thai-gloves.jpg",
  },
  {
    id: 2,
    name: "Short de Muay Thai Premium",
    category: "muay-thai",
    price: 45.99,
    stock: 25,
    description: "Shorts tradicionales tailandeses, diseño moderno",
    image: "assets/muay-thai-shorts.jpg",
  },
  {
    id: 3,
    name: "Espinilleras Muay Thai Pro",
    category: "muay-thai",
    price: 59.99,
    stock: 18,
    description: "Protección completa para tibias y empeines",
    image: "assets/shin-guards.jpg",
  },

  // BOXEO
  {
    id: 4,
    name: "Guantes de Boxeo 16oz",
    category: "boxeo",
    price: 89.99,
    stock: 20,
    description: "Guantes profesionales con gel protector",
    image: "assets/boxing-gloves.jpg",
  },
  {
    id: 5,
    name: "Vendas de Boxeo Elásticas",
    category: "boxeo",
    price: 12.99,
    stock: 50,
    description: "Vendas de 4 metros con cierre de velcro",
    image: "assets/hand-wraps.jpg",
  },
  {
    id: 6,
    name: "Casco de Boxeo Ajustable",
    category: "boxeo",
    price: 69.99,
    stock: 12,
    description: "Protección total con visibilidad óptima",
    image: "assets/boxing-headgear.jpg",
  },

  // JUDO
  {
    id: 7,
    name: "Kimono de Judo Blanco",
    category: "judo",
    price: 99.99,
    stock: 30,
    description: "Gi tradicional de algodón resistente",
    image: "assets/judo-gi-white.jpg",
  },
  {
    id: 8,
    name: "Cinturón de Judo - Varios Colores",
    category: "judo",
    price: 15.99,
    stock: 100,
    description: "Cinturones oficiales IJF aprobados",
    image: "assets/judo-belt.jpg",
  },

  // MMA
  {
    id: 9,
    name: "Guantes MMA 4oz Competition",
    category: "mma",
    price: 74.99,
    stock: 22,
    description: "Guantes abiertos para competición MMA",
    image: "assets/mma-gloves.jpg",
  },
  {
    id: 10,
    name: "Bucal Profesional MMA",
    category: "mma",
    price: 24.99,
    stock: 40,
    description: "Protector bucal moldeable de doble capa",
    image: "assets/mouthguard.jpg",
  },
  {
    id: 11,
    name: "Shorts MMA Fight",
    category: "mma",
    price: 54.99,
    stock: 28,
    description: "Shorts de competición con sistema stretch",
    image: "assets/mma-shorts.jpg",
  },

  // BJJ
  {
    id: 12,
    name: "Kimono BJJ A2 Azul",
    category: "bjj",
    price: 129.99,
    stock: 15,
    description: "Gi de Brazilian Jiu-Jitsu pre-encogido",
    image: "assets/bjj-gi-blue.jpg",
  },
  {
    id: 13,
    name: "Rashguard BJJ Compresión",
    category: "bjj",
    price: 44.99,
    stock: 35,
    description: "Camiseta de compresión manga larga",
    image: "assets/rashguard.jpg",
  },
  {
    id: 14,
    name: "Cinturón BJJ Negro",
    category: "bjj",
    price: 19.99,
    stock: 8,
    description: "Cinturón de grado superior BJJ",
    image: "assets/bjj-belt-black.jpg",
  },

  // ROPA HOMBRES
  {
    id: 15,
    name: "Camiseta Fight Hombre",
    category: "ropa-hombres",
    price: 29.99,
    stock: 45,
    description: "Camiseta de algodón con diseño exclusivo",
    image: "assets/mens-shirt.jpg",
  },
  {
    id: 16,
    name: "Pantalón Chándal Hombre",
    category: "ropa-hombres",
    price: 39.99,
    stock: 30,
    description: "Pantalón deportivo cómodo y resistente",
    image: "assets/mens-pants.jpg",
  },

  // ROPA MUJERES
  {
    id: 17,
    name: "Top Deportivo Mujer",
    category: "ropa-mujeres",
    price: 34.99,
    stock: 40,
    description: "Top de alto impacto para entrenamientos intensos",
    image: "assets/womens-top.jpg",
  },
  {
    id: 18,
    name: "Leggings Fight Mujer",
    category: "ropa-mujeres",
    price: 44.99,
    stock: 35,
    description: "Mallas de compresión con diseño moderno",
    image: "assets/womens-leggings.jpg",
  },

  // ROPA NIÑOS
  {
    id: 19,
    name: "Kimono Infantil",
    category: "ropa-ninos",
    price: 49.99,
    stock: 25,
    description: "Gi para niños, varios tamaños disponibles",
    image: "assets/kids-gi.jpg",
  },
  {
    id: 20,
    name: "Guantes Infantiles Boxeo",
    category: "ropa-ninos",
    price: 34.99,
    stock: 20,
    description: "Guantes de boxeo 6oz para niños",
    image: "assets/kids-gloves.jpg",
  },

  // EQUIPAMIENTO
  {
    id: 21,
    name: "Saco de Boxeo 120cm",
    category: "equipamiento",
    price: 149.99,
    stock: 10,
    description: "Saco pesado de 35kg con cadena incluida",
    image: "assets/punching-bag.jpg",
  },
  {
    id: 22,
    name: "Paos de Golpeo Curvos",
    category: "equipamiento",
    price: 64.99,
    stock: 18,
    description: "Par de paos ergonómicos para entrenamiento",
    image: "assets/focus-mitts.jpg",
  },
  {
    id: 23,
    name: "Colchoneta Tatami 100x100cm",
    category: "equipamiento",
    price: 89.99,
    stock: 15,
    description: "Colchoneta puzzle EVA 4cm grosor",
    image: "assets/tatami-mat.jpg",
  },

  // ACCESORIOS
  {
    id: 24,
    name: "Bolsa Deportiva Fight",
    category: "accesorios",
    price: 39.99,
    stock: 40,
    description: "Bolsa espaciosa con compartimentos",
    image: "assets/gym-bag.jpg",
  },
  {
    id: 25,
    name: "Botella Shaker 700ml",
    category: "accesorios",
    price: 14.99,
    stock: 60,
    description: "Botella mezcladora para batidos",
    image: "assets/shaker-bottle.jpg",
  },
  {
    id: 26,
    name: "Toalla Microfibra",
    category: "accesorios",
    price: 19.99,
    stock: 50,
    description: "Toalla de secado rápido 80x40cm",
    image: "assets/towel.jpg",
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
  if (cart.length === 0) {
    alert("🛒 Tu carrito está vacío");
    return;
  }

  const cartDetails = cart
    .map(
      (item) =>
        `• ${item.name} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`,
    )
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  alert(`🛒 Tu Carrito:\n\n${cartDetails}\n\n💰 Total: €${total.toFixed(2)}`);
}

// ==========================================
// EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
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

  // Carrito
  document.getElementById("cartBtn").addEventListener("click", showCart);

  // Hero CTA
  document.querySelector(".hero-cta").addEventListener("click", () => {
    document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
  });
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
