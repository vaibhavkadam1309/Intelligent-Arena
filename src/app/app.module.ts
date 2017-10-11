import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { UserComponent } from "./users/users.component";
import { ToDoComponent } from "./todos/todos.component";
import { ContentService } from '../providers/contentService';

@NgModule({
    declarations: [
        AppComponent,
        ToDoComponent,
        UserComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [ContentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
