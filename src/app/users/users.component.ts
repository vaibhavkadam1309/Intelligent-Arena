/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ContentService } from '../../providers/contentService';
@Component({
    styleUrls: ['./users.component.scss'],
    templateUrl: './users.component.html',
})
export class UserComponent {

    usersList: any = [];

    constructor(private contentService: ContentService, private router: Router) {
        this.getAllUsers();

    }
    getAllUsers() {
        this.contentService.getAllUsersInfo().then(res => {
            if (res) {
                this.usersList = res;
            }
        })
    }

    goToTodos(userId) {
        this.router.navigate(['/todolist', userId]);
    }
}
