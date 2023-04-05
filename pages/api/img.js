export default function Img(req, res){
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    var date = new Date();
    console.log(`${req.query.id ? req.query.id: 'No ID'}: ${date.toUTCString()} ip: ${ip}`)
    res.redirect(307, '/fear.png')
}
