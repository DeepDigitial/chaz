import {Component} from "@angular/core";
import {AccordionItem} from "./accordion-item.component";
@Component({
    selector:'accordion',
    templateUrl:'accordion.component.html'
})
export class Accordion {
    accordionItems: Array<AccordionItem>;

}