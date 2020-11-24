import { Router } from 'express'
import NewsController from './app/controllers/NewsController'
const router = Router()

router.post('/news', NewsController.create)


export default router;