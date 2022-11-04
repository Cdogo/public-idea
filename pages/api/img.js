export default function Img(req, res){
    let ip;
    var date = new Date();
    console.log(`${req.query.id ? req.query.id: 'No ID'}: ${date.toUTCString()}`)
    res.redirect(307, '/fear.png')
}