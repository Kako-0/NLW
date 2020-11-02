const orfanatos = require('./dabase/fakedata.js')

module.exports = {
    index(request, response){
        return response.render('index');
    },

    orfanato(request, response){
        return response.render('pagOrfanato');
    },

    orfanatos(request, response){
        return response.render('pagOrfanatos', {orfanatos});
    },

    criarOrfanato(request, response){
        return response.render('criarOrfanato');
    }
}