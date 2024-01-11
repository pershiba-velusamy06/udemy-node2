const products = []

const fs = require('fs')

const path = require('path')
const productsFilePath = path.join(__dirname, 'data', 'products.json');

module.exports = class Product {
    constructor(t) {
        console.log(t)
        this.title = t;

    }

    save() {
        // const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")


        // fs.readFile(p, (err, fileContent) => {
        //     let products = []
        //     if (!err) {
        //         products = JSON.parse(fileContent)
        //     }
        //     products.push(this)
        //     fs.writeFile(p, JSON.stringify(products), (err) => {
        //         console.log(err)
        //     })
        // })

        fs.readFile(productsFilePath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.mkdir(path.dirname(productsFilePath), { recursive: true }, (err) => {
                if (err) {
                    console.error('Error creating directory:', err);
                } else {
                    fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
                        if (err) {
                            console.error('Error writing to file:', err);
                        }
                    });
                }
            });
        });
    }
    static fetchAll(callBack) {
        fs.readFile(productsFilePath, (err, fileContent) => {
         
            if (err) {
                
                return callBack([])
            }
            return callBack(JSON.parse(fileContent));
        
          
        });
      
    }
}