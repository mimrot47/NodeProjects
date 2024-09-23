const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Error saving data" });
  }
});

router.get("/", async (reqest, response) => {
  try {
    const personData = await Person.find();
    response.status(200).json(personData);
  } catch (err) {
    response.status(500).send(err);
  }
});

router.get("/:works", async (request, response) => {
  try {
    const workType = request.params.works;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const result = await Person.find({ work: workType });
      response.status(200).json(result);
    } else {
      response.status(400).json({ message: "worktype not found" });
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.put('/:id', async (req,res)=>{
  try{
    const id = req.params.id;
    const personData = req.body;
    const result = await Person.findByIdAndUpdate(id,personData,{
      new:true,
      runValidators:true
    })

    if(!result){
      res.status(404).json({'message':'person not found'})
    }
    res.status(200).json(result)

  }catch(erro){
    res.status(500).json({'message':'internal server error'})
  }
})


router.delete('/:id',async (req,res)=>{
try{
  const id = req  .param.id;
  const result = await Person.findOneAndDelete(id)
  if(!result){
    res.status(404).json({'message':'person not found'})
  }
  res.status(200).json({'message':'user delete succefully'})
}catch(error){
  res.status(500).json({'message':'internal server error'})
}
})

module.exports = router;