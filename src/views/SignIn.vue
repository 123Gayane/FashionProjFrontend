<template>
    <div class="signin-container">
      <form @submit.prevent="handleSubmit" class="signin-form">
        <h2>Admin Sign In</h2>
        <p class="admin-message">Only admins can sign in.</p>
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter admin username"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter admin password"
            required
          />
        </div>
        <button type="submit" class="signin-btn">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'SignInPage',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['signIn']),
      async handleSubmit() {
        const success = await this.signIn({ username: this.username, password: this.password });
        if (success) {
          this.$router.push('/fashion2');
        } else {
          alert('Invalid credentials. Only admins can sign in.');
        }
      }
    }
  };
  </script>
  
  <style scoped>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  

  .signin-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); 
    background-size: cover;
  }
  

  .signin-form {
    background: rgba(255, 255, 255, 0.9); 
    padding: 3rem;
    border-radius: 20px;
    width: 100%;
    max-width: 380px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out;
  }
  
  .signin-form:hover {
    transform: translateY(-5px);
  }
  

  .signin-form h2 {
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  

  .admin-message {
    font-size: 1rem;
    color: #f39c12;
    margin-bottom: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
  

  .input-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-size: 1rem;
    font-weight: 500;
  }
  
  .input-group input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 1rem;
    color: #333;
    background-color: #f9f9f9;
    transition: all 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: #2575fc; 
    outline: none;
    background-color: #fff;
  }
  

  .signin-btn {
    background: #2575fc;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    margin-top: 1.5rem;
  }
  
  .signin-btn:hover {
    background-color: #6a11cb;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .signin-btn:active {
    background-color: #2575fc;
    transform: translateY(2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  

  @media (max-width: 600px) {
    .signin-form {
      padding: 2rem;
      width: 90%;
    }
  
    .signin-form h2 {
      font-size: 1.6rem;
    }
  
    .input-group label {
      font-size: 0.9rem;
    }
  
    .signin-btn {
      font-size: 1rem;
      padding: 0.8rem 1.6rem;
    }
  }
  </style>
  