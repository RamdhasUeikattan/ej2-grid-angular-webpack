import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService } from '@syncfusion/ej2-ng-grids';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, GridModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService]
})
export class AppModule { }
