import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const baseUrl = import.meta.env.BASE_URL;

const plants = [
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    category: "Statement makers",
    description: "A bold, easygoing beauty with those iconic split leaves.",
    price: 34,
    image: `${baseUrl}images/monstera.jpg`,
    tag: "Bestseller",
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "Statement makers",
    description: "Glossy deep-green leaves bring a little drama to any room.",
    price: 42,
    image: `${baseUrl}images/rubber-plant.jpg`,
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "Statement makers",
    description: "A little tropical sunshine, made for a bright corner.",
    price: 58,
    image: `${baseUrl}images/bird-of-paradise.jpg`,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "Easy does it",
    description: "Sculptural, resilient, and happy in almost any light.",
    price: 26,
    image: `${baseUrl}images/snake-plant.jpg`,
    tag: "Low maintenance",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "Easy does it",
    description: "Shiny leaves and a can-do spirit, even in low light.",
    price: 29,
    image: `${baseUrl}images/zz-plant.jpg`,
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    category: "Easy does it",
    description: "A trailing favourite that makes every shelf feel alive.",
    price: 18,
    image: `${baseUrl}images/pothos.jpg`,
  },
  {
    id: "calathea",
    name: "Calathea Orbifolia",
    category: "Little leafy loves",
    description: "Soft silver stripes and a quietly captivating presence.",
    price: 32,
    image: `${baseUrl}images/calathea.jpg`,
  },
  {
    id: "peperomia",
    name: "Peperomia",
    category: "Little leafy loves",
    description: "Compact, cheerful leaves for desks and sunny windowsills.",
    price: 16,
    image: `${baseUrl}images/peperomia.jpg`,
  },
  {
    id: "pilea",
    name: "Chinese Money Plant",
    category: "Little leafy loves",
    description: "Round, bright leaves that bring good energy to your space.",
    price: 22,
    image: `${baseUrl}images/pilea.jpg`,
  },
];

const categories = ["Statement makers", "Easy does it", "Little leafy loves"];
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="cart-icon"
    >
      <path
        d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.4L22 8H6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.3" fill="currentColor" />
      <circle cx="18" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}

