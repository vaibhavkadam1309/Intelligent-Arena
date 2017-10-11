/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../providers/contentService';

@Component({
    styleUrls: ['./todos.component.scss'],
    templateUrl: './todos.component.html'
})
export class ToDoComponent {
    open: Boolean = false;
    userId: any;
    toDoList: any = [];
    addTodo: any;
    constructor(private contentService: ContentService, private router: Router, private route: ActivatedRoute, ) {

        this.route.params.subscribe(params => {
            //let stateflag = this.userDataService.reloadInit();
            this.userId = params['userId'];
            this.getAllTodos(this.userId)
        })

    }
    getAllTodos(_id) {
        this.contentService.getAllUserTodos(_id).then(res => {
            console.log(res);
            if (res) {
                this.toDoList = res;
            }
            //if(res)
            //   this.usersList = res;
        })
    }
    addNewTodo(data) {
        console.log(data);
        let dataObj = {
            completed: false,
            title: data,
            userId: this.userId

        }
        this.contentService.addNewTodo(dataObj).then(res => {
            console.log(res);
            if (res) {
                this.toDoList.push(res);
                this.addTodo = "";
            }

        })
    }
    updateStatus(data) {
        console.log(data);
        this.contentService.updateTodo(data).then(res => {
            console.log(res);
            if (res) {
                //     this.toDoList.push(res);
                //    this.addTodo = "";
            }

        })
    }
    deleteTodo(Obj, iIndex) {
        this.contentService.deleteTodo(Obj).then(res => {
            console.log(res);
            this.toDoList.splice(iIndex, 1);

        })
    }
}
