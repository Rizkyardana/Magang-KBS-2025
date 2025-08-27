// Data untuk halaman Dashboard
const dashboardData = {
  recentOrders: [
    {
      // id: 'BO-P01-2025-0000001',
      // status: 'BOOKING VERIFIED',
      // customerName: 'PT. KRAKATAU POSCO',
      // vesselName: 'BG. LKH 3883',
      // relatedVessel: 'Yes',
      // portDischarge: 'CIGADING 2',
      // tugboat: 'TB. SUKMA JAYA 05',
      // customerType: 'AGENT',
      // bookingTime: '1 April 2025 13:02',
      // portOrigin: 'CIGADING 1',
    },
    // Tambahkan data order lainnya untuk dashboard di sini
  ]
};

// Data untuk halaman Sales Order
const salesOrdersData = {
  orders: [
    {
      id: 'BO-P01-2025-00000001',
      status: 'BOOKING VERIFIED',
      customerName: 'PT. KRAKATAU POSCO',
      vesselName: 'BG. LKH 3883',
      relatedVessel: 'Yes',
      portDischarge: 'CIGADING 2',
      tugboat: 'TB. SUKMA JAYA 05',
      customerType: 'AGENT',
      bookingTime: '1 April 2025 13:02',
      portOrigin: 'CIGADING 1',
    },
    // Tambahkan data sales order lainnya di sini
  ]
};

export default {
  dashboard: dashboardData,
  salesOrders: salesOrdersData.orders, // Tetap mempertahankan kompatibilitas dengan kode yang ada
  salesOrdersData, // Ekspor lengkap untuk akses yang lebih terstruktur
};
