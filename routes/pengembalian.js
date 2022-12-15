// (5) Buat router dosen

const express = require('express')
const Pengembalian = require('../models/Pengembalian')
const router = express.Router() 
const Pengembalian = require('../models/Pengembalian')

// Create 
router.post('/', async(req, res) => {
    // tampung input dosen 
    const pengembalianPost = new Pengembalian({
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        npm: req.body.npm,
        judulBuku:req.body.judulBuku
    })

    try {
        // simpan data 
        const Pengembalian = await pengembalianPost.save()
        // response
        res.json(pengembalian)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router