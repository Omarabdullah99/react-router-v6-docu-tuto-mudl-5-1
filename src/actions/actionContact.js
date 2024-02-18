import { createContact } from "../contacts";

export async function createContactaction() {
    const contact = await createContact();
    return { contact };
  }