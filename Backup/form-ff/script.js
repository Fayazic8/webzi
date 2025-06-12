// Menunggu sampai seluruh halaman HTML selesai dimuat, ini praktik terbaik.
document.addEventListener('DOMContentLoaded', function() {

    // Menargetkan form dengan ID yang BENAR: 'whatsapp-form'
    const form = document.getElementById('whatsapp-form');

    // Menambahkan 'listener' untuk event 'submit' pada form tersebut
    form.addEventListener('submit', function(event) {
        
        // Mencegah halaman me-refresh saat tombol submit ditekan
        event.preventDefault();

        // --- GANTI NOMOR WHATSAPP ANDA DI SINI ---
        const nomorAdmin = '6285856527457'; // Gunakan format 62, bukan 0

        // Mengambil data dari input berdasarkan ID yang ada di HTML Anda
        const nama = document.getElementById('nama').value;
        const idGame = document.getElementById('id-game').value;
        const produk = document.getElementById('topup').value;
        const pembayaran = document.getElementById('pembayaran').value;

        // Pengecekan data (validasi)
        if (!idGame || !produk || !pembayaran) {
            alert('Harap isi ID Game, pilih Topup, dan Metode Pembayaran!');
            return; // Hentikan fungsi jika ada data yang kosong
        }

        // Membuat format pesan yang akan dikirim ke WhatsApp
        let pesan = `Halo Admin Ziee Store, saya mau topup Free Fire:\n\n`;
        
        // Hanya tambahkan baris "Nama" jika kolomnya diisi
        if (nama) {
            pesan += `*Nama:* ${nama}\n`;
        }
        
        pesan += `*ID Game:* ${idGame}\n`;
        pesan += `*Produk:* ${produk}\n`;
        pesan += `*Metode Pembayaran:* ${pembayaran}\n\n`;
        pesan += `Mohon segera diproses. Terima kasih.`;

        // Meng-encode pesan agar aman untuk digunakan di dalam URL
        const pesanEncoded = encodeURIComponent(pesan);

        // Membuat URL lengkap untuk WhatsApp
        const urlWhatsApp = `https://wa.me/${nomorAdmin}?text=${pesanEncoded}`;

        // Membuka WhatsApp di tab/jendela baru
        window.open(urlWhatsApp, '_blank');
    });

});