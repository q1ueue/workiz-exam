import * as rabbit from '../../rabbit'

const send = async (ctx) => {
  const broker = await rabbit.getInstance()
  await broker.send(ctx.params.qName || 'default', Buffer.from(JSON.stringify(ctx.request.body)))
  ctx.body = ''
}

export default {
  send
}
