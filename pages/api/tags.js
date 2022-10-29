

export default function handler(req, res) {
    console.log(req.query)
    res.status(200).json({"1": "💻Coding/App", "2": "🎶Music/Song", "3": "🎨Art/Design", "4": "👔Buisness", "5": "🎮Games"})
}