/* =========================================================
   MazaliFast — Interaktiv funksionallik (script.js)
   ========================================================= */

const STORAGE_KEY = 'mazalifast_cart_v1';

// Mahsulotlar bazasi (Fast Food, Ichimliklar, Desertlar)
const PRODUCTS = [
  // --- FAST FOOD ---
  {
    id: 'gamburger',
    name: 'Gamburger',
    category: 'Fast Food',
    price: 28000,
    popular: true,
    description: 'Yumshoq kunjutli bulochka, shirali mol go‘shti kotleti, yangi bodring, pomidor va maxsus sous.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chizburger',
    name: 'Chizburger',
    category: 'Fast Food',
    price: 32000,
    popular: true,
    description: 'Ikki qavat erigan cheddar pishlog‘i, shirali kotlet, karamellashgan piyoz va firma sousi.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hot-dog',
    name: 'Hot-dog',
    category: 'Fast Food',
    price: 22000,
    popular: false,
    description: 'Issiq dudlangan sosiska, yumshoq bulochka, xantal, ketchup va qarsildoq piyoz bo‘laklari.',
    image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lavash',
    name: 'Lavash',
    category: 'Fast Food',
    price: 34000,
    popular: true,
    description: 'Yupqa tandir lavashga o‘ralgan mazali go‘sht, kartoshka fri, pomidor, chipslar va oq sous.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shaurma',
    name: 'Shaurma',
    category: 'Fast Food',
    price: 29000,
    popular: false,
    description: 'Ziravorlar bilan marinadlangan go‘sht, tuzlangan bodring, ko‘katlar va sarimsoqli sous.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sendvich',
    name: 'Sendvich',
    category: 'Fast Food',
    price: 26000,
    popular: false,
    description: 'Tosterlangan non bo‘laklari orasida tovuq filesi, pishloq, tuxum va yangi ko‘katlar.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fri-kartoshka',
    name: 'Fri kartoshka',
    category: 'Fast Food',
    price: 16000,
    popular: true,
    description: 'Tashqarisi qarsildoq, ichi yumshoq oltinrang kartoshka bo‘laklari, engil tuz bilan.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pitsa',
    name: 'Pitsa',
    category: 'Fast Food',
    price: 68000,
    popular: true,
    description: 'Yupqa va yumshoq xamir, mozzarella pishlog‘i, pepperoni, qo‘ziqorin va italyan tomat sousi.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    category: 'Fast Food',
    price: 24000,
    popular: false,
    description: '8 dona qarsildoq qobiqli tabiiy tovuq go‘shtidan tayyorlangan nuggets bo‘laklari.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },

  // --- ICHIMLIKLAR ---
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    category: 'Ichimliklar',
    price: 12000,
    popular: true,
    description: 'Muzdek va tetiklantiruvchi klassik Coca-Cola (0.5 L). Fast food bilan mukammal uyg‘unlik.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fanta',
    name: 'Fanta',
    category: 'Ichimliklar',
    price: 12000,
    popular: false,
    description: 'Yorqin apelsin ta’mli gazlangan salqin ichimlik (0.5 L), yaxna holda tortiladi.',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sprite',
    name: 'Sprite',
    category: 'Ichimliklar',
    price: 12000,
    popular: false,
    description: 'Limon va laym ta’mli tetiklantiruvchi gazlangan ichimlik (0.5 L).',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    category: 'Ichimliklar',
    price: 12000,
    popular: false,
    description: 'Boy va o‘ziga xos ta’mli muzdek Pepsi ichimligi (0.5 L).',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sharbatlar',
    name: 'Sharbatlar',
    category: 'Ichimliklar',
    price: 15000,
    popular: false,
    description: 'Tabiiy mevalardan tayyorlangan shirin va foydali sharbatlar assortimenti.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    category: 'Ichimliklar',
    price: 23000,
    popular: true,
    description: 'Quyoshli qaymoqli muzqaymoq va sutdan tayyorlangan ko‘pikli vanil-qulupnayli kokteyl.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },

  // --- DESERTLAR ---
  {
    id: 'donut',
    name: 'Donut',
    category: 'Desertlar',
    price: 17000,
    popular: false,
    description: 'Yumshoq shirin xamirli ponchik, rang-barang glazur va shokoladli bezak bilan.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    category: 'Desertlar',
    price: 31000,
    popular: true,
    description: 'Mayin va nafis pishloqli desert, qarsildoq pechenye asosi va rezavor meva sousi bilan.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'muzqaymoq',
    name: 'Muzqaymoq',
    category: 'Desertlar',
    price: 16000,
    popular: false,
    description: 'Tabiiy sut va qaymoqdan tayyorlangan yumshoq muzqaymoq sharchalari.',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tort',
    name: 'Tort',
    category: 'Desertlar',
    price: 29000,
    popular: false,
    description: 'Ko‘p qavatli biskvit va mayin krem bilan tayyorlangan bayramona tort bo‘lagi.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brauni',
    name: 'Brauni',
    category: 'Desertlar',
    price: 25000,
    popular: false,
    description: 'Qora shokoladga boy, ichi nam va shirin amerika brauni pishirig‘i.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  }
];

// Promo-kodlar ro'yxati
const PROMO_CODES = {
  MAZALI15: { type: 'percent', value: 15, label: '15% chegirma qo‘llandi' },
  FAST10: { type: 'percent', value: 10, label: '10% chegirma qo‘llandi' },
  TEZ5000: { type: 'fixed', value: 5000, label: '5 000 so‘m chegirma qo‘llandi' }
};

// Holat (State) o'zgaruvchilari
let cart = loadCartFromStorage();
let activeCategory = 'all';
let searchQuery = '';
let appliedPromoCode = null;

// DOM elementlari
const popularProductsGrid = document.getElementById('popularProductsGrid');
const productsGrid = document.getElementById('productsGrid');
const productsCountText = document.getElementById('productsCountText');
const emptySearchState = document.getElementById('emptySearchState');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const categoryButtons = document.querySelectorAll('.category-filter-btn');

const navbarCartCount = document.getElementById('navbarCartCount');
const offcanvasCartCount = document.getElementById('offcanvasCartCount');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartFooter = document.getElementById('cartFooter');
const cartTotalQty = document.getElementById('cartTotalQty');
const cartSubtotalPrice = document.getElementById('cartSubtotalPrice');
const openCheckoutBtn = document.getElementById('openCheckoutBtn');

const checkoutForm = document.getElementById('checkoutForm');
const checkoutItemsList = document.getElementById('checkoutItemsList');
const promoCodeInput = document.getElementById('promoCodeInput');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const promoFeedback = document.getElementById('promoFeedback');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutDiscount = document.getElementById('checkoutDiscount');
const checkoutTotal = document.getElementById('checkoutTotal');

const toastEl = document.getElementById('liveToast');
const toastMessage = document.getElementById('toastMessage');
const bootstrapToast = new bootstrap.Toast(toastEl, { delay: 2600 });

let cartOffcanvasInstance = null;
let checkoutModalInstance = null;
let successModalInstance = null;

// =========================================================
// Yordamchi funksiyalar
// =========================================================
function formatPrice(amount) {
  return `${Number(amount || 0).toLocaleString('uz-UZ').replace(/,/g, ' ')} so‘m`;
}

function showToast(message, iconClass = 'bi-check-circle-fill text-warning') {
  toastMessage.innerHTML = `<i class="bi ${iconClass} fs-5"></i><span>${message}</span>`;
  bootstrapToast.show();
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) => item && typeof item.id === 'string' && Number.isInteger(item.qty) && item.qty > 0
    );
  } catch (err) {
    console.error('Savatni o‘qishda xatolik:', err);
    return [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error('Savatni saqlashda xatolik:', err);
  }
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const product = getProductById(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function getCartTotalQuantity() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function calculateDiscount(subtotal) {
  if (!appliedPromoCode || subtotal <= 0) return 0;
  const promo = PROMO_CODES[appliedPromoCode];
  if (!promo) return 0;

  if (promo.type === 'percent') {
    return Math.round((subtotal * promo.value) / 100);
  }
  if (promo.type === 'fixed') {
    return Math.min(subtotal, promo.value);
  }
  return 0;
}

// =========================================================
// Mahsulot kartochkalarini render qilish
// =========================================================
function createProductCardHTML(product) {
  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="card product-card h-100 shadow-sm">
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-category-badge">${product.category}</span>
          ${product.popular ? '<span class="product-popular-badge"><i class="bi bi-fire me-1"></i>Mashhur</span>' : ''}
        </div>
        <div class="card-body d-flex flex-column p-3 p-md-4">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
            <h5 class="card-title fw-bold mb-0 fs-6 fs-md-5">${product.name}</h5>
          </div>
          <p class="card-text text-muted small product-desc mb-3">${product.description}</p>
          <div class="mt-auto">
            <div class="product-price mb-3">${formatPrice(product.price)}</div>
            <div class="d-grid gap-2">
              <button
                type="button"
                class="btn btn-outline-danger rounded-pill fw-semibold py-2 add-to-cart-btn"
                data-id="${product.id}"
              >
                <i class="bi bi-cart-plus me-1"></i>Savatga qo‘shish
              </button>
              <button
                type="button"
                class="btn btn-dark rounded-pill fw-semibold py-2 buy-now-btn"
                data-id="${product.id}"
              >
                <i class="bi bi-lightning-charge me-1"></i>Sotib olish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPopularProducts() {
  const popularItems = PRODUCTS.filter((p) => p.popular).slice(0, 4);
  popularProductsGrid.innerHTML = popularItems.map(createProductCardHTML).join('');
}

function renderFilteredProducts() {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      !normalizedQuery ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    emptySearchState.classList.remove('d-none');
    productsCountText.textContent = '0 ta mahsulot topildi';
  } else {
    emptySearchState.classList.add('d-none');
    productsGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    productsCountText.textContent = `${filtered.length} ta mahsulot ko‘rsatilmoqda`;
  }
}

// =========================================================
// Savat (Shopping Cart) funksiyalari
// =========================================================
function addToCart(productId, openCart = false) {
  const product = getProductById(productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCartToStorage();
  renderCart();
  showToast(`"${product.name}" savatga qo‘shildi!`);

  if (openCart && cartOffcanvasInstance) {
    cartOffcanvasInstance.show();
  }
}

function updateCartItemQty(productId, delta) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  renderCart();
}

function removeFromCart(productId) {
  const product = getProductById(productId);
  cart = cart.filter((item) => item.id !== productId);
  saveCartToStorage();
  renderCart();
  if (product) {
    showToast(`"${product.name}" savatdan o‘chirildi`, 'bi-trash-fill text-danger');
  }
}

function renderCart() {
  const totalQty = getCartTotalQuantity();
  const subtotal = getCartSubtotal();

  navbarCartCount.textContent = totalQty;
  offcanvasCartCount.textContent = totalQty;
  cartTotalQty.textContent = `${totalQty} ta`;
  cartSubtotalPrice.textContent = formatPrice(subtotal);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-5 my-4">
        <div class="display-3 text-muted mb-3"><i class="bi bi-bag-x"></i></div>
        <h5 class="fw-bold">Savatingiz hozircha bo‘sh</h5>
        <p class="text-muted small mb-4">Mazali burger, lavash, pitsa yoki ichimlik qo‘shing.</p>
        <a href="#menyu" class="btn btn-danger rounded-pill px-4 fw-semibold" data-bs-dismiss="offcanvas">
          Menyuga o‘tish
        </a>
      </div>
    `;
    cartFooter.classList.add('d-none');
    appliedPromoCode = null;
    return;
  }

  cartFooter.classList.remove('d-none');

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return '';
      const itemTotal = product.price * item.qty;

      return `
        <div class="d-flex align-items-center gap-3 pb-3 mb-3 border-bottom">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img flex-shrink-0" />
          <div class="flex-grow-1 min-w-0">
            <div class="d-flex justify-content-between align-items-start gap-2">
              <h6 class="fw-bold mb-0 text-truncate">${product.name}</h6>
              <button
                type="button"
                class="btn btn-sm text-danger p-0 border-0 remove-cart-item"
                data-id="${product.id}"
                title="O‘chirish"
              >
                <i class="bi bi-trash3"></i>
              </button>
            </div>
            <small class="text-muted d-block mb-2">${formatPrice(product.price)} / dona</small>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-inline-flex align-items-center gap-2 bg-light rounded-pill px-2 py-1 border">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary qty-btn decrease-qty"
                  data-id="${product.id}"
                  aria-label="Kamaytirish"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <span class="fw-bold small px-1">${item.qty}</span>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary qty-btn increase-qty"
                  data-id="${product.id}"
                  aria-label="Oshirish"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <strong class="small text-dark">${formatPrice(itemTotal)}</strong>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  if (document.getElementById('checkoutModal').classList.contains('show')) {
    renderCheckoutSummary();
  }
}

// "Sotib olish" tugmasi uchun global funksiya (banner kartasi ham ishlatadi)
window.buyNowProduct = function (productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (!existing) {
    cart.push({ id: productId, qty: 1 });
    saveCartToStorage();
    renderCart();
  }

  if (cartOffcanvasInstance) {
    cartOffcanvasInstance.hide();
  }
  openCheckoutModal();
};

// =========================================================
// Buyurtmani rasmiylashtirish (Checkout) va Promo-kod
// =========================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Buyurtma berish uchun avval savatga mahsulot qo‘shing!', 'bi-exclamation-circle-fill text-warning');
    return;
  }

  renderCheckoutSummary();
  if (checkoutModalInstance) {
    checkoutModalInstance.show();
  }
}

