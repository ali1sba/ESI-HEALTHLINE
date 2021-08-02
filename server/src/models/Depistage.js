module.exports = (sequelize, DataTypes) =>
  sequelize.define('Depistage', {
    typeDeVisite: {
      type: DataTypes.ENUM('admission', 'Systimatique')
    },
    docteurName: {
      type: DataTypes.STRING
    },
    poids: {
      type: DataTypes.INTEGER
    },
    taille: {
      type: DataTypes.INTEGER
    },
    DépistageDate1: {
      type: DataTypes.STRING
    },
    auditionOD: {
      type: DataTypes.INTEGER
    },
    auditionOG: {
      type: DataTypes.INTEGER
    },
    AcuiteVisuelleSansCOD: {
      type: DataTypes.INTEGER
    },
    AcuiteVisuelleSansCOG: {
      type: DataTypes.INTEGER
    },
    AcuiteVisuelleAvecCOD: {
      type: DataTypes.INTEGER
    },
    AcuiteVisuelleAvecCOG: {
      type: DataTypes.INTEGER
    },
    checkedDouleurs: {
      type: DataTypes.BLOB
    },
    textarea1: {
      type: DataTypes.STRING
    },
    textarea2: {
      type: DataTypes.STRING
    },
    textarea3: {
      type: DataTypes.STRING
    },
    textarea4: {
      type: DataTypes.STRING
    },
    textarea5: {
      type: DataTypes.STRING
    },
    textarea6: {
      type: DataTypes.STRING
    },
    CVPouls: {
      type: DataTypes.STRING
    },
    CVTa: {
      type: DataTypes.STRING
    },
    CVCyanose: {
      type: DataTypes.STRING
    },
    checkListOphtalmolodique: {
      type: DataTypes.BLOB
    },
    checkListORL: {
      type: DataTypes.BLOB
    },
    checkListLocomoteur: {
      type: DataTypes.BLOB
    },
    checkListRespiratoire: {
      type: DataTypes.BLOB
    },
    checkListCardioVasculaire: {
      type: DataTypes.BLOB
    },
    DigestifDentureCarie: {
      type: DataTypes.STRING
    },
    DigestifGingivopatie: {
      type: DataTypes.STRING
    },
    Digestifabdomens: {
      type: DataTypes.STRING
    },
    DigestifHernie: {
      type: DataTypes.STRING
    },
    DigestifFoie: {
      type: DataTypes.STRING
    },
    DigestifAppétit: {
      type: DataTypes.STRING
    },
    DigestifTransit: {
      type: DataTypes.STRING
    },
    DigestifSelles: {
      type: DataTypes.STRING
    },
    DigestifRectorragies: {
      type: DataTypes.STRING
    },
    DigestifDouleurAbdominales: {
      type: DataTypes.STRING
    },
    DigestifAutres: {
      type: DataTypes.STRING
    },
    DigestifPyrosis: {
      type: DataTypes.BLOB
    },
    DigestifVomissements: {
      type: DataTypes.BLOB
    },
    checkDigestifAppétit: {
      type: DataTypes.BLOB
    },
    checkDigestifTransit: {
      type: DataTypes.BLOB
    },
    checkDigestifSelles: {
      type: DataTypes.BLOB
    },
    checkDigestifRectorragies: {
      type: DataTypes.BLOB
    },
    checkDigestifDouleurAbdominales: {
      type: DataTypes.BLOB
    },
    checkDigestifAutres: {
      type: DataTypes.BLOB
    },
    checkListHematologique: {
      type: DataTypes.BLOB
    },
    HematologiquePétéchies: {
      type: DataTypes.STRING
    },
    HematologiquePurpura: {
      type: DataTypes.STRING
    },
    HematologiqueRate: {
      type: DataTypes.STRING
    },
    HematologiqueCervicaux: {
      type: DataTypes.STRING
    },
    HematologiqueSsAuxillaires: {
      type: DataTypes.STRING
    },
    HematologiqueSsClaviculaires: {
      type: DataTypes.STRING
    },
    HematologiqueIngionaux: {
      type: DataTypes.STRING
    },
    checkListEndocrinologie: {
      type: DataTypes.BLOB
    },
    EndocrinologieTyroide: {
      type: DataTypes.STRING
    },
    EndocrinologieTesticules: {
      type: DataTypes.STRING
    },
    EndocrinologieGlandesMammaires: {
      type: DataTypes.STRING
    },
    PsychoInterrogatoire: {
      type: DataTypes.STRING
    },
    PsychoExamensClinique: {
      type: DataTypes.STRING
    }
  })
