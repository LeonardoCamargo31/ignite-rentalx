import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  private readonly categoriesRepository: ICategoriesRepository

  constructor (categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async loadCategories (file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []

      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse({ delimiter: ',' })

      // a cada pedaço lido queremos passar pelo parser
      stream.pipe(parseFile)
      parseFile
        .on('data', async (line) => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end',() => {
          resolve(categories)
        })
        .on('error',(err) => {
          reject(err)
        })
    })
  }

  async execute (file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    console.log(categories)

    categories.map(category => {
      const { name,description } = category
      const categoryAlreadyExists = this.categoriesRepository.findByName(name)
      if (categoryAlreadyExists) {
        throw new Error('Category already exists!')
      }
      this.categoriesRepository.create({ name,description })
    })
  }
}

export { ImportCategoryUseCase }
