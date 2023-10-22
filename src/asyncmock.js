const misProductos = [
    { id: "1", nombre: "Soporte para Auriculares", precio: 500, img: "../img/soportes-auriculares.jpg", idCat: "1" },
    { id: "2", nombre: "soporte para Cepillos", precio: 200, img: "../img/soportes-cepillos.jpg", idCat: "1" },
    { id: "3", nombre: "soporte para Celulares", precio: 300, img: "../img/soportes-celulares.jpg", idCat: "1" },
    { id: "4", nombre: "maceta castillo", precio: 850, img: "../img/macetas-castillo.jpg", idCat: "2" },
    { id: "5", nombre: "maceta piña", precio: 500, img: "../img/maceta-piña.jpg", idCat: "2" },
    { id: "6", nombre: "maceta gato", precio: 800, img: "../img/macetas-gato.jpg", idCat: "2" },
    { id: "7", nombre: "decoracion posa vasos ", precio: 200, img: "../img/decoraciones-posavasos.jpg", idCat: "3" },
    { id: "8", nombre: "decoracion porta cosmeticos",stock:10, precio: 600, img: "../img/decoraciones-portacosmeticos.jpg", idCat: "3" },
    { id: "9", nombre: "decoracion búhos",stock:10, precio: 900, img: "../img/decoraciones-buhos.jpg", idCat: "3" },
    { id: "10", nombre: "pieza soportes",stock:10, precio: 200, img: "../img/piezas-soportes.jpg", idCat: "4" },
    { id: "11", nombre: "pieza rulemanes",stock:10, precio: 100, img: "../img/piezas-rulemanes.jpg", idCat: "4" },
    { id: "12", nombre: "pieza prensas",stock:10, precio: 250, img: "../img/piezas-prensas.jpg", idCat: "4" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}