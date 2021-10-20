import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  private readonly specificationsRepository: ISpecificationRepository

  constructor (specificationsRepository: ISpecificationRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute ({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)
    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!')
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
