import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/',listCategoriesController.handle)

export { categoriesRoutes }
