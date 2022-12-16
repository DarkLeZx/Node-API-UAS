
const mongoose = require('mongoose')

const PinjamSchema = mongoose.Schema({
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
    tanggal_pinjam:{
        type :String,
        required:true
    },
    judulbuku:{
        type:String,
        required:true
    },
   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Pinjam', PinjamSchema)