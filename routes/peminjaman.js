// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Peminjaman = require('../models/Peminjaman')
const verivyToken = require('../config/verivyToken')
// Create 

router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const peminjamanPost = new Peminjaman({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const peminjaman = await peminjamanPost.save()
        // response
        res.json(peminjaman)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',verivyToken,async(req,res)=>{
    try {
        const peminjaman=await peminjaman.find()
        res.json(peminjaman)
    }
    catch(error){res.json({message:error})
    }
})

router.delete('/:peminjamanId',async(req,res)=>{
try{
    const peminjaman= await Peminjaman.deleteOne({_id:req.params.peminjamanId})
    res.json(peminjaman)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

router.put('/:peminjamanId', async(req,res)=>{
    const data={
        nama: req.body.nama,
        alamat: req.body.alamat
    }
  
    try{
        const peminjaman =await Peminjaman.updateOne({_id:req.params.peminjamanId}, data)
        res.json(peminjaman)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

module.exports = router