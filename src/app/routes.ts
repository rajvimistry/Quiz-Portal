import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
export const appRoutes : Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'result', component: ResultComponent},
    {path: 'forgotPassword', component:ForgotPasswordComponent},
    {path: '', redirectTo:'/register', pathMatch: 'full'}

];