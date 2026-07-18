import { parsePropertyQuery } from "../week2-property-search/parser";
import { searchActiveListings } from "../week3-mls-database/search-active";

import {
  updateSession,
  clearSession,
  isSearchReady,
} from "./session";

import { formatListings } from "./formatter";

export async function handleConversation(
  userId: string,
  message: string
): Promise<string> {

  const parsedFilters = parsePropertyQuery(message);

  const session = updateSession(userId, {
    ...parsedFilters,
  });

  if (session.city === null) {
    return "Which city are you interested in?";
  }

  if (session.maxPrice === null) {
    return "What is your maximum budget?";
  }

  if (session.beds === null) {
    return "How many bedrooms would you like?";
  }

  if (session.type === null) {
    return "Do you prefer a condominium, townhouse, or single-family home?";
  }

  try {

    const results = await searchActiveListings(session);

    updateSession(userId, {
      lastResults: results,
      conversationStep: session.conversationStep + 1,
    });

    if (results.length === 0) {
      clearSession(userId);

      return "Sorry, I couldn't find any matching properties.";
    }

    const reply = formatListings(results);

    clearSession(userId);

    return reply;

  } catch (err) {

    console.error(err);

    return "Sorry, something went wrong while searching.";

  }

}