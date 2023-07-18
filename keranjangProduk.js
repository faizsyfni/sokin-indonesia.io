 // Fungsi untuk menambahkan barang
 function tambahBarang(namaBarang, hargaBarang) {
    // Mendapatkan keranjang dari localStorage (jika ada) atau membuat keranjang baru
    var keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

    // Menambahkan barang ke keranjang
    keranjang.push({ namaBarang: namaBarang, hargaBarang: hargaBarang });

    // Menyimpan keranjang ke localStorage
    localStorage.setItem('keranjang', JSON.stringify(keranjang));

    // Memperbarui keranjang di jendela lain (jika ada)
    localStorage.setItem('keranjangUpdate', Date.now().toString());

    // Memberikan notifikasi kepada pengguna bahwa barang telah ditambahkan
    alert('Barang ' + namaBarang + ' telah ditambahkan ke keranjang.');
  }