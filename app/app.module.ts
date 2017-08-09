import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService, FilterService,  ToolbarService, AggregateService, GroupService, SortService } from '@syncfusion/ej2-ng-grids';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, GridModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService, FilterService,ToolbarService, AggregateService, GroupService, SortService]
})
export class AppModule { }
