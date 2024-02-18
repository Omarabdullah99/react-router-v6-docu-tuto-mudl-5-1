import { getContacts } from "../contacts";

export async function contactGetLoader() {
    const contacts = await getContacts();
    return { contacts };
  }