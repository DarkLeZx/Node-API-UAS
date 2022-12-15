// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const PengembalianSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    jurusan: {
        type: String,
        required: true
    },
    npm:{
        type: String,
        required:true
    },
    judulBuku:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Pengembalian', PengembalianSchema)