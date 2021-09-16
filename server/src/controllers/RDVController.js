const { RDV } = require('../models')
const { User } = require('../models')
const { Compte } = require('../models')
const SendEmail = require('./SendEmail')
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
      await RDV.create(RDVToSave)
      const user = await User.findOne({
        where: {
          id: RDVreceived.form.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = RDVToSave.DateAndTime.substring(0, 10)
      const heure = RDVToSave.DateAndTime.substring(11, 16)
      SendEmail.sendprogRDVPatientEmail(compte.email, date, heure, res)
    } catch (err) {
      res.send({
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

      const user = await User.findOne({
        where: {
          id: rdvtosupp.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = rdvtosupp.DateAndTime.substring(0, 10)
      const heure = rdvtosupp.DateAndTime.substring(11, 16)
      SendEmail.sendannulerRDVEmail(compte.email, date, heure, res)

      rdvtosupp.destroy()
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

      const user = await User.findOne({
        where: {
          id: RDVsaved.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = RDVsaved.DateAndTime.substring(0, 10)
      const heure = RDVsaved.DateAndTime.substring(11, 16)
      SendEmail.sendsaveChangRDVPatientEmail(compte.email, date, heure, res)

      RDVsaved.Type = RDVreceived.typeDeRDV
      RDVsaved.DateAndTime = RDVreceived.dateAndTime
      RDVsaved.Note = RDVreceived.note
      await RDVsaved.save()
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
  async showRDVDemandeSelectedPatientapp (req, res) {
    try {
      const idreceived = req.body.id
      console.log(req.body)
      // create RapportMedical
      const RDVList = await RDVNonValide.findAll({
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

      const user = await User.findOne({
        where: {
          id: rdv.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = rdv.DateAndTime.substring(0, 10)
      const heure = rdv.DateAndTime.substring(11, 16)
      SendEmail.sendvaliderRDVdemandeEmail(compte.email, date, heure, res)
      rdv.destroy()
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

      const user = await User.findOne({
        where: {
          id: rdv.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = rdv.DateAndTime.substring(0, 10)
      const heure = rdv.DateAndTime.substring(11, 16)
      SendEmail.sendrefuserRDVdemandeEmail(compte.email, date, heure, res)
      rdv.destroy()
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

      const user = await User.findOne({
        where: {
          id: rdv.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = rdv.DateAndTime.substring(0, 10)
      const heure = rdv.DateAndTime.substring(11, 16)
      const Nvdate = newDate.substring(0, 10)
      const Nvheure = newDate.substring(11, 16)
      SendEmail.sendenregistrerDemandeReportRDVEmail(compte.email, date, heure, Nvdate, Nvheure, res)

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

      const user = await User.findOne({
        where: {
          id: rdv.idUser
        }
      })
      const compte = await Compte.findOne({
        where: {
          id: user.idCompte
        }
      })
      const date = rdv.DateAndTime.substring(0, 10)
      const heure = rdv.DateAndTime.substring(11, 16)
      SendEmail.sendrefuserDemandeReportRDVEmail(compte.email, date, heure, res)
      rdv.destroy()
      res.send({
        message: 'response from the server to refuserDemandeReportRDV'
      })
    } catch (err) {
      res.send({
        error: `an error has occured trying to refuserDemandeReportRDV ${err}`
      })
    }
  },
  async reportRDVMobile (req, res) {
    try {
      console.log(req.body)
      const id = req.body.idRDV
      console.log(id)
      const rdv = await RDV.findOne({
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
      await RDVaReporter.create(rdvCr)
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
