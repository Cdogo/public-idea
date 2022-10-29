export default function Img(req, res){
    var date = new Date();
    console.log(`${req.query}: ${date.toUTCString()}`)
    var u = new URL('/', 'http://localhost:3000')
    res.redirect(307, '/fear.png')
}