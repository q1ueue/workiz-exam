import Router from 'koa-router'
import send from './send'

const router = new Router()

router.post('/api/:qName', send.send)

export default router
