import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn : 'root'
})

export class DataStorageService{
    constructor(private http : HttpClient, private recipesService:RecipeService,private authService:AuthService){}

    storeRecipes(){
        const token = this.authService.getToken();

        return this.http.put('https://angular-full-guide-project.firebaseio.com/recipes.json?auth=' + token,this.recipesService.getRecipes());
    }

    getRecipes(){
        const token = this.authService.getToken();
        
        return this.http.get('https://angular-full-guide-project.firebaseio.com/recipes.json?auth=' + token)            
            .subscribe(
            (recipes:Recipe[]) => this.recipesService.setRecipes(recipes)
        );
    }
}