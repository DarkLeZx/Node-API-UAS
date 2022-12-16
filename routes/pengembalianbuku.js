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
        tanggal_pengembalian:req.body.tanggal_pengembalian,
        judulbuku:req.body.judulbuku
    })

    try {
        // simpan data 
        const pengembalianbuku = await pengembalianbukuPost.save()
        // response
        res.json(pengembalianbuku)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/',async(req,res)=>{
    try {
        const pengembalianbuku=await Pengembalianbuku.find()
        res.json(pengembalianbuku)
    }
    catch(error){res.json({message:error})
    }
})

router.delete('/:pengembalianbukuId',async(req,res)=>{
try{
    const pengembalianbuku= await Pengembalianbuku.deleteOne({_id:req.params.pengembalianbukuId})
    res.json(pengembalianbuku)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})

router.put('/:pengembalianbukuId', async(req,res)=>{
    const data={
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        npm: req.body.npm,
        tanggal_pengembalian:req.body.tanggal_pengembalian,
        judulbuku:req.body.judulbuku
    }
  
    try{
        const pengembalianbuku =await Pengembalianbuku.updateOne({_id:req.params.pengembalianbukuId}, data)
        res.json(pengembalianbuku)
    }
    catch(error){
        res.json({
            message:error
        })
    }
})


module.exports = router