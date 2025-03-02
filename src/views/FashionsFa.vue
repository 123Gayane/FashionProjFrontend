<template>
    <div id="app" class="a1">
      <header>
        <div class="logo">
          <router-link to="/">Fashion Blog</router-link>
        </div>
        <nav class="navbar">
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/shop">Shop</router-link>
        </nav>
      </header>
  
      <main class="main-container">
        <section class="order-section">
          <h1>Order Your Dream Dress</h1>
          <p class="intro-text">Choose your size, favorite color, and add a personal touch to your dress. Fashion made just for you!</p>
  
          <form @submit.prevent="handleSubmit" class="order-form">
            <div class="form-group">
              <label for="dress-name">Dress Name:</label>
              <input type="text" v-model="dressName" placeholder="Enter the dress name" required />
            </div>
  
            <div class="form-group">
              <label for="size">Size:</label>
              <select v-model="size" required>
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="color">Color:</label>
              <input type="color" v-model="color" />
            </div>
  
            <div class="form-group">
              <label for="customization">Customization:</label>
              <textarea v-model="customization" placeholder="Add custom details (e.g., embroidery, patterns)" rows="4"></textarea>
            </div>
  
            <div class="form-group">
              <label for="quantity">Quantity:</label>
              <input type="number" v-model="quantity" min="1" max="10" value="1" />
            </div>
  
            <div class="form-group">
              <label for="number">Phone Number:</label>
              <input type="text" v-model="phoneNumber"/>
            </div>
  
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" v-model="email"/>
            </div>
  
            <button type="submit" class="submit-btn">Place Order</button>
          </form>
  
          <div class="fashion-list">
            <h2>Dress Orders</h2>
            <div class="fashion-items">
              <div class="fashion-item" v-for="item in fashionItems" :key="item.id">
                <div class="delete-icon" @click="del_fashion(item.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="a2" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </div>
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <p><strong>Size:</strong> {{ item.size }}</p>
                <p><strong>Color:</strong> <span>{{ item.color }}</span></p>
                <p><strong>Quantity:</strong> {{ item.quantity }}</p>
                <p><strong>Email:</strong> {{ item.email }}</p>
                <p><strong>Phone:</strong> {{ item.number }}</p>
              </div>
            </div>
            <p v-if="!fashionItems.length" class="no-items">No fashion items available yet!</p>
          </div>
        </section>
      </main>
  
      <footer>
        <div class="footer-content">
          <p>&copy; 2025 Fashion Blog. All rights reserved.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      const dressName = ref('');
      const size = ref('');
      const color = ref('#000000');
      const customization = ref('');
      const quantity = ref(1);
      const phoneNumber = ref('');
      const email = ref('');
  
      const fashionItems = computed(() => store.state.fashionItems);
  
      const handleSubmit = () => {
        const fashionData = {
          name: dressName.value,
          description: customization.value,
          size: size.value,
          color: color.value,
          quantity: quantity.value,
          email: email.value,
          number: phoneNumber.value
        };
  
    store.dispatch('add_fashionn', fashionData).then(() => {
    store.dispatch('get_fashionn'); 
 
    dressName.value = '';
    size.value = '';
    color.value = '#000000'; 
    customization.value = '';
    quantity.value = 1;
    phoneNumber.value = '';
    email.value = '';
  });
      };
  
      const del_fashion = (id) => {
        store.dispatch('DELETE_FASHION', id); 
      };
  
      store.dispatch('get_fashionn');
  
      return {
        del_fashion,
        dressName,
        size,
        color,
        customization,
        quantity,
        phoneNumber,
        email,
        fashionItems,
        handleSubmit
      };
    }
  };
  </script>

  <style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&display=swap');
  
  * {
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #444;
    background: #f0f0f0;
    line-height: 1.6;
  }
  
  .a1 {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2023/03/fashion-illustration.jpg?fit=1200%2C800&quality=100&ssl=1");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
  }
  

  header {
    background-color: rgba(30, 30, 47, 0.9);
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  header .logo a {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #f39c12;
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .navbar a:hover {
    color: #f39c12;
  }
  

  .main-container {
    padding: 2rem;
    max-width: 900px;
    margin: 3rem auto;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  

  .order-section {
    text-align: center;
  }
  
  .order-section h1 {
    font-family: 'Playfair Display', serif;
    color: #1e1e2f;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .intro-text {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  

  .order-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    text-align: left;
  }
  
  .form-group label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
    color: #333;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    background: #fff;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #1e10e7;
    box-shadow: 0 0 5px rgba(30, 16, 231, 0.2);
  }
  
  .submit-btn {
    padding: 0.9rem 2.5rem;
    background-color: #1e10e7;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .submit-btn:hover {
    background-color: #332d95;
  }
  

  .fashion-list {
    margin-top: 2.5rem;
    background-color: #0d1b2a;
    padding: 2rem;
    border-radius: 10px;
    color: #e0e0e0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  .fashion-list h2 {
    color: #f39c12;
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  

  .fashion-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  

  .fashion-item {
    background-color: #1b263b;
    padding: 1.2rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    flex: 1 1 calc(50% - 1.5rem); 
    max-width: calc(50% - 1.5rem);
  }
  
  .fashion-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  
  .fashion-item h3 {
    margin-top: 0;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
  }
  
  .fashion-item p {
    margin: 0.4rem 0;
    color: #ccc;
    font-size: 0.95rem;
  }
  
  .delete-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #f39c12;
  }
  
  .delete-icon:hover {
    color: #ff6b6b;
  }
  
  .no-items {
    color: #bbb;
    font-style: italic;
    margin-top: 1.5rem;
  }
  
  footer {
    background-color: rgba(30, 30, 47, 0.9);
    color: #fff;
    padding: 30px 20px;
    text-align: center;
  }
  
  .footer-content p {
    margin: 0;
    font-size: 0.95rem;
  }
  
  .social-links a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.3rem;
  }
  
  .social-links a:hover {
    color: #f39c12;
  }
  
  @media (max-width: 768px) {
    .main-container {
      margin: 2rem 1rem;
    }
  
    header {
      flex-direction: column;
      text-align: center;
    }
  
    .navbar {
      margin-top: 10px;
    }
    
    .fashion-item {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
  </style>
  