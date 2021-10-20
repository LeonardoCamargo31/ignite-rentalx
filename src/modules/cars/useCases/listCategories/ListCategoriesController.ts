import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  private readonly listCategoriesUseCase: ListCategoriesUseCase

  constructor (listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase
  }

  handle (request: Request,response: Response): Response {
    const categories = this.listCategoriesUseCase.execute()
    return response.status(200).json(categories)
  }
}

export { ListCategoriesController }
