import type { PropertyFilters } from "../week3-mls-database/types";
import type { ListingRow } from "../week3-mls-database/types";

export interface UserSession extends PropertyFilters {
  lastResults: ListingRow[];
  conversationStep: number;
}

const sessions = new Map<string, UserSession>();

function createEmptySession(): UserSession {
  return {
    city: null,
    maxPrice: null,
    beds: null,
    baths: null,
    sqft: null,
    type: null,
    pool: null,
    hasView: null,
    maxHOA: null,
    lastResults: [],
    conversationStep: 0,
  };
}

export function getSession(userId: string): UserSession {
  const existingSession = sessions.get(userId);

  if (existingSession) {
    return existingSession;
  }

  const newSession = createEmptySession();
  sessions.set(userId, newSession);

  return newSession;
}

export function updateSession(
  userId: string,
  updates: Partial<UserSession>
): UserSession {
  const current = getSession(userId);

  const updated: UserSession = {
    ...current,
  };

  for (const key in updates) {
    const typedKey = key as keyof UserSession;
    const value = updates[typedKey];

    if (value !== null && value !== undefined) {
      (updated as any)[typedKey] = value;
    }
  }

  sessions.set(userId, updated);

  return updated;
}

export function clearSession(userId: string): void {
  sessions.delete(userId);
}

export function isSearchReady(session: UserSession): boolean {
  return (
    session.city !== null &&
    session.maxPrice !== null &&
    session.beds !== null &&
    session.type !== null
  );
}