import { redirect } from "next/navigation";
import { isAdminLoggedIn } from "@/app/lib/adminAuth";
import EnquiriesDashboard from "./EnquiriesDashboard";

export default async function AdminEnquiriesPage() {
  const loggedIn = await isAdminLoggedIn();

  if (!loggedIn) {
    redirect("/admin/login");
  }

  return <EnquiriesDashboard />;
}