"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootNotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      router.replace("/en/404");
    } else if (pathname.startsWith("/fi")) {
      router.replace("/fi/404");
    } else {
      router.replace("/en");
    }
  }, [pathname, router]);

  return null;
}
