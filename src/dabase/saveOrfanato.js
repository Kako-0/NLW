function saveOrfanato(db, orfanato){
    return db.run(`
        INSERT INTO orfanatos (
            lat,
            lng,
            name,
            whatsapp,
            images,
            about,
            instructions,
            opening_hours,
            opening_on_weekends
        ) VALUES (
            "${orfanato.lat}",
            "${orfanato.lng}",
            "${orfanato.name}",
            "${orfanato.whatsapp}",
            "${orfanato.images}",
            "${orfanato.about}",
            "${orfanato.instructions}",
            "${orfanato.opening_hours}",
            "${orfanato.opening_on_weekends}"
        );
    `)
}

module.exports = saveOrfanato;