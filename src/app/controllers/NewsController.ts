import { Request, Response } from 'express'
import News from '../../database/entity/News'
import Category from '../../database/entity/Category'
import { getRepository } from 'typeorm'

class NewsController{
    async create(req: Request, res: Response) {
        const NewRepository = getRepository(News)

        const { new_name, new_content, category_name } = req.body;

        const news = NewRepository.create({
            ...req.body,
            category_name
        })

        await NewRepository.save(news)

        return res.json(news)
    }
}

export default new NewsController()