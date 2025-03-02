<!-- <template>
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
</template>

<script>
export default{
     setup() {
        const menuVisible = ref(false);

        const toggleMenu = () =>{
        menuVisible.value = !menuVisible.value
    
        }
        return{
        menuVisible,
        toggleMenu
    }

        
    }
}
</script>

<style>
/* add style */

</style> -->