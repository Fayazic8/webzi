document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // --- GANTI NOMOR WHATSAPP DI BAWAH INI ---
    const nomorAdmin = '6285856527457'; 
    // -----------------------------------------

    // Mengambil data dari form
    const nama = document.getElementById('nama').value;
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const produk = document.getElementById('produk').value;
    const pembayaran = document.getElementById('pembayaran').value; // DIUBAH: Nama variabel harus beda

    // Pengecekan jika field yang wajib diisi masih kosong
    // DITAMBAH: Pengecekan untuk 'pembayaran'
    if (userId === '' || serverId === '' || produk === '' || pembayaran === '') {
        // DIUBAH: Pesan alert diperbarui
        alert('Harap isi User ID, Server ID, pilih produk, dan pilih metode pembayaran.');
        return;
    }

    // Menggabungkan User ID dan Server ID untuk pesan
    const idLengkap = `${userId} (${serverId})`;

    // Membuat format pesan WhatsApp
    let pesan = `Halo Admin, saya mau topup Mobile Legends:\n\n`;
    if (nama) {
        pesan += `*Nama:* ${nama}\n`;
    }
    pesan += `*ID (Server):* ${idLengkap}\n`;
    pesan += `*Produk:* ${produk}\n`;
    pesan += `*Pembayaran:* ${pembayaran}\n\n`; // DIUBAH: Sekarang variabel 'pembayaran' sudah ada dan bisa digunakan
    pesan += `Mohon segera diproses, terima kasih.`;

    // Meng-encode pesan agar sesuai format URL
    const pesanEncoded = encodeURIComponent(pesan);

    // Membuat URL WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${pesanEncoded}`;

    // Membuka WhatsApp di tab baru
    window.open(urlWhatsApp, '_blank');
});