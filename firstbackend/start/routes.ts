import router from '@adonisjs/core/services/router'
import ApprenantsController from '#controllers/apprenants_controller'
import ModulesController from '#controllers/modules_controller'

router.on('/').render('home').as('home')

// apprenants
router.get('/apprenants', [ApprenantsController, 'getApprenants']).as('apprenants.getApprenants')
router.get('/apprenants/:id', [ApprenantsController, 'getApprenantById']).as('apprenants.getApprenantById')
router.post('/apprenants', [ApprenantsController, 'stockerApprenant']).as('apprennants.stockerApprenant')
router.get('/apprenants/:id/modifier', [ApprenantsController, 'modifierForm']).as('apprenants.modifierForm')
router.post('/apprenants/:id/supprimer', [ApprenantsController, 'supprimerApprenant']).as('apprenants.supprimerApprenant')
router.get('/apprenants/ajouter', [ApprenantsController, 'ajouterApprenant']).as('apprenants.ajouterApprenant')


router.get('/modules', [ModulesController, 'index']).as('modules.index')
router.get('/modules/:id', [ModulesController, 'show'])
router.post('/modules', [ModulesController, 'store'])
router.put('/modules/:id', [ModulesController, 'update'])
router.delete('/modules/:id', [ModulesController, 'destroy'])


/*
// Deux facons de faire une route

// Fonction render Hello world

const apprenants = [
    {
      id: 1,
      name : 'Rollande',
      email : 'nbimpula@gmail.com'
    },
    {
      id: 2,
      name : 'Beni',
      email : 'nbimpula@gmail.com'
    },
  ]

  const modules = 
     [
      {
    id: 1,
    title : 'Developper le backend avec NodeJS et adonisjs',
    time: 20,
    Description : "Ce module nous permet a concevoir un backend complet et robuste sur nodeJS pour le developpeur JavaScript via NodeJs et AdonisJS."
  }
]
  

function helloWorld() {
  return 'Hello world '
}

function getApprenants() {
  return apprenants
}

function getModules() {
 return modules
}
function getApprenant(context: string): string {
  const id = context.params.id
  return apprenants.find(apprenant => apprenant.id === parseInt(id))
  
}

function getModule(context) {
  const id = context.params.id
  return modules.find(module => module.id === parseInt(id))
}


router.get('/', helloWorld)
router.get('/apprenants', getApprenants)
router.get('/modules', getModules)
router.get('apprenants/:id', getApprenant)
router.get('modules/:id', getModule)
*/



