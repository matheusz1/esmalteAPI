const axios = require('axios')

class ControllerMaquiagem {
    buscar(request, response) {

        let array = []

        axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish').then((res) => {

            res.data.forEach((element, index) => {
                element.product_colors.forEach((esmalte) => {

                    array.push({
                        "Esmalte": {
                            [res.data[index].brand]: {
                                "Cor": esmalte.hex_value,
                                "Nome": esmalte.colour_name
                            }                   
                        }
                    })
                })
            })

            response.status(200).json(array)
        })
    }
}

module.exports = new ControllerMaquiagem()
