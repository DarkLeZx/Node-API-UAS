// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const PeminjamanSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Peminjaman', PeminjamanSchema)