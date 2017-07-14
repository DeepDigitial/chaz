import {Component, Input} from "@angular/core";
import {Agent} from "../../../models/agent.model";

@Component({
    selector:'agent-list-item',
    templateUrl:'agent-list-item.html'
})
export class AgentListItem{
    @Input() agent:Agent;
}