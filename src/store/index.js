import { createStore } from 'vuex'
import axios from 'axios';
// import router from '@/router';

export default createStore({
  state: {
    url: "http://127.0.0.1:8000/",
    fashion: [],
    // fashions:[],
    token: localStorage.getItem('token') || '',
    user: null,
    newdress: [],
    latest_fashion: [],
    contact:[],
    fashionItems: [] ,
    paymentStatus: null,
    paymentError: null,

  },

  mutations: {
   

    GET_USER(state,id){
      state.user.find(id)
    },


    SET_FASHION_ITEMS(state,fashionItems){
      state.fashionItems = fashionItems
    },



    ADD_FASHION(state, fashionItem) {
      state.fashion.push(fashionItem);
    },

    GET_Fashion(state,fashionn){
      state.fashion.find(fashionn)
    },



    DELETE_FASHION_ITEM(state, id) {
      state.fashionItems = state.fashionItems.filter(item => item.id !== id);
    },


    DELETE_OUTFIT(state, id) {
      state.outfits = state.outfits.filter(outfit => outfit.id !== id);
    },




    GET_CONTACT(state,contact){
      state.contact=contact
    },

    ADD_CONTACT(state,contact){
      state.contact.push(contact)
    },


    PAYMENT_SUCCESS(state, payload) {
      state.paymentStatus = payload;
      state.paymentError = null;
    },
    PAYMENT_ERROR(state, error) {
      state.paymentError = error;
      state.paymentStatus = null;
    },



    SET_FASHION_ITEMS2(state, fashionItems) {
      state.fashionItems = fashionItems;
    },
    ADD_FASHION_ITEM2(state, item) {
      state.fashionItems.push(item);
    },
    UPDATE_FASHION_ITEM2(state, updatedItem) {
      const index = state.fashionItems.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.fashionItems[index] = updatedItem;
      }
    },

    // SET_FASHION_ITEMS2(state, fashionItems) {
    //   state.fashionItems = fashionItems.map(item => ({
    //     ...item,
    //     imageUrl: item.imageUrl || 'https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg', 
    //   }));
    // },
    DELETE_FASHION_ITEM2(state, id) {
      state.fashionItems = state.fashionItems.filter(item => item.id !== id);
    },

    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    SET_USER(state, user) {
      state.user = user;
    },
    LOGOUT(state) {
      state.token = '';
      state.user = null;
      localStorage.removeItem('token');
    },






  },



  actions: {
    get_user({commit},id){
      commit('GET_USER',id)
    },

    async get_fashionn({state,commit}){
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };
      let {data} = await axios.get(state.url + "fashion/", config);
        console.log(data);
        commit("SET_FASHION_ITEMS",data)

    },

    async add_fashionn({state, commit},fashionData){
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }}
      let {data} =  await axios.post(state.url+"fashion/", fashionData,config);
      console.log(data);
      commit('ADD_FASHION', data)

    },



    async DELETE_FASHION({commit }, id) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };
      try {
        await axios.delete(`http://127.0.0.1:8000/fashion/${id}/`,config);
        commit('DELETE_FASHION_ITEM', id);
      } catch (error) {
        console.error('Error deleting fashion item:', error);
      }
    },



    async get_contact({  commit }) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };

      try {
        let { data } = await axios.get('http://127.0.0.1:8000/contact/', config);
        console.log(data);
        commit("GET_CONTACT", data); 
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    },

    async add_contact({  commit }, contactData) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };

      try {
        let { data } = await axios.post('http://127.0.0.1:8000/contact/', contactData, config);
        console.log(data);
        commit("ADD_CONTACT", data); 
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    },



    async get_fashionn2({state,commit}){
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };
      let {data} = await axios.get(state.url + "fashion23/", config);
        console.log(data);
        commit("SET_FASHION_ITEMS2",data)

    },

    async add_fashionn2({state, commit},fashionData){
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }}
      let {data} =  await axios.post(state.url+"fashion23/", fashionData,config);
      console.log(data);
      commit('ADD_FASHION_ITEM2', data)

    },

    async UPDATE_FASHION2({ commit }, { id, fashionData }) {
      try {
        const response = await axios.put(`http://127.0.0.1:8000/fashion23/${id}/`, fashionData);
        commit('UPDATE_FASHION_ITEM2', response.data);
        return response.data;
      } catch (error) {
        console.error('Error updating fashion item:', error);
        throw error;
      }
    },
    
    async DELETE_FASHION2({commit }, id) {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      };
      try {
        await axios.delete(`http://127.0.0.1:8000/fashion23/${id}/`,config);
        commit('DELETE_FASHION_ITEM', id);
      } catch (error) {
        console.error('Error deleting fashion item:', error);
      }
    },




    async processPayment({ commit }, paymentData) {
      try {
        console.log("Sending payment data:", paymentData); 
        const response = await axios.post("http://127.0.0.1:8000/api/pay/", paymentData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Payment response:", response.data); 
    
        commit("PAYMENT_SUCCESS", response.data);
        return response.data;
      } catch (error) {
        console.error("Payment error:", error.response?.data || error.message); 
        commit("PAYMENT_ERROR", error.response?.data || error.message);
        throw error;
      }
    },

    // card_number: "4111111111111111",
    // expiry_date: "12/25",
    // cvv: "123",


    async signIn({ state, commit }, credentials) {
      try {
        const response = await axios.post(`${state.url}sign_in/`, credentials);
        commit('SET_TOKEN', response.data.token);
        return true;
      } catch (error) {
        console.error('Login failed:', error.response?.data?.message || error.message);
        return false;
      }
    },

    logout({ commit }) {
      commit('LOGOUT');
    },
    
    
    

  },

  getters: {
    
    allFashions: (state) => state.fashion,
    getFormData: (state) => state.formData,
    getSubmissionStatus: (state) => state.submissionStatus,
    allContacts: (state) => state.contact ,
    fashionItems: state => state.fashionItems,
    paymentStatus: (state) => state.paymentStatus,
    paymentError: (state) => state.paymentError,
  },

  modules: {

  }
})