function Header({ cartCount }) {
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <path
              d="M18 29V16m0 7c-8 0-12-5-12-13 8 0 12 4 12 11m0-2c0-8 4-12 12-12 0 8-4 12-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>
          <strong>paradise</strong>
          <small>plant nursery</small>
        </span>
      </Link>
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink to="/products" className="header-link">
          Shop plants
        </NavLink>
        <NavLink
          to="/cart"
          className="cart-link"
          aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
        >
          <CartIcon />
          <span className="cart-label">Cart</span>
          <span className="cart-count" aria-live="polite">
            {cartCount}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">A little more life, indoors</p>
          <h1>Find your<br />little piece of green.</h1>
          <p className="hero-copy">
            Meet your new favourite roommate. Thoughtfully grown houseplants,
            picked to make your home feel a little more like you.
          </p>
          <Link className="button button-light" to="/products">
            Get started <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-caption">Grown with care. Ready for home.</div>
      </section>

      <section className="story-section">
        <div className="story-kicker">
          <span className="tiny-leaf" aria-hidden="true">✳</span>
          <p className="eyebrow">Rooted in good things</p>
        </div>
        <div className="story-copy">
          <h2>Good plants.<br />Good for the soul.</h2>
          <p>
            At Paradise Nursery, we believe a little green can make a big
            difference. We bring together lovely, healthy plants and the
            know-how to help them thrive—so finding your next leafy friend feels
            simple, joyful, and just right for your space.
          </p>
          <Link className="text-link" to="/products">
            Meet the plants <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-note">
        <p>Make room for a little more green.</p>
        <Link to="/products" className="button button-dark">
          Explore the shop <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

function ProductCard({ plant, onAdd, added }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={plant.image} alt={plant.name} className="product-image" />
        {plant.tag && <span className="product-tag">{plant.tag}</span>}
      </div>
      <div className="product-info">
        <div>
          <h3>{plant.name}</h3>
          <p className="product-description">{plant.description}</p>
        </div>
        <div className="product-buy-row">
          <span className="product-price">{money.format(plant.price)}</span>
          <button
            className={`add-button${added ? " added" : ""}`}
            onClick={() => onAdd(plant.id)}
            type="button"
          >
            {added ? "Add another" : "Add to cart"} <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductsPage({ cartItems, onAdd }) {
  return (
    <main className="shop-page page-shell">
      <div className="page-intro">
        <p className="eyebrow">The plant edit</p>
        <h1>Make yourself<br className="mobile-break" /> at home.</h1>
        <p>Thoughtful little greens for every kind of space and plant parent.</p>
      </div>
      <div className="category-list">
        {categories.map((category, index) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category,
          );
          return (
            <section className="category-section" key={category}>
              <div className="category-heading">
                <span className="category-number">0{index + 1}</span>
                <h2>{category}</h2>
                <span className="category-count">
                  {String(categoryPlants.length).padStart(2, "0")} plants
                </span>
              </div>
              <div className="product-grid">
                {categoryPlants.map((plant) => (
                  <ProductCard
                    key={plant.id}
                    plant={plant}
                    onAdd={onAdd}
                    added={cartItems.some((item) => item.id === plant.id)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

function CartPage({ cartItems, onChangeQuantity, onRemove }) {
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const lineItems = cartItems
    .map((item) => ({
      ...item,
      plant: plants.find((plant) => plant.id === item.id),
    }))
    .filter((item) => item.plant);
  const totalCount = lineItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = lineItems.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0,
  );

  return (
    <main className="cart-page page-shell">
      <div className="cart-page-heading">
        <div>
          <p className="eyebrow">Your little jungle</p>
          <h1>Your basket<span className="heading-period">.</span></h1>
          <p className="cart-subtitle">
            {totalCount
              ? `${totalCount} ${totalCount === 1 ? "lovely plant" : "lovely plants"} in your basket`
              : "A little room for something green."}
          </p>
        </div>
        <Link to="/products" className="text-link desktop-continue">
          Continue shopping <span aria-hidden="true">→</span>
        </Link>
      </div>

      {lineItems.length === 0 ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">✳</span>
          <h2>Your basket is taking a breather.</h2>
          <p>Find a plant that feels like home, and it’ll be waiting right here.</p>
          <Link to="/products" className="button button-dark">
            Find your plant <span aria-hidden="true">↗</span>
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Plants in your basket">
            {lineItems.map(({ id, quantity, plant }) => (
              <article className="cart-item" key={id}>
                <img className="cart-item-image" src={plant.image} alt={plant.name} />
                <div className="cart-item-details">
                  <div>
                    <p className="eyebrow cart-item-category">{plant.category}</p>
                    <h2>{plant.name}</h2>
                    <p className="cart-unit-price">{money.format(plant.price)} each</p>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => onRemove(id)}
                    type="button"
                    aria-label={`Remove ${plant.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control" aria-label={`${plant.name} quantity`}>
                    <button
                      type="button"
                      onClick={() => onChangeQuantity(id, quantity - 1)}
                      aria-label={`Decrease ${plant.name} quantity`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => onChangeQuantity(id, quantity + 1)}
                      aria-label={`Increase ${plant.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <strong className="line-total">
                    {money.format(plant.price * quantity)}
                  </strong>
                </div>
              </article>
            ))}
            <Link to="/products" className="text-link mobile-continue">
              ← Continue shopping
            </Link>
          </section>

          <aside className="order-summary">
            <p className="eyebrow">The little details</p>
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Plants ({totalCount})</span>
              <span>{money.format(total)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="delivery-note">Calculated at checkout</span>
            </div>
            <div className="summary-total">
              <span>Subtotal</span>
              <strong>{money.format(total)}</strong>
            </div>
            <p className="summary-caption">Taxes and delivery calculated at checkout.</p>
            <button
              className="button button-dark checkout-button"
              type="button"
              onClick={() =>
                setCheckoutMessage(
                  "Online checkout is coming soon. Your basket will be here when we’re ready.",
                )
              }
            >
              Checkout <span aria-hidden="true">↗</span>
            </button>
            {checkoutMessage && (
              <p className="checkout-message" role="status">{checkoutMessage}</p>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand">paradise nursery</Link>
      <span>Grown with care, for the place you call home.</span>
      <span>© {new Date().getFullYear()} Paradise Nursery</span>
    </footer>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("paradise-nursery-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("paradise-nursery-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(id) {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { id, quantity: 1 }];
    });
  }

  function changeQuantity(id, quantity) {
    setCartItems((current) =>
      quantity < 1
        ? current.filter((item) => item.id !== id)
        : current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }

  function removeFromCart(id) {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductsPage cartItems={cartItems} onAdd={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onChangeQuantity={changeQuantity}
              onRemove={removeFromCart}
            />
          }
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
