import {Component, Input} from "@angular/core";
import {Agent} from "../models/agent.model";

@Component({
    selector:"available-agent-list",
    templateUrl:'available-agent-list.html'
})
export class AvailableAgentsList{
    @Input() agents:Agent[];

}