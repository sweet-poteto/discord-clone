import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
