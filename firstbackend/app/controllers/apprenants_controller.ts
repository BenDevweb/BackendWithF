import type { HttpContext } from '@adonisjs/core/http'
import { apprenants } from 'App/Globals'
export default class ApprenantsController {
  // GET ALL
  async getApprenants({ view }: HttpContext) {
    return view.render('etudiants', { apprenants })
  }

  // GET ONE
  async getApprenantById({ params }: HttpContext) {
    return this.apprenants.find(apprenant => apprenant.id == params.id)
  }

  // CREATE
  async stockerApprenant({ request }: HttpContext) {
    const data = request.only(['nom'])

    const newApprenant = {
      id: this.apprenants.length + 1,
      nom: 'Jean Dupont',
      modules: ['HTML', 'CSS'],
      likes: ['Alice'],
      modulesLikes: ['Javascript']
    }

    this.apprenants.push(newApprenant)
    return newApprenant
  }

  // Mise a jour de l'apprenant(e)
async ModifierApprenant({ params, request, response }: HttpContext) {
  const apprenant = this.apprenants.find(apprenant => apprenant.id === Number(params.id))
  if (!apprenant) 
    return response.status(404).send({ message: 'Apprenant non trouvé' })

  const nom = request.input('nom')
  if (!nom) 
    return response.status(400).send({ message: 'Le nom est requis' })

  apprenant.nom = nom

  return response.redirect().toRoute('apprenants.getApprenants')
}

  
 async supprimerApprenant({ params, response }: HttpContext) {
  const id = Number(params.id)
  const found = this.apprenants.find(a => a.id === id)

  if (!found) {
    return response.status(404).send({ message: 'Apprenant non trouvé' })
  }

  // Supprimer l'apprenant
  this.apprenants = this.apprenants.filter(a => a.id !== id)

  // Rediriger vers la liste
  return response.redirect().toRoute('apprenants.getApprenants')
}
}
