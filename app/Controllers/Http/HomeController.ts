import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Get } from '@ioc:SoftwareCitadel/Girouette'

export default class HomeController {
  @Get('/', 'Home.index')
  public async index({ view }: HttpContextContract) {
    return view.render('pages/home')
  }

  @Get('/button', 'Home.button')
  public async button({ view }: HttpContextContract) {
    return view.render('pages/button')
  }

  @Get('/input', 'Home.input')
  public async input({ view }: HttpContextContract) {
    return view.render('pages/input')
  }
}
