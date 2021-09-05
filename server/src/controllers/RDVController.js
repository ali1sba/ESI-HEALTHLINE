const { RDV } = require('../models')
const { User } = require('../models')

const { RDVNonValide } = require('../models')
const { RDVaReporter } = require('../models')
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
  },
  // ********************** RDV Section DocDashboard *********************
  // ***** Traitement des demandes de RDV *****
  async recoverDemandesRDV (req, res) {
    try {
      const rdv = await RDVNonValide.findAll({
        attributes: ['id', 'idUser', 'DateAndTime', 'Type', 'Note']
      })
      const rdvSent = []
      for (let i = 0; i < rdv.length; i++) {
        const idUser = rdv[(i)].idUser
        const user = await User.findOne({
          where: {
            id: idUser
          }
        })
        rdvSent.push({ idRDV: rdv[(i)].id, Patient: user.dataValues.lastName + ' ' + user.dataValues.firstName, DateAndTime: rdv[(i)].DateAndTime, Type: rdv[(i)].Type, Note: rdv[(i)].Note })
      }
      res.send({
        message: 'response from the server to recoverDemandesRDV',
        rdv: rdvSent
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to recoverDemandesRDV ${err}`
      })
    }
  },

  async validerRDVdemande (req, res) {
    try {
      const id = req.body.idRDV
      const rdv = await RDVNonValide.findOne({
        where: {
          id: id
        }
      })
      const rdvCr = {
        idUser: rdv.idUser,
        DateAndTime: rdv.DateAndTime,
        Type: rdv.Type,
        Note: rdv.Note,
        GroupORIndiv: 'Individuel'
      }
      await RDV.create(rdvCr)
      rdv.destroy()
      res.send({
        message: 'response from the server to validerRDVdemande',
        idRDV: id
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to validerRDVdemande ${err}`
      })
    }
  },

  async refuserRDVdemande (req, res) {
    try {
      const id = req.body.idRDV
      const rdv = await RDVNonValide.findOne({
        where: {
          id: id
        }
      })
      rdv.destroy()
      res.send({
        message: 'response from the server to refuserRDVdemande',
        idRDV: id
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to refuserRDVdemande ${err}`
      })
    }
  },

  // ***** Traitements des demandes de report de RDV *****
  async recoverDemandesRDVReport (req, res) {
    try {
      const rdv = await RDVaReporter.findAll({
        attributes: ['id', 'idUser', 'DateAndTime', 'Type', 'Note', 'GroupORIndiv']
      })
      const rdvSent = []
      for (let i = 0; i < rdv.length; i++) {
        const idUser = rdv[(i)].idUser
        const user = await User.findOne({
          where: {
            id: idUser
          }
        })
        rdvSent.push({ idRDV: rdv[(i)].id, Patient: user.dataValues.lastName + ' ' + user.dataValues.firstName, DateAndTime: rdv[(i)].DateAndTime, Type: rdv[(i)].Type, Note: rdv[(i)].Note, GroupORIndiv: rdv[(i)].GroupORIndiv })
      }
      res.send({
        message: 'response from the server to recoverDemandesRDVReport',
        rdv: rdvSent
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to recoverDemandesRDVReport ${err}`
      })
    }
  },

  async enregistrerDemandeReportRDV (req, res) {
    try {
      const id = req.body.idRDV
      const newDate = req.body.newDate
      const rdv = await RDVaReporter.findOne({
        where: {
          id: id
        }
      })
      const rdvCr = {
        idUser: rdv.dataValues.idUser,
        DateAndTime: newDate,
        Type: rdv.dataValues.Type,
        Note: rdv.dataValues.Note,
        GroupORIndiv: rdv.dataValues.GroupORIndiv
      }
      await RDV.create(rdvCr)
      rdv.destroy()
      res.send({
        message: 'enregistrerDemandeReportRDV from server'
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to enregistrerDemandeReportRDV ${err}`
      })
    }
  },

  async refuserDemandeReportRDV (req, res) {
    try {
      const id = req.body.idRDV
      const rdv = await RDVaReporter.findOne({
        where: {
          id: id
        }
      })
      const rdvCr = {
        idUser: rdv.dataValues.idUser,
        DateAndTime: rdv.dataValues.DateAndTime,
        Type: rdv.dataValues.Type,
        Note: rdv.dataValues.Note,
        GroupORIndiv: rdv.dataValues.GroupORIndiv
      }
      await RDV.create(rdvCr)
      rdv.destroy()
      res.send({
        message: 'response from the server to refuserDemandeReportRDV'
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to refuserDemandeReportRDV ${err}`
      })
    }
  }
  // *********************************************************************************

}
