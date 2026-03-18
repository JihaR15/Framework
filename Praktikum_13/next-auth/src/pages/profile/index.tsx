import { useSession } from "next-auth/react";

const HalamanProfile = () => {
  const {data}:any = useSession();
  return (
    <div>
      <h1>Halaman Profile</h1>
      <h3>Selamat Datang, {data?.user?.fullname}</h3>
    </div>
  )
}

export default HalamanProfile