function renderCheckoutSummary() {
  const subtotal = getCartSubtotal();
  const discount = calculateDiscount(subtotal);
  const finalTotal = Math.max(0, subtotal - discount);

  checkoutItemsList.innerHTML = cart
    .map((item) => {
      const product = getProductById(item.id);
      if (!product) return '';
      return `
        <div class="d-flex justify-content-between align-items-center small py-2 border-bottom">
          <div class="pe-2">
            <div class="fw-semibold text-dark">${product.name}</div>
            <div class="text-muted">${item.qty} × ${formatPrice(product.price)}</div>
          </div>
          <strong class="text-nowrap">${formatPrice(product.price * item.qty)}</strong>
        </div>
      `;
    })
    .join('');

  checkoutSubtotal.textContent = formatPrice(subtotal);
  checkoutDiscount.textContent = `-${formatPrice(discount)}`;
  checkoutTotal.textContent = formatPrice(finalTotal);
}

function handleApplyPromoCode() {
  const rawCode = promoCodeInput.value.trim().toUpperCase();

  if (!rawCode) {
    appliedPromoCode = null;
    promoFeedback.className = 'small mt-1 text-danger fw-medium';
    promoFeedback.textContent = 'Iltimos, promo-kod kiriting.';
    renderCheckoutSummary();
    return;
  }

  const promo = PROMO_CODES[rawCode];
  if (!promo) {
    appliedPromoCode = null;
    promoFeedback.className = 'small mt-1 text-danger fw-medium';
    promoFeedback.textContent = 'Noto‘g‘ri promo-kod! Sinab ko‘ring: MAZALI15, FAST10 yoki TEZ5000.';
    renderCheckoutSummary();
    return;
  }

  appliedPromoCode = rawCode;
  promoFeedback.className = 'small mt-1 text-success fw-semibold';
  promoFeedback.textContent = `✓ "${rawCode}" kod faollashtirildi (${promo.label}).`;
  renderCheckoutSummary();
}

