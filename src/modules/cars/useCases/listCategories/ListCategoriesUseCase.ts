import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { Category } from '../../model/Category'

class ListCategoriesUseCase {
  private readonly categoriesRepository: ICategoriesRepository
  constructor (categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}

export { ListCategoriesUseCase }
