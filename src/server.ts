import express from 'express';
import dotenv from 'dotenv' ; //variaveis de ambiente
import mustache from 'mustache-express';
import path from 'path';
import mainRouters from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRouters);


server.use((req, res)=>{
    res.send('PAGE NOT FOUND!!!')
});

server.listen(process.env.PORT);//