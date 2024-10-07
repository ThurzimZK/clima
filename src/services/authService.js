import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../config';


const API_URL = `${BASE_URL}/login`; 
const API_URL_REG = `${BASE_URL}/register`;


export const authenticateUser = async (email, password) => {
    try {
      console.log(API_URL)
      const response = await axios.post(API_URL, { email, senha: password });
      
      const { token } = response.data;

      await AsyncStorage.setItem('userToken', token);
  
      return response.data; 
    } catch (error) {
      console.log(error);
  
      if (error.response) {
        console.log('Erro status:', error.response.status);
        throw error; 
      } else {
        throw new Error('Falha ao se conectar ao servidor');
      }
    }
  };

export const registerUser = async (name, email, password) => {
    const response = await axios.post(API_URL_REG, {
        nome: name,
        email,
        senha: password
    });
    return response;
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    throw new Error('Erro ao obter o token');
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    throw new Error('Erro ao remover o token');
  }
};

