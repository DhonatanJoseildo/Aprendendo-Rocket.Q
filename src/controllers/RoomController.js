const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while(isRoom){

            // gera o numero da sala
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()
            }
            //verificar se esse numero ja existi
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)

            // verifica a condição passada e se ela existir retorna true //
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

            if(!isRoom){
                // insere a sala no banco de dados
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            } 
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if (questions.length == 0) {
            if (questionsRead.length == 0) {
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
    },
    async enter(req, res){
        const db = await Database()
        const roomId = parseInt(req.body.roomId)
        const roomsExistIds = await db.all(`SELECT id FROM rooms`)
        
        if (roomsExistIds.some(roomExistId => roomExistId.id === roomId)) {
            res.redirect(`/room/${roomId}`)
        }else{
            res.redirect('/')
            
        }
        
    }
}