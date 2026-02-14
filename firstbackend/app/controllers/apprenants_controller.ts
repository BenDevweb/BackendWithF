import type { HttpContext } from '@adonisjs/core/http'

export default class ApprenantsController {

  private apprenants = [
    { id: 1, nom: 'Aline', modules: [1], likes: [2], modulesLikes: [1] },
    { id: 2, nom: 'Marc', modules: [1,2], likes: [], modulesLikes: [] }
  ]

  // GET ALL
  async index({ view }: HttpContext) {
    return view.render('etudiants', { apprenants: this.apprenants })
  }

  // GET ONE
  async show({ params }: HttpContext) {
    return this.apprenants.find(a => a.id == params.id)
  }

  // CREATE
  async store({ request }: HttpContext) {
    const data = request.only(['nom'])

    const newApprenant = {
      id: 1, 
      nom: 'Jean Dupont', 
      modules: ['HTML', 'CSS'], 
      likes: ['Alice'], 
      modulesLikes: ['Javascript']
    }

    this.apprenants.push(newApprenant)
    return newApprenant
  }

  // UPDATE
  async update({ params, request }: HttpContext) {
    const apprenant = this.apprenants.find(e => e.id == params.id)
    if (!apprenant) return { message: 'Not found' }

    aprenant.nom = request.input('nom')
    return apprenant
  }

  // DELETE
  async destroy({ params }: HttpContext) {
    this.apprenants = this.apprenants.filter(e => e.id != params.id)
    return { message: 'Deleted' }
  }

}
