class AbstractController{
    state = "000" // Состояние, которым управляет контролер
    setState = function(){} // Метод для изменения состояния

    constructor(state, setState){
        this.state = state;
        this.setState = setState;
    }
}

export default AbstractController