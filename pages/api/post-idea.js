const { Deta } = require("deta")

// add your Project Key
console.log(process.env)
const deta = Deta(process.env.DETA_API_KEY)
// name your DB
const db = deta.Base("ideas")

const fetch = async (query) => {
    if (query === undefined){const { items } = await db.fetch(); return items}

    const { items } = await db.fetch({tags: query.split(',')});

    return items;
}

const isValid = (query) => {
    if (query.content === undefined) {return false;}
    if (query.tags === undefined) {return false;}
    if (query.title === undefined) {return false;}

    return true;
}

export default async function getFeedDate(req, res){
    if (isValid(req.query)) {
        db.put({title:req.query.title, tags:req.query.tags.split(','), content:req.query.content, dateCreated:Date.now()})
    }
    
    res.status(200).json({status:'success'})
}