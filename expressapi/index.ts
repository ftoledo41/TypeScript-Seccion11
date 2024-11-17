import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(401).json({
      ok: false,
      msg: "Todo salio mal",
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})