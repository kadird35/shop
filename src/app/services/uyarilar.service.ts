import { Injectable } from '@angular/core';
declare let alertify:any;


@Injectable({
  providedIn: 'root'
})
export class UyarilarService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }

  error(message:string){
    alertify.error(message)
  }

  warning(message:string){
    alertify.warning(message)
  }
}
