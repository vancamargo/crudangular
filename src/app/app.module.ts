import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {RouterModule, Routes} from "@angular/router";
import {PostService} from "./services/post.service";
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import {GlyphComponent} from "./bootstrap/glyph/glyph.component";




const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: PostListComponent },
  {path: 'post', component: PostListComponent},
  {path: 'post/create', component: PostSaveComponent},
  {path: 'post/:id/edit', component: PostSaveComponent}
    ]
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSaveComponent,
    ButtonComponent,
    GlyphComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,


  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
