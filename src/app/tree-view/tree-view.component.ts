import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Folder } from "../Models/TreeViewModel";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})

export class TreeViewComponent implements OnInit {
  title = 'client';
  constructor(private http: HttpClient){}

  baseUrl: string = `https://localhost:7265/api/files`;
  @Input() tree: Folder[];

  ngOnInit(): void {
    if(!this.tree){
      this.GetFiles();
    }
  }
GetFiles(){
  this.http.get(this.baseUrl).subscribe((data: any) => {
    this.tree = data;
  }, (err) => { console.log(err) })
}

  filter(event){
  // this.http.get(this.baseUrl+event.target.value).subscribe((data:Folder[])=>this.tree=data,
  // (err)=>console.log(err))
  }
}