function validateCheckoutForm() {
  const nameInput = document.getElementById('customerName');
  const phoneInput = document.getElementById('customerPhone');
  const addressInput = document.getElementById('customerAddress');

  let isValid = true;

  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3) {
    nameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    nameInput.classList.remove('is-invalid');
    nameInput.classList.add('is-valid');
  }

  const phoneDigits = phoneInput.value.replace(/\D/g, '');
  if (phoneDigits.length < 9 || phoneDigits.length > 15) {
    phoneInput.classList.add('is-invalid');
    isValid = false;
  } else {
    phoneInput.classList.remove('is-invalid');
    phoneInput.classList.add('is-valid');
  }

  const addressValue = addressInput.value.trim();
  if (addressValue.length < 5) {
    addressInput.classList.add('is-invalid');
    isValid = false;
  } else {
    addressInput.classList.remove('is-invalid');
    addressInput.classList.add('is-valid');
  }

  return isValid;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast('Savatingiz bo‘sh!', 'bi-exclamation-circle-fill text-warning');
    return;
  }

  if (!validateCheckoutForm()) {
    return;
  }

  const customerName = document.getElementById('customerName').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Naqd pul';

  const subtotal = getCartSubtotal();
  const discount = calculateDiscount(subtotal);
  const finalTotal = Math.max(0, subtotal - discount);
  const orderNumber = `#MF-${Math.floor(1000 + Math.random() * 9000)}`;

  // Muvaffaqiyat oynasiga ma'lumotlarni joylash
  document.getElementById('orderNumberDisplay').textContent = orderNumber;
  document.getElementById('summaryCustomerName').textContent = customerName;
  document.getElementById('summaryCustomerPhone').textContent = customerPhone;
  document.getElementById('summaryPaymentMethod').textContent = paymentMethod;
  document.getElementById('summaryFinalTotal').textContent = formatPrice(finalTotal);

  // Savat va promo-kodni tozalash
  cart = [];
  appliedPromoCode = null;
  saveCartToStorage();
  renderCart();

  checkoutForm.reset();
  ['customerName', 'customerPhone', 'customerAddress'].forEach((id) => {
    const el = document.getElementById(id);
    el.classList.remove('is-valid', 'is-invalid');
  });
  promoFeedback.textContent = '';

  if (checkoutModalInstance) {
    checkoutModalInstance.hide();
  }
  if (successModalInstance) {
    successModalInstance.show();
  }
}

