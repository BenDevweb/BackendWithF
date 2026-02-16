import type { HttpContext } from '@adonisjs/core/http'

export default class ApprenantsController {

  private apprenants = [
    { id: 1, nom: 'Aline', modules: [1], likes: [2], modulesLikes: [1] },
    { id: 2, nom: 'Marc', modules: [1,2], likes: [], modulesLikes: [] }
  ]

  // GET ALL
  async getApprenants({ view }: HttpContext) {
    return view.render('etudiants', { apprenants: this.apprenants })
  }

  // GET ONE
  async getApprenantById({ params }: HttpContext) {
    return this.apprenants.find(apprenant => apprenant.id == params.id)
  }

 async supprimerApprenant({ params, response }: HttpContext) {
  const id = Number(params.id)
  const found = this.apprenants.find(apprenant => apprenant.id === id)

  if (!found) {
    return response.status(404).send({ message: 'Apprenant non trouvé' })
  }

  // Supprimer l'apprenant
  this.apprenants = this.apprenants.filter(apprenant => apprenant.id !== id)

  // Rediriger vers la liste
  return response.redirect().toRoute('apprenants.getApprenants')
}

}
