// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Pinjam = require('../models/Pinjam')
const verivyToken = require('../config/verivyToken')
// Create 

router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const pinjamPost = new Pinjam({
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        npm: req.body.npm,
        judulBuku:req.body.judulBuku
    })

    try {
        // simpan data 
        const pinjam = await pinjamPost.save()
        // response
        res.json(pinjam)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',verivyToken,async(req,res)=>{
    try {
        const pinjam=await pinjam.find()
        res.json(pinjam)
    }
    catch(error){res.json({message:error})
    }
})

router.delete('/:pinjamId',async(req,res)=>{
try{
    const pinjam= await Pinjam.deleteOne({_id:req.params.pinjamId})
    res.json(pinjam)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

router.put('/:pinjamId', async(req,res)=>{
    const data={
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        npm: req.body.npm,
        judulBuku:req.body.judulBuku
    }
  
    try{
        const pinjam =await Pinjam.updateOne({_id:req.params.pinjamId}, data)
        res.json(pinjam)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

module.exports = router