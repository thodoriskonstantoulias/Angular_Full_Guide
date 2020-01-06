import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
    providedIn : 'root'
})

export class DataStorageService{
    constructor(private http : HttpClient, private recipesService:RecipeService){}

    storeRecipes(){
        return this.http.put('https://angular-full-guide-project.firebaseio.com/recipes.json',this.recipesService.getRecipes());
    }
}