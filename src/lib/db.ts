// src/lib/db.ts
import items from "../data/items.json";
import locationItemsData from "../data/locationItems.json";
import locationRecipesData from "../data/locationRecipes.json";
import locationLensesData from "../data/locationLenses.json";
import locationSubEventsData from "../data/locationSubEvents.json";
import recipes from "../data/recipes.json";
import recipeItems from "../data/recipeItems.json";
import shopItemsData from "../data/shopItems.json";

export type Item = {
  id: number;
  name: string;
  type: string;
  effect: string;
  isBuy: boolean;
  isDrop: boolean;
  buy: number | "-";
  sell: number | "-";
  description: string;
  special: string;
};
export async function getItemsData(): Promise<Item[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return items as unknown as Item[];
}

export type shopItems = {
  id: number;
  locationId: number;
  locationName: string;
  shopId: number;
  shopName: string;
  itemId: number;
  itemName: string;
  special: string;
};
export async function getShopItemsData(): Promise<shopItems[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return shopItemsData as unknown as shopItems[];
}

export type LocationItems = {
  locationId: number;
  locationName: string;
  itemId: number;
  itemName: string;
  itemType: string;
  remarks: string;
};
export async function getLocationItemsData(): Promise<LocationItems[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationItemsData as unknown as LocationItems[];
}

export type LocationRecipes = {
  locationId: number;
  locationName: string;
  recipeId: number;
  recipeName: string;
  remarks: string;
};
export async function getLocationRecipesData(): Promise<LocationRecipes[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationRecipesData as unknown as LocationRecipes[];
}

export type LocationLenses = {
  id: number;
  world: "inferior" | "celestia" | "other";
  locationId: number;
  locationName: string;
  lensId: number;
  remarks: string;
};
export async function getLocationLensesData(): Promise<LocationLenses[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationLensesData as unknown as LocationLenses[];
}

export type locationSubEvents = {
  locationId: number;
  eventName: string;
  eventPath: string;
  remarks: string;
};
export async function getLocationSubEventsData(): Promise<locationSubEvents[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationSubEventsData as unknown as locationSubEvents[];
}

export type Recipes = {
  id: number;
  name: string;
  type: "normal" | "master";
  world: "inferior" | "celestia" | "other";
  effect: string;
  description: string;
};
export async function getRecipesData(): Promise<Recipes[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return recipes as unknown as Recipes[];
}

export type RecipeItems = {
  recipeId: number;
  recipeName: string;
  itemId: number;
  ItemName: string;
};
export async function getRecipeItemsData(): Promise<RecipeItems[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return recipeItems as unknown as RecipeItems[];
}
