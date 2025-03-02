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
        <section class="intro">
            <h1>About Us</h1>
            <p>Welcome to Fashion Blog! We bring you the latest trends, seasonal fashion tips, and more!</p>
            <p>Our team is dedicated to providing high-quality, fashionable content to our readers. Whether it's a fashion show, style tips, or seasonal guides, we are here to bring the best of fashion to you.</p>
        </section>

        <section class="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to inspire and inform. We believe that fashion is a form of self-expression and we aim to share ideas and styles that help people feel confident, stylish, and empowered. We focus on making fashion accessible to everyone, with content for all ages and body types.</p>
        </section>

        <section class="team">
            <h2>Meet Our Team</h2>
            <div class="team-members">
                <div class="team-member">
                    <img src="https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg" alt="Team Member 1">
                    <h3>Jane Doe</h3>
                    <p>Founder & Editor-in-Chief</p>
                </div>
                <div class="team-member">
                    <img src="https://t3.ftcdn.net/jpg/03/22/53/38/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer.jpg" alt="Team Member 2">
                    <h3>John Smith</h3>
                    <p>Fashion Expert & Contributor</p>
                </div>
                <div class="team-member">
                    <img src="https://img.freepik.com/premium-photo/portrait-beautiful-young-womanxa_118124-35878.jpg?w=1800" alt="Team Member 3">
                    <h3>Emily Rose</h3>
                    <p>Stylist & Content Curator</p>
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

<style scoped>
    body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
}

header {
background-color: #1e1e2f;
padding: 20px 40px;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
}

header .logo a {
font-size: 1.8rem;
color: #f39c12;
text-decoration: none;
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
color: #f39c12;
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

.mission p {
    font-size: 1.2rem;
    color: #444;
}

.team {
    text-align: center;
}

.team-members {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.team-member {
    width: 200px;
    text-align: center;
}

.team-member img {
    width: 180px; /* Adjust size */
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #ddd; /* Soft border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.team-member img:hover {
    transform: scale(1.1); /* Slight zoom effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}


.team-member h3 {
    font-size: 1.3rem;
    color: #333;
}

.team-member p {
    color: #888;
    font-size: 1rem;
}

footer {
background-color: #1e1e2f;
color: white;
padding: 30px 20px;
text-align: center;
}

@media (max-width: 768px) {
    .team-members {
        flex-direction: column;
    }
}


</style>