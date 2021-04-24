import { NgModule } from "@angular/core";
import { FilterColumnsComponent } from './filter-columns/filter-columns.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ReportsComponent } from './reports/reports.component';
import { DataTableComponent } from './datatable.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Angular2CsvModule } from 'angular2-csv';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations:[
        FilterColumnsComponent,
        PaginatorComponent,
        ReportsComponent,
        DataTableComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        Angular2CsvModule,
        MatTableModule,
        MatExpansionModule
    ],
})
export class DataTableModule {}