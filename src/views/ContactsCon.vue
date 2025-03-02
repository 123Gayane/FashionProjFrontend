<template>
    <div id="contact">
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
        <section class="contact-intro">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us.</p>
        </section>
  
        <section class="contact-form">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="submitContactForm">
            <label for="name">Name:</label>
            <input v-model="contactForm.name" type="text" id="name" required />
  
            <label for="email">Email:</label>
            <input v-model="contactForm.email" type="email" id="email" required />
  
            <label for="message">Message:</label>
            <textarea v-model="contactForm.message" id="message" rows="4" required></textarea>
  
            <button type="submit">
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>
          <p v-if="successMessage" class="success-message">Message sent successfully!</p>
        </section>
  
        <section class="contact-details">
          <h2>Other Ways to Reach Us</h2>
          <ul>
            <li><strong>Email:</strong> contact@fashionblog.com</li>
            <li><strong>Phone:</strong> +1 (123) 456-7890</li>
            <li><strong>Address:</strong> 123 Fashion St, Style City, SC 12345</li>
          </ul>
        </section>
  
        <section class="location">
          <h2>Find Us on the Map</h2>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.2781292230083!2d44.515697254145635!3d40.177993241530166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440b8659b1913d%3A0x79c5fa60e0f61db3!2sGai%20Ave%201%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sus!4v1625223652878!5m2!1sen!2sus"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>

          </div>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 Fashion Blog. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        contactForm: {
          name: '',
          email: '',
          message: ''
        },
        isSubmitting: false,
        successMessage: false
      };
    },
    methods: {
      ...mapActions(['get_contact', 'add_contact']),
  
      async submitContactForm() {
        this.isSubmitting = true;
        try {
          await this.add_contact(this.contactForm);
          this.successMessage = true;
          this.contactForm = { name: '', email: '', message: '' }; 
        } catch (error) {
          console.error("Error sending message:", error);
          this.successMessage = false;
        } finally {
          this.isSubmitting = false;
        }
      }
    },
    created() {

      this.get_contact();
    }
  };
  </script>
  

  

  

<style>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
}

header {
    background-color: #333;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

header .logo a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.navbar a:hover {
    color: #f7f7f7;
}

main {
    padding: 50px 20px;
    max-width: 1100px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1, h2 {
    color: #333;
    text-align: center;
}

section {
    margin-bottom: 50px;
}

section p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    text-align: center;
    max-width: 800px;
    margin: 20px auto;
}

/* Contact Form Styling */
.contact-form form {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
}

.contact-form label {
    display: block;
    margin: 10px 0;
    font-size: 1rem;
    color: #333;
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.contact-form button {
    padding: 12px 25px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

.contact-details ul {
    list-style: none;
    padding: 0;
    font-size: 1.1rem;
    color: #666;
}

.contact-details li {
    margin-bottom: 15px;
}

.contact-details strong {
    font-weight: bold;
    color: #333;
}


.location .map-container {
    max-width: 100%;
    margin-top: 20px;
}


footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
    margin-top: 50px;
}

@media (max-width: 768px) {
    .contact-form {
        padding: 20px;
    }

    .contact-details ul {
        font-size: 1rem;
    }
}

</style>