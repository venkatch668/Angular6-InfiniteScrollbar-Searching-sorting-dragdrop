import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartListService} from './cart-list-service/cart-list.service';
import { CartListInfiniteScrollerDirective} from './cart-list-directive/cart-list-infinite-scroller.directive'
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CartListInfiniteScrollerDirective,
  ],
  imports: [
    OrderModule,
 BrowserModule, FormsModule, NgbModule.forRoot(),HttpModule
  ],
  providers: [CartListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
