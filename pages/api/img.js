export default function Img(req, res){
    let ip;
    var date = new Date();
    console.log(`${req.query.id ? req.query.id: 'No ID'}: ${date.toUTCString()}`)
    if (req.headers["x-forwarded-for"]) {
        ip = req.headers["x-forwarded-for"]
      } else if (req.headers["x-real-ip"]) {
        ip = req.connection.remoteAddress
      } else {
        ip = req.connection.remoteAddress
      }
    console.log(req.connection.remoteAddress)
    res.redirect(307, '/fear.png')
}