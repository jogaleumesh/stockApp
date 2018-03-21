import { Component } from '@angular/core';
import { StockService } from "./stock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stockData =[
    { name:'goog'},{ name:'yhoo'},{ name:'aapl'},{ name:'msft'},{ name:'lnkd'},{ name:'eva'},{ name:'aks'},
    { name:'tck'},{ name:'mu'},{ name:'evi'},{ name:'intc'},{ name:'ebr'},{ name:'shld'}
  ]

  public checkLowPrice:boolean;
  constructor(private stockService: StockService) {
    this.getAllData();
  }

  getAllData(){
    this.stockService.connect().subscribe((data)=>{
      var newdata=[]
      data.forEach(([name,price]) => {
        newdata.push({'name':name, 'price':price});
      });
      
      this.merge_array(this.stockData, newdata);
    })
  }

  merge_array(array1, array2) {
      var len = array2.length;
      var assoc = {};

      while(len--) {
        var item = array2[len];
        if(!assoc[item.name]) 
        { 
          assoc[item.name] = true;
          for (var i=0; i < array1.length; i++) {
            if (array1[i].name === item.name) {
               array1[i].lowprice = array1[i].price > item.price;
               array1[i].price = item.price;
               array1[i].update = new Date();
            }
          }
        }
      }
  }

  trackByFn(index, item) {
    return index; // or item[0]
  }

}
