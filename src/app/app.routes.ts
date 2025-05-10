import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { ClientComponent } from './client/client.component';
import { FormatComponent } from './format/format.component';

export const routes: Routes = [
    {
        path: 'article', component:ArticleComponent
    },
    {
        path: 'liste', component:ListeArticleComponent
    },
    {
        path: 'client', component:ClientComponent
    },
    {
        path: 'format', component:FormatComponent
    }
];
