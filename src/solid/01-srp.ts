;(() => {
  interface Product {
    id: number
    name: string
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

  class ServicesProduct {
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' })
    }

    saveProduct(product: Product) {
      console.log('Guardando en base de datos', product)
    }
  }

  class Mailer {
    private masterEmail: string = 'mailer@google.com'

    sendMail(emailList: String[], template: 'to-clients' | 'to-admins') {
      console.log('Enviando correo a los clientes', template)
    }
  }

  class Cartbloc {
    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId)
    }
  }

  class ProductBloc {
    private servicesProduct: ServicesProduct
    private mailer: Mailer

    constructor(servicesProduct: ServicesProduct, mailer: Mailer) {
      this.servicesProduct = servicesProduct
      this.mailer = mailer
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.servicesProduct.getProduct(id)
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.servicesProduct.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendMail(['test@gmail.com'], 'to-admins')
    }
  }

  const servicesProduct = new ServicesProduct()
  const mailer = new Mailer()
  const cart = new Cartbloc()

  const productBloc = new ProductBloc(servicesProduct, mailer)

  productBloc.loadProduct(10)
  productBloc.saveProduct({ id: 10, name: 'OLED TV' })
  productBloc.notifyClients()
  cart.addToCart(10)
})()
