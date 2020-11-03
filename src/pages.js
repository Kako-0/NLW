const Database = require('./dabase/db');
const saveOrfanato = require('./dabase/saveOrfanato');
const save = require('./dabase/saveOrfanato');

module.exports = {
    //retorna a landing page
    index(request, response){
        return response.render('index');
    },

    //retorna a pagina de um orfanato
    async orfanato(request, response){
        const id = request.query.id
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orfanatos WHERE id="${id}"`);
            const orfanato = results[0];

            orfanato.images = orfanato.images.split(",");
            orfanato.firstImage = orfanato.images[0];

            if (orfanato.opening_on_weekends == "0") {
                orfanato.opening_on_weekends = false;
            } else {
                orfanato.opening_on_weekends = true;
            }

            return response.render('pagOrfanato', {orfanato}); 

        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados");
        }
        
    },

    //retorna a pagina do mapa com os popups de todos os orfanatos
    async orfanatos(request, response){
        try {
            const db = await Database;
            const orfanatos = await db.all("SELECT * FROM orfanatos");

            return response.render('pagOrfanatos', {orfanatos}); 

        } catch (error) {
            console.log(error);
            return response.send("Erro no banco de dados");
        }
        
    },

    //retorna a pagina de criação de um orfanato no mapa
    criarOrfanato(request, response){
        return response.render('criarOrfanato');
    },

    async saveOrfanatos(request, response){
        const fields = request.body;

        if (Object.values(fields).includes('')) {
            return response.send('Todos os campos devem ser preenchidos!');            
        }

        try {
            const db = await Database;
            await saveOrfanato(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.nome,
                about: fields.sobre,
                whatsapp: fields.whatsapp,
                images: fields.imagens.toString(),
                instructions: fields.instrucoes,
                opening_hours: fields.horario,
                opening_on_weekends: fields.atende
            });  
            
            return response.redirect('/pagOrfanatos')
        } catch (error) {
            console.log(error);
            return response.send("Erro aqui");
        }

    }
}