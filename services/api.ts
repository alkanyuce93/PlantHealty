import axios from 'axios';

// API base URL - gerçek API URL'inizi buraya ekleyin
const API_BASE_URL = 'https://api.example.com';

// Axios instance oluştur
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Token varsa header'a ekle
    const token = ''; // AsyncStorage'dan token alınabilir
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Hata yönetimi
    if (error.response?.status === 401) {
      // Token geçersiz, login sayfasına yönlendir
    }
    return Promise.reject(error);
  }
);

// Plant API endpoints
export const plantAPI = {
  // Bitki tanıma
  identifyPlant: (imageData: string) => {
    return api.post('/plants/identify', { image: imageData });
  },

  // Bitki detayları
  getPlantDetails: (plantId: string) => {
    return api.get(`/plants/${plantId}`);
  },

  // Bitki bakım rehberi
  getPlantCareGuide: (plantId: string) => {
    return api.get(`/plants/${plantId}/care-guide`);
  },

  // Bitki listesi
  getPlants: (params?: any) => {
    return api.get('/plants', { params });
  },
};

// User API endpoints
export const userAPI = {
  // Kullanıcı kaydı
  register: (userData: any) => {
    return api.post('/auth/register', userData);
  },

  // Kullanıcı girişi
  login: (credentials: any) => {
    return api.post('/auth/login', credentials);
  },

  // Kullanıcı profili
  getProfile: () => {
    return api.get('/user/profile');
  },

  // Profil güncelleme
  updateProfile: (profileData: any) => {
    return api.put('/user/profile', profileData);
  },
};

export default api; 