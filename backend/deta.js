const { Deta } = require("deta")

// add your Project Key
const deta = Deta(process.env.local.DETA_API_KEY)
// name your DB
const db = deta.Base("ideas")

// use it!
db.put({
    id:'1', 
    title:'Test Title', 
    tags:['1', '2'], 
    content: 'My test app', 
    timeCreated: Date.now()
})

// call inside an async function ;)
const { items } = await db.fetch({
    has_visor: true
})

items.forEach(async (item) => {
    await db.delete(item.key)
})