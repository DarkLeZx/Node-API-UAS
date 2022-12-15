// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Mahasiswa = require('../models/Mahasiswa')
const verivyToken = require('../config/verivyToken')
// Create 

router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Mahasiswa({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const mahasiswa = await mahasiswaPost.save()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',verivyToken,async(req,res)=>{
    try {
        const mahasiswa=await Mahasiswa.find()
        res.json(mahasiswa)
    }
    catch(error){res.json({message:error})
    }
})

router.delete('/:mahasiswaId',async(req,res)=>{
try{
    const mahasiswa= await Mahasiswa.deleteOne({_id:req.params.mahasiswaId})
    res.json(mahasiswa)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

router.put('/:mahasiswaId', async(req,res)=>{
    const data={
        nama: req.body.nama,
        alamat: req.body.alamat
    }
  
    try{
        const mahasiswa =await Mahasiswa.updateOne({_id:req.params.mahasiswaId}, data)
        res.json(mahasiswa)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

module.exports = router