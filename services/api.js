import mockData from './mockData';

const API_BASE_URL = 'http://192.168.0.240/kipsinglewindow/server/api'; // Ganti dengan URL API yang sebenarnya

const api = {
  /**
   * Fungsi untuk login pengguna
   * @param {string} nik - NIK pengguna
   * @param {string} password - Password pengguna
   * @returns {Promise<Object>} Hasil dari proses login
   */
  async login(nik, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nik=${encodeURIComponent(nik)}&password=${encodeURIComponent(password)}`,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message || 'Terjadi kesalahan saat login',
      };
    }
  },

  /**
   * Mengambil daftar sales orders
   * @returns {Promise<Array>} Daftar sales orders
   */
  async getSalesOrders() {
    try {
      // Ketika API sudah siap, ganti kode di bawah dengan panggilan API yang sebenarnya
      // Contoh:
      // const response = await fetch(`${API_BASE_URL}/sales-orders`);
      // const data = await response.json();
      // return data;
      
      // Untuk sementara, gunakan mock data
      return {
        success: true,
        data: [...mockData.salesOrders], // Buat salinan array untuk menghindari mutasi langsung
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error fetching sales orders:', error);
      return {
        success: false,
        error: 'Gagal memuat data sales orders',
        details: error.message
      };
    }
  },

  /**
   * Mengambil detail sales order berdasarkan ID
   * @param {string} orderId - ID sales order
   * @returns {Promise<Object>} Detail sales order
   */
  async getSalesOrderById(orderId) {
    try {
      // Implementasi panggilan API yang sebenarnya akan datang di sini
      const order = mockData.salesOrders.find(order => order.id === orderId);
      
      if (!order) {
        throw new Error('Sales order tidak ditemukan');
      }
      
      return {
        success: true,
        data: { ...order } // Return salinan order
      };
    } catch (error) {
      console.error(`Error fetching sales order ${orderId}:`, error);
      return {
        success: false,
        error: `Gagal memuat data sales order ${orderId}`,
        details: error.message
      };
    }
  },
  
  // Dummy function to simulate API call
  createSalesOrder: async (data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Sales order created successfully',
      data: {
        id: `BO-P01-2025-${Math.floor(1000000 + Math.random() * 9000000)}`,
        status: 'PENDING',
        ...data,
        createdAt: new Date().toISOString(),
        notes: 'This is a test order',
      }
    };
  },
  
  // Dummy data for Customers
  getCustomers: async () => {
    return {
      success: true,
      data: [
        { id: 1, name: 'PT. KRAKATAU POSCO', type: 'AGENT' },
        { id: 2, name: 'PT. KRAKATAU STEEL', type: 'DIRECT' },
        { id: 3, name: 'PT. INDONESIA FERRY', type: 'AGENT' },
        { id: 4, name: 'PT. PELINDO MARINE', type: 'DIRECT' },
      ]
    };
  },

  // Dummy data for Vessels
  getVessels: async () => {
    return {
      success: true,
      data: [
        { id: 1, name: 'BG. LKH 3883', type: 'Barge' },
        { id: 2, name: 'KM. BAHTERA INDAH', type: 'Cargo Ship' },
        { id: 3, name: 'KM. PELANGI', type: 'Passenger Ship' },
        { id: 4, name: 'MV. SAMUDERA RAYA', type: 'Container Ship' },
      ]
    };
  },

  // Dummy data for Tugboats
  getTugboats: async () => {
    return {
      success: true,
      data: [
        { id: 1, name: 'TB. SUKMA JAYA 01' },
        { id: 2, name: 'TB. SUKMA JAYA 02' },
        { id: 3, name: 'TB. SUKMA JAYA 03' },
        { id: 4, name: 'TB. SUKMA JAYA 04' },
        { id: 5, name: 'TB. SUKMA JAYA 05' },
      ]
    };
  },

  // Dummy data for Ports
  getPorts: async () => {
    return {
      success: true,
      data: [
        { id: 1, name: 'CIGADING 1', location: 'Cilegon' },
        { id: 2, name: 'CIGADING 2', location: 'Cilegon' },
        { id: 3, name: 'MERAK', location: 'Banten' },
        { id: 4, name: 'BAKAUHENI', location: 'Lampung' },
        { id: 5, name: 'CILACAP', location: 'Central Java' },
      ]
    };
  },

  // Dummy data for Commodities
  getCommodities: async () => {
    return {
      success: true,
      data: [
        { id: 1, group: 'Krakatau Steel', name: 'Steel Bar', type: 'General Cargo', package: '1 Package', tonnage: '1800 Tonnage' },
        { id: 2, group: 'Krakatau Posco', name: 'Coil Steel', type: 'General Cargo', package: '2 Packages', tonnage: '2500 Tonnage' },
        { id: 3, group: 'Other', name: 'Cement', type: 'Bulk Cargo', package: 'Bulk', tonnage: '3000 Tonnage' },
      ]
    };
  },

  // Dummy data for Service Codes
  getServiceCodes: async () => {
    return {
      success: true,
      data: [
        'TAMBAT TUG BDW',
        'WATER SUPPLY VIA HYDRANT',
        'PHC RENT AND SHORE CRANE FEE',
        'JASA PEMANDUAN CIGADING',
        'JASA PEMANDUAN NON CIGADING',
        'JASA TAMBAT (BOSS)',
        'JASA PANDU TUNDA TUBAN',
        'JASA PANDU TUNDA LUPUSM',
        'PEMANDUAN CIGADING DAN FUEL SURCHARGE',
        'PEMANDUAN DAN FUEL SURCHARGE NON CIGADING',
      ]
    };
  },

  // Dummy data for Sub Services
  getSubServices: async () => {
    return {
      success: true,
      data: [
        'FEE SUPPLY GEWA-VOYANT MANDALIKA',
        'FEE SUPPLY GEWA-VOYANT MANDALIKA T3',
        'FEE SUPPLY GEWA-VOYANT MANDALIKA T4',
        'FEE SUPPLY GEWA-VOYANT MANDALIKA T5',
        'FEE SUPPLY GEWA-VOYANT MANDALIKA T6',
      ]
    };
  },
};

export default api;
