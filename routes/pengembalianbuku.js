// (5) Buat router dosen

const express = require('express')
const Pengembalianbuku = require('../models/Pengembalianbuku')
const router = express.Router() 


// Create 
router.post('/', async(req, res) => {
    // tampung input dosen 
    const pengembalianbukuPost = new Pengembalianbuku({
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        npm: req.body.npm,
        judulBuku:req.body.judulBuku
    })

    try {
        // simpan data 
        const Pengembalianbuku = await pengembalianbukuPost.save()
        // response
        res.json(pengembalianbuku)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router