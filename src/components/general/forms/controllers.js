import AbstractController from "../../../abstractController";

export class InputController extends AbstractController{};

export class SelectController extends AbstractController{
    constructor(state, setState, options){
        super(state, setState);
        this.options = options;
    }
};

export class InputWithSliderController extends AbstractController{
    constructor(state, setState, distance=1){
        super(state, setState);
        this.distance = distance;
    }
};
