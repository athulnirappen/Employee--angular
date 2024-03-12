//generate json server

//import jsonserver

const jsonServer = require('json-server')

//create a json server to run json file

const emsServer = jsonServer.create()
 
const middleware = jsonServer.defaults()

//set a path for db.json

const router = jsonServer.router('db.json')

//setup port

const PORT = 3000

//use middleware and router
emsServer.use(middleware)
emsServer.use(router);


//server listen

emsServer.listen(PORT, () => {
 console.log(`server is running on the port:${PORT}`);
})

