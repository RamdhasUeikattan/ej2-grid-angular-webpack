import { Component, OnInit  } from '@angular/core';
import { data  } from './data';
@Component({
    selector: 'my-app',
    template: `<ej-grid #grid [dataSource]='data' [allowPaging]='true' [toolbar]='toolbar' [allowFiltering] = 'true' [allowSorting] = 'true' [allowGrouping] = 'true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="right"></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
                        <e-column field='Freight' headerText='Freight' width='170' format= 'C2'></e-column>
                        <e-column field='ShipName' headerText='ShipName' width='120' ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate>
                            <e-columns> 
                                <e-column type="sum" field="Freight" format="C2">
                                    <template #footerTemplate let-data>Sum: {{data.sum}}</template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                        <e-aggregate>
                            <e-columns>
                                <e-column type="min" field="Freight" format="C2">
                                    <template #groupFooterTemplate let-data>min: {{data.min}}</template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                        <e-aggregate>
                            <e-columns>
                                <e-column type="max" field="Freight" format="C2">
                                    <template #groupFooterTemplate let-data>max: {{data.max}}</template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                        <e-aggregate>
                        <e-columns>
                            <e-column type="sum" field="Freight"  format="C2">
                                <template #groupFooterTemplate let-data>Group Sum: {{data.sum}}</template>
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                    </e-aggregates> 
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public toolbar: string[];

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['search'];
    }

}
