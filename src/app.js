import express from 'express';
import cors from 'cors';
import sequelize from './config/bd.js';
import routerLivro from './routes/livroRoute.js';


const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.use(routerLivro);

sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server está escutando na porta: ${port}`)
    })
})