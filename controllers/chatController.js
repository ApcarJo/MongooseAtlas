
const User = require('../models/user');
const Room = require('../models/room');

class Sala {
    constructor(){

    }

    async findAllRooms(){

        return Room.find();

    }

    async deleteRoom(id){
        return Room.findByIdAndRoom(id);
    }

    async createRoom(room){

        return Room.create(room);
    }

    // Create private room with 2 participantes and array of messages
    // async createPrivateRoom(room){

    //     return Room.create(room);

    // }

    async joinRoom(data){
        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate({_id: id}, {$push: {miembros: miembro}});
    }

    async leaveRoom(data){
        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate({_id: id}, {$pull: {miembros: miembro}});
    }

    async addMessage(data){
        const id = data.id;
        const userId = data.userId;

        const usuarioName = await User.findById(userId);

        let mensaje = {
            idUser: data.userId,
            usuario: usuarioName.name,
            text: data.texto,
            fecha: data.fecha,
            reportado: data.reportado,
            entregado: data.entregado,
            leido: data.leido
        }

        return Room.findByIdAndUpdate({_id: id}, {$push: {mensajes: mensaje}});
    }



}

let chatController = new Sala();
module.exports = chatController;