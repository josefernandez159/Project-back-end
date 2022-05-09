import express from 'express'
import {routes} from './routes'

const app = express();

app.use(express.json())






app.use(routes);


//port listen 3333
app.listen(3333, ()=> {
  console.log('running');
})
