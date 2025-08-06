const http = require('http')
const fs = require('fs')

const server = http.createServer((res,res)=>{
    res.setHeader('Content-Type','text/html')

    let myUrl = './views/'
    if(res.url == '/'){
        myUrl += 'homepage.html'
        res.statusCode = 200
    }
    else if(res.url == '/about'){
        myUrl += 'about.html'
        res.statusCode = 200
    }
    else if(res.url == '/contact'){
        myUrl += 'contact.html'
        res.statusCode = 200
    }
    else if(res.url == '/product'){
        myUrl += 'product.html'
        res.statusCode = 200
    }
    else{
        myUrl += 'error.html'
        res.statusCode = 404
    }

    fs.readFile(myUrl,(err,data) => {
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000,'localhost', () =>{
    console.log("Listen")
})