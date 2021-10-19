import { ICategoriesRepository , ICreateCategoryDTO } from './ICategoriesRepository'
import { Category } from '../model/Category'

class PostgresCategoriesRepository implements ICategoriesRepository {
  create ({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.')
  }

  list (): Category[] {
    return null
  }

  findByName (name: string): Category {
    return null
  }
}

export { PostgresCategoriesRepository }
