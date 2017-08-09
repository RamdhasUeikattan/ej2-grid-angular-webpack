import { Component, OnInit } from '@angular/core';
import { gridData, gridData1 } from './data';
@Component({
    selector: 'my-app',
    template: `<ej-grid #grid [dataSource]='data' height='280' [childGrid]='childGrid' >
                    <e-columns>
                        <e-column field='LastName' headerText='Last Name' width='140'></e-column>
                        <e-column field='FirstName' headerText='First Name' width='170' format= 'C2'></e-column>
                        <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign="center"></e-column>
                        <e-column field='Title' headerText='Title' width='180' ></e-column>
                        <e-column field='BirthDate' headerText='Bitth Date' width='120' format='yMd' ></e-column>
                        <e-column field='City' headerText='City' width='120' ></e-column>
                    </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public childGrid: Object;

    ngOnInit(): void {
        this.data = gridData;
        this.childGrid = {
            dataSource: gridData1,
            allowPaging: true,
            queryString: 'EmployeeID',
            columns: [  
                { field: 'OrderID', headerText: 'Order ID', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
                { field: 'ShipName', headerText: 'Ship Name', width: 120 },
                { field: 'ShippedDate', headerText: 'Shipped Date', width: 150, format: 'yMd' }
            ]
        };
    }

}
