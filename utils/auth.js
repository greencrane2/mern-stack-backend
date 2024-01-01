
const jwt = require("jsonwebtoken")
const secret_key = "mern-market"

const auth = async(req, res, next) => {
  if(req.method === "GET"){
    return next()
  }
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTcwMzgxMjg3NiwiZXhwIjoxNzAzODk1Njc2fQ._34T8l_a2IwdfPcC-pKrfNz_gHHbC5pY5XgjJsRbZeA"
  //const token = await req.headers.authorization.split(" ")[1]
  if(!token){
    return res.status(400).json({message:"トークンがありません"})
  }

  try{
    const decoded = jwt.verify(token, secret_key)
    console.log(decoded)
    req.body.email = decoded.email
    return next()
  }catch(err){
    return res.status(400).json({message: "トークンが正しくない、ログインして！"})
  }
}



module.exports = auth
