const express = require('express')
const insuranceList=require('./insDb')
const app = express()
app.use(express.json())

const port = 3001

var cors = require('cors');
app.use(cors());

app.get('/getInsurance/:insuranceNumber', (req, res) => {
  let id = req.params.insuranceNumber;

  let indexCurrentId = insuranceList.findIndex((insIterator) => {
    return (insIterator.InsuranceNumber == id)
  })

  if (indexCurrentId >= 0) {
    let givenInsurance = insuranceList[indexCurrentId]
    res.send(givenInsurance)
  }
  else {
    res.send({ InsuranceNumber: -1 });
  }
})

app.put('/updateInsurance/:insuranceNumber', (req, res) => {
  let id = req.params.insuranceNumber;
  var index = insuranceList.findIndex((insIterator) => {
    return (insIterator.InsuranceNumber == id)
  })
  if(index>=0){
    let currentInsurance=insuranceList[index]
    currentInsurance.CurrentDeposit=req.body.CurrentDeposit;
    res.send(currentInsurance)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  