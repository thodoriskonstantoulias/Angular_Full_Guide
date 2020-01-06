import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [
        new Recipe('Test Recipe','Test description',
        'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103',
        [
            new Ingredient('Meat',1),
            new Ingredient('Potatoes',10)
        ]),
        new Recipe('Test Recipe 2','Test description',
        'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-09-how-to-shrimp-alfredo%2FHT-Shrimp-Alfredo_103',
        [
            new Ingredient('Bread',2),
            new Ingredient('Pork',1)
        ])
      ];

      constructor(private slService:ShoppingListService){}          

    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }  

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id : number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index : number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}