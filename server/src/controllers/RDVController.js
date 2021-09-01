const { RDV } = require('../models')
const { RDVNonValide } = require('../models')
const express = require('express')
const app = express()
// var fs = require("fs")
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

module.exports = {
  async progRDVPatient (req, res) {
    try {
      const RDVreceived = req.body
      // console.log(RDVreceived)
      // create RapportMedical
      const RDVToSave = {
        idUser: RDVreceived.form.idUser,
        DateAndTime: RDVreceived.form.dateAndTime,
        Type: RDVreceived.form.typeDeRDV,
        Note: RDVreceived.form.note
      }
      const RDVsaved = await RDV.create(RDVToSave)
      res.send({
        RDV: RDVsaved
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async progRDVPatientMobile (req, res) {
    try {
      const RDVreceived = req.body
      console.log(RDVreceived)
      // create RapportMedical
      const iduser = parseInt(RDVreceived.idUser)
      const RDVToSave = {
        idUser: iduser,
        DateAndTime: RDVreceived.dateAndTime,
        Type: RDVreceived.typeDeRDV,
        Note: RDVreceived.note
      }
      console.log(RDVToSave)
      const RDVsaved = await RDVNonValide.create(RDVToSave)
      console.log(JSON.stringify(RDVsaved))
      res.send({
        RDV: JSON.stringify(RDVsaved)
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async showRDVDashboard (req, res) {
    try {
      // const idreceived = req.body.id
      // console.log(idreceived)
      // create RapportMedical
      const RDVListDash = await RDV.findAll({
      })
      console.log(RDVListDash)
      // const RDVList = [{}]
      // RDVListcomplet.forEach(async element => {
      //   console.log(element.dataValues)
      //   RDVList.push(element.dataValues)
      // })
      // console.log(RDVList)
      res.send(RDVListDash)
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async showRDVSelectedPatient (req, res) {
    try {
      const idreceived = req.body.id
      // console.log(idreceived)
      // create RapportMedical
      const RDVList = await RDV.findAll({
        where: {
          idUser: idreceived
        }
      })
      // const RDVList = [{}]
      // RDVListcomplet.forEach(async element => {
      //   console.log(element.dataValues)
      //   RDVList.push(element.dataValues)
      // })
      // console.log(RDVList)
      res.send(RDVList)
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async annulerRDV (req, res) {
    try {
      const RDVIdReceived = req.body.id
      console.log(RDVIdReceived)
      // create RapportMedical
      const rdvtosupp = await RDV.findOne({
        where: {
          id: RDVIdReceived
        }
      })
      console.log(rdvtosupp)
      rdvtosupp.destroy()
      res.send({
        message: 'done'
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  },
  async saveChangRDVPatient (req, res) {
    try {
      const RDVreceived = req.body.rdv
      // console.log(RDVreceived)
      // create RapportMedical
      const RDVsaved = await RDV.findOne({
        where: {
          id: RDVreceived.id
        }
      })
      RDVsaved.Type = RDVreceived.typeDeRDV
      RDVsaved.DateAndTime = RDVreceived.dateAndTime
      RDVsaved.Note = RDVreceived.note
      await RDVsaved.save()
      res.send({
        message: `RDV successfully updated... dateOfBirth: ${RDVsaved.DateAndTime}`
      })
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to update RDV ${err}`
      })
    }
  },
  async showRDVSelectedPatientapp (req, res) {
    try {
      const idreceived = req.body.id
      console.log(req.body)
      // create RapportMedical
      const RDVList = await RDV.findAll({
        where: {
          idUser: idreceived
        }
      })
      const tab = []
      RDVList.forEach(async element => {
        console.log(element.dataValues)
        const rdvlist = {
          id: element.id,
          type: element.Type,
          date: element.DateAndTime
        }
        tab.push(rdvlist)
      })
      // const rdvlist = {
      //   id: RDVList.id,
      //   type: RDVList.Type,
      //   date: RDVList.DateAndTime
      // }
      const tabale = {
        table: tab
      }
      console.log(JSON.stringify(tabale))
      res.status(200).send(JSON.stringify(tabale))
    } catch (err) {
      res.status(500).send({
        error: `an error has occured trying to create RDV ${err}`
      })
    }
  }
}
