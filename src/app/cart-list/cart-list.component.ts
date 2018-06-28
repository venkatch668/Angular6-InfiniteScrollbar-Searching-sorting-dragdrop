import { Component, OnInit } from '@angular/core';
import {CartListService} from '../cart-list-service/cart-list.service';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  clSearch:any;
  currentPage:number = 1;
  clList: any=[];
  clListCopy:any;
  clKeys:any;
  reorderState:boolean=true;
  oldObj:any;
  dragStart:any;
  clKeysSelect;
  scrollCallback;
  constructor(private clListService: CartListService) {
    this.scrollCallback = this.getStories.bind(this);

  }
  ngOnInit() {
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,index,x) {
    this.oldObj=x;
    this.dragStart=index;
  }
  drop(ev,input,x) {
    ev.preventDefault();
    this.clList.splice(input,0,this.clListCopy.splice(this.dragStart,1)[0])
  }
  searchList(input){
    this.clList = this.clListCopy.filter((item)=>{
      return item.title.indexOf(input) > -1;
    });
    console.log(this.clListCopy);
  }
  getStories() {
    return this.clListService.getLatestList(this.currentPage).do(this.processData);
  }
  private processData = (clList) => {
    this.currentPage++;
    this.clList = this.clList.concat(clList.json());
    this.clListCopy = this.clList;
    this.getSortKeys();
  }
  getSortKeys(){
    this.clKeys = Object.keys(this.clList[0]);
    console.log(this.clKeys);
  }
}
