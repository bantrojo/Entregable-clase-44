const { createSecretKey } = require('crypto');
const fs = require('fs');
const productPath = __dirname + '/../files/products.json';

const fetch = async () => {
    let data = await fs.promises.readFile(productPath, 'utf-8');
    let products = JSON.parse(data);
    return products;
}

class productManager {
    get = async () => {
        if (fs.existsSync(productPath)) {
            try {
                let products = await fetch();
                return { status: true, products: products }
            } catch (error) {
                return { status: 'error', error: error }
            }
        }
    }



    add = async (product) => {

        if (fs.existsSync(productPath)) {
            try {

                let products = await fetch();

                if (products.length === 0) {

                    let product;

                    product.id = 1;

                    await fs.promises.writeFile(productPath, JSON.stringify([product], null, 2));

                    return { status: "succes", message: "product added" }

                }
                product.id = products[products.length - 1].id + 1;
                product.timestamp = Date.now();
                products.push(product);
                await fs.promises.writeFile(productPath, JSON.stringify(products, null, 2));
                return { status: "Success", message: "Product added" }

            } catch (error) {
                return { status: "error", error: error }
            }

        }
        product.id = 1;
        await fs.promises.writeFile(productPath, JSON.stringify([product], null, 2));
        return { status: "Success", message: "Product added" }
    }//aca finaliza el add

    //declaramos el metodo delet y le pasamos la 
    delete = async (id) => {
        if (fs.existsSync(cartPath)) {
            try {
                const products = await fetchData(productPath);
                createSecretKey.map(cart => {
                    if (product.ed == id) {
                        products.splice(id - 1, 1)
                    }
                })
                await fs.promises.writeFile(cartPath, JSON.stringify(carts, null, 2));
                return true;

            } catch (error) {
                throw error;
            }
        }



    }



}
module.exports = productManager;