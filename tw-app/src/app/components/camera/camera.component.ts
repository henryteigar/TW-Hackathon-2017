import {Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  response: Observable<Response>;
  apiRes: {
    results: Array<{plate}>
  };

  constructor(private http:Http) { 
    
  }
  


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('image', file);
        
        console.log(file);
        let headers = new Headers();
        
        this.http.post('https://api.openalpr.com/v2/recognize?secret_key=sk_62007cebbad350de52a3443b&recognize_vehicle=0&country=eu&return_image=0&topn=10', formData, { headers: headers })
        .map(res => res.json()).subscribe(data => {
          this.apiRes = data;
          
          console.log(this.apiRes.results[0].plate);
        });

        
        // this.response.subscribe(data => {
          
        // });
    }
}

  ngOnInit() {
    console.log("fff");
  }

 

}
