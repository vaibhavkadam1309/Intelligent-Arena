/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './todos/todos.component';
import { UserComponent } from './users/users.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UserComponent },
    //  {path: 'about', component: AboutComponent},
    { path: 'todolist/:userId', component: ToDoComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
