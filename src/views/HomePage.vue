<template>
    <div id="app">
      <header>
        <div class="logo">Fashion Blog</div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#section1">Trends</a>
          <a href="#section2">Summer Fashion</a>
          <a href="#section3">Outfits</a>
        </nav>
  
        <div class="dropdown-container">
          <button id="menu-toggle" class="dropdown-btn" @click="toggleMenu" :aria-expanded="menuVisible.toString()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
  
          <div id="menu" class="dropdown" :class="{ active: menuVisible }">
            <router-link to="/about" >About</router-link>
            <router-link  to="/contact">Contact</router-link>
            <router-link to="/shop">Shop</router-link>
          </div>
  
        </div>
      </header>
  
  
      <section id="hero" class="hero">
        <div class="hero-image">
          <img src="../views/images/nkar2.png" alt="Fashion Model">
        </div>
        <div class="hero-text" :style="{ opacity: heroTextOpacity, transform: heroTextTransform }">
          <h1>Fashion Trends</h1>
          <p>The evolution of trends begins with an idea, shifts to experimentation, and concludes with timeless classics. Discover the latest trends in the fashion world.</p>

          <div v-for="trend in trends" :key="trend.id">
             <button @click="toggleLikeTrend(trend.id)">
                 {{ likedTrends[trend.id] ? "❤️ Liked" : "🤍 Like" }}
             </button>
             n bhcjxkzb nksjxzb kjsxbj
         </div>

        </div>  
      </section>
  
      <section class="hero2">
        <div class="hero2-container">
          <div class="hero2-large">
            <img src="../views/images/nkar1.avif" alt="Large Image">
          </div>
          <div class="hero2-thumbnails">
            <img src="../views/images/nkar6.jpg" alt="Thumbnail 1">
            <img src="../views/images/nkar7.webp" alt="Thumbnail 2">
            <img src="../views/images/nkar8.webp" alt="Thumbnail 3">
            <img src="../views/images/nkar9.avif" alt="Thumbnail 4">
          </div>
        </div>
      </section>
  

  
      <section id="section1" class="section">
        <div class="text-block">
          <h2>01</h2>
          <h3>What It's Like to Work in the Fashion World</h3>
          <p>Explore behind the scenes of the fashion industry and the hard work that brings style to life.</p>
        </div>
        <div class="image-grid">
          <img src="../views/images/nkar3.png" alt="Model 1">
          <img src="../views/images/nkar4.jpg" alt="Model 2">
          <img src="../views/images/nkar5.jpg" alt="Model 3">
        </div>
      </section>
  
      <section id="section2" class="section alt-section">
        <div class="image-block">
          <img src="../views/images/nkar5.jpg" alt="Fashion Shot">
        </div>
        <div class="text-block">
          <h2>02</h2>
          <h3>5 Essential Fashion Trends for Summer</h3>
          <p>Stay ahead of the curve with these essential fashion tips for the warm summer months.</p>
          <!-- <button @click="addTrends">Add new trends</button> -->
        </div>
      </section>
  
      <section id="section3" class="section">
        <div class="text-block">
          <h2>03</h2>
          <h3>How to Wear a Not So Basic Outfit</h3>
          <p>Discover how you can stand out by elevating your everyday outfits with a unique twist.</p>
          <!-- <button @click="addNewOutfit">Add New Outfit</button>  -->
  
        </div>
  
        <div class="image-grid">
          <img src="../views/images/product1.jpg" alt="Stylish Model">
          <img src="../views/images/product2.jpg" alt="Outfit Shot">
        </div>
      </section>
  
      <footer>
        <div class="footer-content">
          <p>&copy; 2024 Fashion Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  
  </template>
  
  <script >
  import { ref, onMounted } from "vue";
  import { useStore } from 'vuex';


  export default {

    name: "App",
    mounted() {
      const heroText = document.querySelector(".hero-text");
      heroText.style.opacity = 0;
      heroText.style.transform = "translateY(20px)";
      setTimeout(() => {
        heroText.style.transition = "opacity 1s, transform 1s";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
      }, 500);
  
  
      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
  
      menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
  
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
          });
        });
      });
  
      document.querySelectorAll(".text-block").forEach(block => {
        const button = document.createElement("button");
        button.textContent = "Read less";
        button.className = "toggle-btn";
        block.appendChild(button);
  
        button.addEventListener("click", () => {
          const content = block.querySelector("p");
          content.style.display = content.style.display === "none" ? "block" : "none";
          button.textContent = content.style.display === "none" ? "Read Less" : "Read More";
        });
      });
  
      document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", () => {
          const content = button.previousElementSibling;
          content.classList.toggle("expanded");
          button.textContent = content.classList.contains("expanded") ? "Read more" : "Read less";
        });
      });
    },
  
   
    setup() {
      const likedTrends = ref({});
      const store = useStore();
      const menuVisible = ref(false);
      const heroTextOpacity = ref(0);
      const heroTextTransform = ref("translateY(20px)");
      const images = ref([
        'images/nkar1.avif',
        'images/nkar6.jpg',
        'images/nkar7.webp',
        'images/nkar8.webp',
        'images/nkar9.avif'
      ]);
      const currentImage = ref(0);
    
      const toggleMenu = () =>{
        menuVisible.value = !menuVisible.value
      }
  
      onMounted(() => {
        setTimeout(() => {
          heroTextOpacity.value = 1;
          heroTextTransform.value = "translateY(0)";
        }, 500);
      });
  
      const addNewOutfit = () => {
        const newOutfit = {
          id: Date.now(),  
          name: "Summer Collection",
          description: "A cool outfit for the summer.",
          imageUrl: require("../views/images/nkar1.avif"),
          price: 49.99
        };
        const newOutfit2 = {
            id:6,
            name:"New Collection",
            description:"A good outfit for the man.",
            imageUrlL: require("../views/images/nkar2.png"),
        }
  
        store.dispatch("add_outfit", [newOutfit,newOutfit2]);
      };

      const deleteOutfit = (id) => {
         store.dispatch("delete_outfit", { id });
        };


      const addTrends = () => {
        const newTrend = {
            id:Date.now,
            name:"Trends Summer",
        }
        store.dispatch("add_trends", newTrend)

      };
    const autoScrollImages = () => {
        setInterval(() => {
         currentImage.value = (currentImage.value + 1) % images.value.length;
         }, 3000);
    };

    const toggleLikeTrend = (id) => {
    likedTrends.value[id] = !likedTrends.value[id];
    };

    onMounted(() => {
      autoScrollImages();

    });

  
      return {
        toggleLikeTrend,
        addTrends,
        menuVisible,
        toggleMenu,
        heroTextOpacity,
        heroTextTransform,
        images,
        currentImage,
        deleteOutfit,
        addNewOutfit,
      };
    },
    
  
  
  };
  </script>
  
  <style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
  }
  
  body {
      line-height: 1.6;
      color: #333;
  }
  
  header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 15px 20px;
      background-color: #cdcdcd;
      align-items: center;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  header .logo {
      font-weight: bold;
      font-size: 1.5rem;
  }
  
  header nav a {
      margin-left: 15px;
      text-decoration: none;
      color: #333;
  }
  
  .dropdown-container {
      position: relative;
  }
  
  .dropdown-btn {
      padding: 10px 15px;
      color: rgb(94, 36, 36);
      border: none;
      cursor: pointer;
      border-radius: 5px;
  }
  
  
  #menu {
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.3s, transform 0.3s;
      display: none;
      position: absolute;
      top: 40px;
      right: 0;
      background-color: #f4f4f4;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  #menu.active {
      display: block;
      opacity: 1;
      transform: translateY(0);
  }
  
  #menu a {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: #333;
      width: 250px;
      text-align: center;
  }
  
  #menu a:hover {
      background-color: #eaeaea;
  }
  
  .hero {
      display: flex;
      padding: 50px;
      background-color: #fff;
      align-items: center;
      animation: fadeIn 2s ease-out;
  }
  
  .hero-image img {
      max-width: 100%;
      height: auto;
  }
  
  .hero-text {
      margin-left: 30px;
  }
  
  .hero-text h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      animation: fadeIn 1.5s ease-out;
  }
  
  .hero-text p {
      color: #666;
      font-size: 1rem;
      animation: fadeIn 2s ease-out;
  }
  
  .hero2-container {
      display: grid;
      grid-template-columns: 1fr 1fr; 
      gap: 20px; 
      align-items: center;
      margin: 50px;
  }
  
  .hero2-large img {
      width: 100%; 
      height: auto; 
      object-fit: cover; 
      border-radius: 10px;
      animation: zoomIn 1.5s ease-out;
  }
  
  .hero2-thumbnails {
      display: grid;
      grid-template-columns: 1fr 1fr; 
      grid-gap: 15px; 
  }
  
  .hero2-thumbnails img {
      width: 90%; 
      height: 190px; 
      object-fit: cover; 
      border-radius: 10px;
      animation: fadeIn 2s ease-out;
  }
  
  .section {
      display: flex;
      justify-content: space-between;
      padding: 50px;
      background-color: #f9f9f9;
      align-items: center;
  }
  
  .section.alt-section {
      background-color: #e8eff1;
  }
  
  .text-block {
      max-width: 40%;
      animation: slideInLeft 1s ease-out;
  }
  
  .text-block h2 {
      font-size: 2rem;
      color: #666;
      margin-bottom: 10px;
  }
  
  .text-block h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
  }
  
  .text-block p {
      max-height: 3rem;
      overflow: hidden;
      transition: max-height 0.3s ease;
  }
  
  .text-block p.expanded {
      max-height: 10rem;
  }
  
  
  .image-grid {
      display: flex;
      gap: 30px;
  }
  
  .image-grid img {
      width: 100%;
      max-width: 200px;
      animation: zoomIn 1.5s ease-out;
  }
  
  footer {
      background-color: #2c3e50;
      color: #fff;
      text-align: center;
      padding: 20px 0;
  }
  
  .toggle-btn {
      margin-top: 10px;
      padding: 5px 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
  
  .toggle-btn:hover {
      background-color: #0056b3;
  }
  
  @keyframes fadeIn {
      0% {
          opacity: 0;
          transform: translateY(20px);
      }
      100% {
          opacity: 1;
          transform: translateY(0);
      }
  }
  
  @keyframes slideInLeft {
      0% {
          opacity: 0;
          transform: translateX(-100px);
      }
      100% {
          opacity: 1;
          transform: translateX(0);
      }
  }
  
  @keyframes zoomIn {
      0% {
          transform: scale(0.8);
          opacity: 0;
      }
      100% {
          transform: scale(1);
          opacity: 1;
          animation: zoomIn 1.2s ease-out forwards;
      }
  }
  
  
  @keyframes dropdownFade {
      from {
          opacity: 0;
          transform: translateY(-10px);
      }
      to {
          opacity: 1;
          transform: translateY(0);
      }
  } 
  
  
   
  </style>
  