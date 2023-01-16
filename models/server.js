const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.pathBase = "/api"

        this.middlewares();


        this.routes();
    }

    middlewares(){
        this.app.use( express.json() )
    }
    listen(){
        this.app.listen(
            this.port, () => {
                console.log("Servidor corriendo en el puerto", this.port);
            }    
        )
    }

    routes(){
        this.app.use( this.pathBase, require('../routes/test') )
    }
}
    
module.exports = Server
