<template>
  <div id="app">
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

    <main>
      <section class="shop-section">
        
        <router-link to="/fashion">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
          </svg>
          <p>If you want order clothes</p>
        </router-link>

        <h1>Shop Our Latest Fashion</h1>
        <p>Discover stylish clothing and accessories handpicked for every occasion. Stay trendy effortlessly!</p>

        <div class="product-list">
          <div v-for="fashion in fashionItems" :key="fashion.id" class="product">
            <div class="delete-icon" @click="del_fashion(fashion.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="a2" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </div>

       
            <img :src="getImageUrl(fashion.image)" alt="Fashion Image" class="product-image">  
            
            <h3>{{ fashion.name }}</h3>
            <p class="product-description">{{ fashion.description }}</p>
            <p class="price">${{ fashion.price }}</p>
            <router-link class="add-to-cart-btn" to="/card">Add to Cart</router-link>
          </div>
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
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('get_fashionn2'); 
    });

    const fashionItems = computed(() => store.state.fashionItems);

    const del_fashion = (id) => {
      store.dispatch('DELETE_FASHION2', id); 
    };

    const getImageUrl = (imagePath) => {
      if (!imagePath) return 'https://via.placeholder.com/150';
      return imagePath.startsWith('http') ? imagePath : `http://127.0.0.1:8000/${imagePath}`
    };

    return {
      fashionItems,
      del_fashion,
      getImageUrl, 
    };
  },
};
</script>


  
<style>
/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  background-color: #f9f9f9;
  color: #444;
}

/* Header */
header {
  background-color: #333;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header .logo a {
  font-size: 2.5rem;
  color: #ff8c42;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

header .logo a:hover {
  color: #ff7f32;
}

.navbar a {
  color: #fff;
  margin: 0 20px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: #ff8c42;
}

/* Shop Section */
main {
  padding: 60px 20px;
  background-color: #f1f1f1;
  text-align: center;
}

.shop-section {
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;
}

.shop-section h1 {
  font-size: 3.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 700;
}

.shop-section p {
  font-size: 1.4rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

/* Product Grid */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
}

/* Product Card */
.product {
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.product:hover {
  transform: translateY(-12px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
}

.product img {
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product img:hover {
  transform: scale(1.05);
}

.product h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.product-description {
  font-size: 1.1rem;
  color: #777;
  margin-bottom: 15px;
  line-height: 1.6;
}

.price {
  font-size: 2rem;
  color: #ff8c42;
  font-weight: 600;
  margin-bottom: 15px;
}

/* Delete Icon */
.delete-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.delete-icon:hover {
  transform: scale(1.2);
  color: #ff8c42;
}

/* Button */
.add-to-cart-btn {
  background-color: #333;
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1.2rem;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
}

.add-to-cart-btn:hover {
  background-color: #ff8c42;
  transform: scale(1.05);
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  padding: 50px 20px;
  text-align: center;
  margin-top: 50px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.footer-content p {
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 400;
}

.social-links a {
  color: white;
  margin: 0 15px;
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  color: #ff8c42;
  transform: scale(1.2);
}
</style>