// =========================================================
// Hodisa tinglovchilari (Event Listeners)
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  cartOffcanvasInstance = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
  checkoutModalInstance = new bootstrap.Modal(document.getElementById('checkoutModal'));
  successModalInstance = new bootstrap.Modal(document.getElementById('successModal'));

  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  renderPopularProducts();
  renderFilteredProducts();
  renderCart();

  // Navbar scroll effekti
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Kategoriya filtri tugmalari
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;

      categoryButtons.forEach((b) => {
        b.classList.remove('btn-danger', 'active');
        b.classList.add('btn-outline-secondary');
      });
      btn.classList.remove('btn-outline-secondary');
      btn.classList.add('btn-danger', 'active');

      renderFilteredProducts();
    });
  });

  // Qidiruv maydoni
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.classList.toggle('d-none', searchQuery.trim().length === 0);
    renderFilteredProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('d-none');
    renderFilteredProducts();
  });

  resetFiltersBtn.addEventListener('click', () => {
    activeCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.classList.add('d-none');

    categoryButtons.forEach((b) => {
      b.classList.remove('btn-danger', 'active');
      b.classList.add('btn-outline-secondary');
      if (b.dataset.category === 'all') {
        b.classList.remove('btn-outline-secondary');
        b.classList.add('btn-danger', 'active');
      }
    });

    renderFilteredProducts();
  });

  // Mahsulot kartalaridagi tugmalar (delegatsiya)
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn) {
      addToCart(addBtn.dataset.id, false);
      return;
    }

    const buyBtn = e.target.closest('.buy-now-btn');
    if (buyBtn) {
      window.buyNowProduct(buyBtn.dataset.id);
      return;
    }

    const incBtn = e.target.closest('.increase-qty');
    if (incBtn) {
      updateCartItemQty(incBtn.dataset.id, 1);
      return;
    }

    const decBtn = e.target.closest('.decrease-qty');
    if (decBtn) {
      updateCartItemQty(decBtn.dataset.id, -1);
      return;
    }

    const removeBtn = e.target.closest('.remove-cart-item');
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.id);
      return;
    }

    const copyPromoBtn = e.target.closest('.copy-promo-btn');
    if (copyPromoBtn) {
      const code = copyPromoBtn.dataset.promo;
      promoCodeInput.value = code;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).catch(() => {});
      }
      showToast(`Promo-kod nusxalandi: ${code}`);
    }
  });

  // Savatdan buyurtmani rasmiylashtirishga o'tish
  openCheckoutBtn.addEventListener('click', () => {
    cartOffcanvasInstance.hide();
    openCheckoutModal();
  });

  // Promo-kodni qo'llash
  applyPromoBtn.addEventListener('click', handleApplyPromoCode);
  promoCodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApplyPromoCode();
    }
  });

  // Forma maydonlarini yozish jarayonida tekshirish
  ['customerName', 'customerPhone', 'customerAddress'].forEach((id) => {
    const inputEl = document.getElementById(id);
    inputEl.addEventListener('input', () => {
      if (inputEl.classList.contains('is-invalid') || inputEl.classList.contains('is-valid')) {
        validateCheckoutForm();
      }
    });
  });

  // Buyurtma formasini yuborish
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);
});