import create from 'zustand';
import axios from 'axios';

export const useStore = create((set, get) => ({
  recipes: null,
  dataRecipes: null,
  page: 1,

  incrementPage: () => set(state => ({ page: state.page + 1 })),
  decrementPage: () =>
    set(state => ({
      page: state.page === 1 ? state.page : state.page - 1,
    })),

  addInitialRecipes: async () => {
    const { page } = get();

    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    const limitedDataForPage = response.data.slice(0, 15);
    const limitedDataForData = response.data.slice(15, 25);

    set({ recipes: limitedDataForPage });
    set({ dataRecipes: limitedDataForData });
  },

  deleteRecipe: async id => {
    set(state => {
      const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);

      const newDataRecipes = [...state.dataRecipes];
      const recipeToAdd = newDataRecipes.shift();

      if (recipeToAdd) {
        updatedRecipes.push(recipeToAdd);
      }

      if (newDataRecipes.length === 0) {
        set({ page: state.page + 1 });
      }

      return { recipes: updatedRecipes, dataRecipes: newDataRecipes };
    });

    if (get().dataRecipes.length === 0) {
      const { recipes } = get();
      await get().addNewRecipesToData(recipes);
    }
  },

  addNewRecipesToData: async recipes => {
    const { page } = get();

    const response = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    const newRecipes = response.data;
    set({ dataRecipes: newRecipes });
  },
}));
