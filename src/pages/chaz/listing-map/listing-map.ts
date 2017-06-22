import {AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";


@Component({
    selector:'listing-map',
    templateUrl:'listing-map.html'
})
export class ListingMap implements AfterViewInit{

    @ViewChild('map') mapElement: ElementRef;
    map:any;

    ngAfterViewInit(){
        this.loadMap();
    }

    loadMap(){

        let latLng = new google.maps.LatLng(-34.9290, -138.6010);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }

}