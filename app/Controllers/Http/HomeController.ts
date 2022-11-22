import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Get } from '@ioc:SoftwareCitadel/Girouette'

export default class HomeController {
  @Get('/', 'Home.index')
  public async index({ view }: HttpContextContract) {
    return view.render('pages/home')
  }
}
