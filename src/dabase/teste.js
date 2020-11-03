const Database = require('./db');

Database.then(async db => {
    await db.run(`
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
            "-2.5298353516677654",
            "-44.2901802062988",
            "teste 2",
            "999999999",
            "https://images.unsplash.com/photo-1572058685927-5175f7320c90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar. ",
            "Horário de visita Das 18h até 8h ",
            "0"
        );
    `)
    
    const select  = await db.all("SELECT * FROM orfanatos");
    console.log(select);
});

