<template>
    <div class="checkout-wrapper">
      <div class="cart-container">
        <h1>Checkout</h1>
        <div class="credit-card">
          <div class="card-chip"></div>
          <div class="card-info">
            <p class="card-number">{{ cardNumber || "**** **** **** ****" }}</p>
            <div class="card-details">
              <span>{{ expiryDate || "MM/YY" }}</span>
              <span>{{ cvv ? "***" : "CVV" }}</span>
            </div>
          </div>
        </div>
  
        <form @submit.prevent="processPayment" class="checkout-form">
          <div class="form-group">
            <label for="cardNumber">Card Number</label>
            <input type="text" v-model="cardNumber" required placeholder="**** **** **** ****" />
            <!-- <input type="text" v-model="cardNumber" autocomplete="cc-number" required placeholder="**** **** **** ****" /> -->
             

          </div>
  
          <div class="form-group-row">
            <div class="form-group">
              <label for="expiry">Expiry Date</label>
              <!-- <input type="text" v-model="expiryDate" required placeholder="MM/YY" /> -->
              <input type="text" v-model="expiryDate" autocomplete="cc-exp" required placeholder="MM/YY" />
            </div>
  
            <div class="form-group">
              <label for="cvv">CVV</label>
                <input type="text" v-model="cvv" autocomplete="cc-csc" required placeholder="123" />
            </div>
          </div>
  
          <button type="submit" class="checkout-btn">Pay ${{ totalPrice }}</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { computed, ref } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
  
      const cardNumber = ref("");
      const expiryDate = ref("");
      const cvv = ref("");
  
      const totalPrice = computed(() => store.state.cartTotal);
  
      const processPayment = () => {
        const paymentData = {
          card_number: cardNumber.value,
          expiry_date: expiryDate.value,
          cvv: cvv.value,
          amount: totalPrice.value,
        };
  
        store.dispatch("processPayment", paymentData).then(() => {
          alert("Payment successful!");
          router.push("/");
        }).catch(() => {
          alert("Payment failed. Try again. Invalid Card number");
        });
      };
  
      return {
        cardNumber,
        expiryDate,
        cvv,
        totalPrice,
        processPayment,
      };
    },
  };
  </script>
  
  <style scoped>

  .checkout-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #2c3e50, #4ca1af);
    padding: 20px;
  }
  

  .cart-container {
    max-width: 420px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: white;
  }
  

  .credit-card {
    width: 100%;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 15px;
    text-align: left;
    position: relative;
    color: white;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }
  
  .card-chip {
    width: 40px;
    height: 25px;
    background: gold;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .card-info {
    font-size: 16px;
    font-weight: bold;
  }
  
  .card-number {
    letter-spacing: 2px;
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  .card-details {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  
 
  .checkout-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .form-group label {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
  }
  
  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  input:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 6px rgba(40, 167, 69, 0.4);
  }
  

  .form-group-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .form-group-row .form-group {
    flex: 1;
  }
  

  .checkout-btn {
    width: 100%;
    background: linear-gradient(135deg, #28a745, #218838);
    color: white;
    padding: 12px;
    font-size: 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .checkout-btn:hover {
    background: linear-gradient(135deg, #218838, #1e7e34);
    transform: scale(1.03);
  }
  

  @media (max-width: 480px) {
    .cart-container {
      width: 90%;
      padding: 20px;
    }
  
    .form-group-row {
      flex-direction: column;
    }
  }
  </style>
  