import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {ZillowGetService} from './zillow-get.service';
import { ZillowServiceComponent } from './zillow-service/zillow-service.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ ZillowServiceComponent],
  exports: [ZillowServiceComponent],
  providers: [ZillowGetService]
})
export class ZillowServiceModule { }
