import { useSession } from "next-auth/react";

export default function EditorPage() {
  const {data}: any = useSession();

  return (
    <div>
      <h1>Halaman Khusus Editor</h1>
      <p>Selamat datang, {data?.user?.fullName}!</p>
    </div>
  );
}