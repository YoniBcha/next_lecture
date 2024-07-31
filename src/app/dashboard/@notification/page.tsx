import Link from "next/link";
import Card from "@/components/card";

export default function NotificationPage() {
  return (
    <>
      <Card>
        <div className="text-red-400">Notification page </div>
        <Link href="dashboard/archived" className="text-orange-500">Archived</Link>
      </Card>
    </>
  );
}
