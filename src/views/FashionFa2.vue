<template>
  <div class="fashion-management">
    <header class="header1">
      <div class="logo">
        <router-link to="/">Fashion Blog</router-link>
      </div>
      <nav class="navbar">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/shop">Shop</router-link>
      </nav>
    </header>
    <h1>Manage Fashion Items</h1>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.name" placeholder="Fashion Name" required />
      <input type="file" @change="handleImageChange" accept="image/*" required />
      <input v-model="form.description" placeholder="Description" required />
      <input v-model.number="form.price" type="number" placeholder="Price" required />
      <div class="button-container">
      <button class="btn12" type="submit">{{ form.id ? 'Update' : 'Add' }} Fashion Item</button>
      </div>
    </form>

    <div class="fashion-list">
      <div v-for="item in fashionItems" :key="item.id" class="fashion-item">
        <img :src="getImageUrl(item.image)" alt="Fashion Image" class="product-image">  

        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p>${{ item.price }}</p>
        <button @click="editItem(item)" class="btn-edit">Edit</button>
        <button @click="deleteItem(item.id)" class="btn-delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const store = useStore();
    const fashionItems = computed(() => store.state.fashionItems);
    const form = ref({ id: null, name: '', imageUrl: '', description: '', price: null });
    

    onMounted(() => {
      store.dispatch('get_fashionn2');
    });


  const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    
    if (form.value.imageFile) {
      formData.append('image', form.value.imageFile);
      console.log(form.value.imageFile,"cbhwdjsbcjhsd")
    }

    if (form.value.id) {
      await store.dispatch('UPDATE_FASHION2', { id: form.value.id, fashionData: formData });
    } else {
      await store.dispatch('add_fashionn2', formData);
    }
    resetForm();
  } catch (error) {
    console.error('Error updating/adding fashion item:', error.response?.data || error);
    alert('Failed to update/add item.');
  }
};
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.imageFile = file;
  }
};


    const editItem = (item) => {
      form.value = { ...item };
    };

    const deleteItem = async (id) => {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
          await store.dispatch('DELETE_FASHION2', id);
        } catch (error) {
          console.error('Error deleting fashion item:', error.response?.data || error);
          alert('Failed to delete item.');
        }
      }
    };

    const resetForm = () => {
      form.value = { id: null, name: '', imageUrl: '', description: '', price: null };
    };
    const getImageUrl = (imagePath) => {
      if (!imagePath) return 'https://via.placeholder.com/150';
      return imagePath.startsWith('http') ? imagePath : `http://127.0.0.1:8000/${imagePath}`
    };


    return {
      fashionItems,
      form,
      handleSubmit,
      editItem,
      deleteItem,
      handleImageChange,
      getImageUrl
    };
  },
};
</script>

<style>


.header1 {
background-color: #1e1e2f;
padding: 20px 40px;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
}

.header1 .logo a {
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


.fashion-management {
  min-width: 100%;
  height: auto;
  margin: 50px auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8); 
  border-radius: 20px; 
  backdrop-filter: blur(20px); 
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1); 
  text-align: center;
  transition: all 0.3s ease-in-out; 
}

.fashion-management:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); 
}

@media (max-width: 768px) {
  .fashion-management {
    padding: 20px;
    width: 90%; 
  }
}



  h1 {
  font-size: 30px;
  font-weight: bold;
  color: #4a4e69;
  text-shadow: 2px 2px 10px rgba(74, 78, 105, 0.2);
  margin-bottom: 25px;
  }


  form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgba(255, 255, 255, 0.4);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }


  input {
  width: 100%;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  input:focus {
  border-color: #6c5ce7;
  outline: none;
  box-shadow: 0 0 8px rgba(108, 92, 231, 0.4);
  }



.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100%; 
}


.btn12 {
  width: 180px;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s ease;
}


.btn12:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
  }


  .fashion-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
  }


  .fashion-item {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  overflow: hidden;
  width: 250px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .fashion-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }


  .fashion-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  }

  .fashion-item img:hover {
  transform: scale(1.05);
  }


  h3 {
  font-size: 20px;
  margin: 12px 0;
  color: #333;
  }

  p {
  font-size: 14px;
  color: #555;
  }

  .fashion-item button {
  background: linear-gradient(135deg, #ff7675, #d63031);
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  border-radius: 6px;
  }

  .fashion-item button:first-of-type {
  background: linear-gradient(135deg, #00b894, #00cec9);
  }

  .fashion-item button:hover {
  opacity: 0.85;
  }


  @media (max-width: 768px) {
  .fashion-management {
      width: 90%;
  }

  .fashion-item {
      width: 100%;
  }
  }


.btn-edit {
  width: 100%;
  background: linear-gradient(135deg, #00b894, #00cec9);
  color: white;
  border: none;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s ease;
}

.btn-edit:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 184, 148, 0.2);
}


.btn-delete {
  width: 100%;
  background: linear-gradient(135deg, #ff7675, #d63031);
  color: white;
  border: none;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s ease;
}

.btn-delete:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(255, 119, 117, 0.2);
}


</style>


