import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createContactaction() {
    const contact = await createContact();
    return { contact };
  }

  export async function EditContactaction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }

  export async function DeleteContactaction({ params }) {
    throw new Error("oh dang!");

    await deleteContact(params.contactId);
    return redirect("/");
  }