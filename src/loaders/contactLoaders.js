import { getContact, getContacts } from "../contacts";

export async function contactGetLoader() {
    const contacts = await getContacts();
    return { contacts };
  }

  export async function getContactloaderById({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
  }