const { Op } = require('sequelize')
const { User } = require('../models')
const { Compte } = require('../models')
const { RDV } = require('../models')
const { RDVGroup } = require('../models')
// const { RDVGroup } = require('../models')

module.exports = {
  

 

  async confirmModifRDVGroup (req, res) {
    try {
     
    
      const tst = await User.findAll()
      console.log(tst.length)     
    }
  }

  
  // ***************************** RDV INDIV **********************************





}
