 // Fungsi untuk memformat harga
 function formatHarga(harga) {
    return harga.toLocaleString('id-ID') + ".000";
  }

  // Fungsi untuk memperbarui tampilan keranjang
  function updateKeranjang() {
    // Mendapatkan keranjang dari localStorage
    var keranjang = JSON.parse(localStorage.getItem('keranjang'));

    // Menampilkan daftar barang dalam keranjang
    var keranjangDiv = document.getElementById('keranjang');
    keranjangDiv.innerHTML = '';

    if (keranjang && keranjang.length > 0) {
      keranjang.forEach(function(barang) {
        var itemBaru = document.createElement('p');
        itemBaru.textContent = barang.namaBarang + ' - ' + formatHarga(barang.hargaBarang);
        keranjangDiv.appendChild(itemBaru);
      });
    } else {
      var kosong = document.createElement('p');
      kosong.textContent = '-------- Keranjang Kosong -------- :0';
      keranjangDiv.appendChild(kosong);
    }

    var totalHarga = 0;
    if (keranjang && keranjang.length > 0) {
      totalHarga = keranjang.reduce(function(acc, barang) {
        return acc + parseInt(barang.hargaBarang || 0);
      }, 0);
    }

    var totalHargaSpan = document.getElementById('total-harga');
    totalHargaSpan.textContent = '  ' +  formatHarga(totalHarga);
  }

  function hapusSemua() {
    // Menghapus keranjang dari localStorage
    localStorage.removeItem('keranjang');

    updateKeranjang();
    alert('Semua barang telah dihapus dari keranjang.');
  }

  updateKeranjang();

  // Memperbarui tampilan keranjang jika terjadi perubahan pada localStorage
  window.addEventListener('storage', function(event) {
    if (event.key === 'keranjangUpdate') {
      updateKeranjang();
    }
  });