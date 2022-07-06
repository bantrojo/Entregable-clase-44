const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Article {
        id: String,
        title: String,
        text: String,
        author: String
    },
    type Query {
        products:[Product],
        products (id:Int):Product
    },
    type Mutation {
        addProduct(name:String, price:String): Product
    },
`);



const root = {
    products: () => {
        return products;
    },
    product: (data) => {
        for (let i = 0; i < products.lenght; i++) {
            if (productos[i].id == data.id) return products[i];
        }
        return null;
    },

    addProduct: (data) => {
        let newProduct = {
            id: counter,
            name: data.name,
            price: data.price,
        }
        products.push(newProduct);
        counter++;
        return newProduct;
    },
};



app.use("/graphql", graphqlHTTP,{
    schema: schema,
    rootValue: root,
})



module.exports.start = function () {
    return graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    });
}