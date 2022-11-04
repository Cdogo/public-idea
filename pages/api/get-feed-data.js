const { Deta } = require("deta")

// add your Project Key
console.log(process.env)
const deta = Deta(process.env.DETA_API_KEY)
// name your DB
const db = deta.Base("ideas")

const fetch = async (query) => {
    if (query === undefined){const { items } = await db.fetch(); return items}
    const { items } = await db.fetch(query.split(',').map((x) => {return({"tags?contains": x})}));

    return items;
}
export default async function getFeedDate(req, res){
    let ideas = await fetch(req.query.tags);
    
    res.status(200).json(ideas)
}