
import {Component, Input} from "@angular/core";
@Component({
    selector:'accordion-item',
    templateUrl:'accordion-item.component.html'
})

export class AccordionItem{
    iconPath:String;
    @Input() title:String
}