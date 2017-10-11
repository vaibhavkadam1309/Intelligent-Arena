import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {

  constructor(private http: Http) {
  }

  getAllUsersInfo() {
    
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json())
        .subscribe(result => {
          // we've got back the raw result, now generate the core schedule result
          // and save the result for later reference
          resolve(result);
        });
    });
  }
  getAllUserTodos(userId) {

    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('https://jsonplaceholder.typicode.com/todos?userId='+userId)
        .map(res => res.json())
        .subscribe(result => {
          // we've got back the raw result, now generate the core schedule result
          // and save the result for later reference
        resolve(result);
        });
    });
  }
 addNewTodo(Obj) {
    
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.post('https://jsonplaceholder.typicode.com/todos',Obj)
        .map(res => res.json())
        .subscribe(result => {
          // we've got back the raw result, now generate the core schedule result
          // and save the result for later reference
          resolve(result);
        });
    });
  }

   updateTodo(Obj) {

    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.put('https://jsonplaceholder.typicode.com/todos/'+Obj.id,Obj)
        .map(res => res.json())
        .subscribe(result => {
          // we've got back the raw result, now generate the core schedule result
          // and save the result for later reference
          resolve(result);
        });
    });
  }
   deleteTodo(Obj) {
   
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.delete('https://jsonplaceholder.typicode.com/todos/'+Obj.id)
        .map(res => res.json())
        .subscribe(result => {
          // we've got back the raw result, now generate the core schedule result
          // and save the result for later reference
          resolve(result);
        });
    });
  }
}


