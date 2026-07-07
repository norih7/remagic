// src/lib/db.ts
import locationItemsData from "../data/locationItems.json";
import locationRecipesData from "../data/locationRecipes.json";
import locationLensesData from "../data/locationLenses.json";
import locationSubEventsData from "../data/locationSubEvents.json";

export type Item = {
  name: string;
  shop: string[];
  location: Location[];
};

export type LocationItems = {
  locationId: number;
  locationName: string;
  itemId: number;
  itemName: string;
  remarks: string;
};
export async function getLocationItemsData(): Promise<LocationItems[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationItemsData as unknown as LocationItems[];
}

export type LocationRecipes = {
  locationId: number;
  recipeName: string;
  remarks: string;
};
export async function getLocationRecipesData(): Promise<LocationRecipes[]> {
  // ここで compiledData を一度 unknown にしてから、Item[] にキャストします
  return locationRecipesData as unknown as LocationRecipes[];
}

export type LocationLenses = {
  locationId: number;
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
