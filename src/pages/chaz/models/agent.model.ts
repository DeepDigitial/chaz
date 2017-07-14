import {Person} from "./person.model";
import {License} from "./license.model";

export class Agent extends Person{
    license:License;
}