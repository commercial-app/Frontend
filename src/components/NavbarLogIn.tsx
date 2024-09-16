"use client";

import { useAuthStore } from "@/app/store/useAuthStore";

export default function NavbarLogIn() {
  const name = useAuthStore((state) => state.name);

  return (
    <div>
      <p>{name} 님</p>
    </div>
  );
}
