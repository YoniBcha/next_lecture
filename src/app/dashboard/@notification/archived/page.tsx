import Link from "next/link";
import Card from "@/components/card";

export default function ArchivedNotificationPage() {
  return (
    <>
      <Card>
        <div className="">Archived Notification</div>
        <div className="text-green-500">
          <Link href="/dashboard">Default</Link>
        </div>
      </Card>
    </>
  );
}
