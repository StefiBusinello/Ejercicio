class Users {
    constructor (){
        this.count = 0;
        this.user = [] ;

    
    }

    save (user){
        this.count++;
        user.id = this.count;
        this.user.push(user);

        return user;
    }

    delete (id){
        let answer = {};
        const userDeleted = this.user.find (user => user.id == id);
        if(userDeleted){
            answer = userDeleted;
            this.user = this.user.filter (user => user.id != id)
        } else {
            answer.error = "Usuario no encontrado para eliminar"
        }
        return answer;
    }

    list () {
    let answer = {};
    if (this.user.length === 0){
        answer.error = "No hay usuarios cargados";
    } else {
        answer = this.user
    }
    return answer;
}

    update(id, datosUsuario){
    let answer = {}
    let userSelec = this.user.find(a => a.id == id);
    if(userSelec){
        userSelec.nombre = datosUsuario.nombre
        userSelec.rol = datosUsuario.rol
        answer = datosUsuario
    }else{
        answer.error = 'Usuario no encontrado para actualizar'
    }
    return answer

}
}

module.exports = new Users();

