import { Component, OnInit  } from '@angular/core';
import { data } from './data';
@Component({
    selector: 'my-app',
    template: `<ej-grid [dataSource]='data' height="315px" allowPaging="true">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='right' format='C2' width=90></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='right' format='yMd' width=120></e-column>
                </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = data;
    }

}
