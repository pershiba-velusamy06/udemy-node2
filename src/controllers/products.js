const Product = require('../models/products')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.addProducts=(req, res, next) => {
    console.log(req.body,"res.body")
 const product= new Product(req.body.title)
  product.save()
   res.redirect('/');
  }

  exports.getAllProducts=(req, res, next) => {
    
     Product.fetchAll((products)=>{
      console.log(products,"products")
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
   
  }