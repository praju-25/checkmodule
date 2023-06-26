import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent  implements OnInit{
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    displayedColumns: any[] = ["Category","Description","Total_items","Created_at","Actions"];
    // FindIndex!:any;
    dataSource!:any;
    todaysDate = new Date();

    // data:any[]=[];
    constructor(private http:HttpService,private router:Router,private dialog:MatDialog) {}
  
    ngOnInit()
     {
      this.getDatalist();
     }
    
     getDatalist(){
    // this.http.getData('products').subscribe((response:any)=>{
    //   if(response && response.length > 0){
    //     this.dataSource = new MatTableDataSource(response);
    //     // console.log(response);

    this.http.getData("products").subscribe((res: any) => 
   {
     this.dataSource = new MatTableDataSource(res);
     // console.log(res);
     console.log("data Fetched sucessfully");
     this.dataSource.paginator = this.paginator;
  
   }, error => { }
    )}
        // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort =this.sort;
    // deleteProduct(row:any,index:any){
    //   const url = 'products/' + row.id;
    //   this.http.deleteData(url).subscribe((response: any) => {
    //     const data = this.dataSource.data; // Get the underlying data array
    //     data.splice(index, 1); // Remove the item from the data array
    //     this.dataSource.data = data;
    //     this.dataSource._updateChangeSubscription(response);
    //   })
  
    // }
    OnDelete(rowData: any) 
    {
      alert("Do you really want to delete")
     
       // console.log(rowData);
       let selectedIndex = this.dataSource.products.FindIndex((el: any) => el.id === rowData.id);
      console.log("selectedIndex", selectedIndex);
     
      const endpoint = "products/" + rowData.id;
      this.http.deleteData(endpoint).subscribe((res: any) => 
      {
        console.log(res);
      
        this.dataSource.products.splice(selectedIndex, 1);
        console.log("Category Deleted SucessFully", this.dataSource);
  
        alert("Category Deleted SucessFully");
        this.dataSource._updateChangeSubscription();
      },
        error => 
        {
          console.log(" Category not deleted")
        })
  
      }
   
}
       
  
  // export interface CategoryData{
  //   Category:string,
  //   Description:string ,
  //   parent_category:string,
  // }
  
