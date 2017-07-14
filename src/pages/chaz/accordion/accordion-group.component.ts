import {Component, Input} from "@angular/core";
import {AccordionItem} from "./accordion-item.component";
@Component({
    selector:'accordion-group',
    templateUrl:'accordion-group.component.html'
})

export class AccordionGroup extends AccordionItem{
    isClosed:boolean = true;
    icon:string = 'ios-add-circle-outline';
    @Input() description:string;

    toggleExpansion() {
        console.log("toggleExpansion performed....");
        this.isClosed = !this.isClosed;
        this.icon = (!this.isClosed)?'ios-remove-circle-outline':'ios-add-circle-outline';
    }


}