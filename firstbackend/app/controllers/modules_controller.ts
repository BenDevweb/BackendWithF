import type { HttpContext } from '@adonisjs/core/http'

export default class ModulesController {

  private modules = [
    { id: 1, titre: 'Math', followers: [1,2], likes: [1] },
    { id: 2, titre: 'JS', followers: [2], likes: [] }
  ]

  async index({ view }: HttpContext) {
    return view.render('modules', { modules: this.modules })
  }

  async show({ params }: HttpContext) {
    return this.modules.find(m => m.id == params.id)
  }

  async store({ request }: HttpContext) {
    const module = {
      id: this.modules.length + 1,
      titre: request.input('titre'),
      followers: [],
      likes: []
    }
    this.modules.push(module)
    return module
  }

  async update({ params, request }: HttpContext) {
    const module = this.modules.find(m => m.id == params.id)
    if (!module) return

    module.titre = request.input('titre')
    return module
  }

  async destroy({ params }: HttpContext) {
    this.modules = this.modules.filter(m => m.id != params.id)
    return { message: 'Deleted' }
  }
}
