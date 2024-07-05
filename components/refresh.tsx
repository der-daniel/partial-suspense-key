"use client";

import { useRouter } from "next/navigation";

export const Refresh = ({ key1, key2 }: { key1: string; key2: string }) => {
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() =>
          router.replace(
            `/?key1=${Math.ceil(Math.random() * 300)}&key2=${key2}`
          )
        }
      >
        Refresh via router key 1
      </div>
      <div
        onClick={() =>
          router.replace(
            `/?key1=${key1}&key2=${Math.ceil(Math.random() * 300)}`
          )
        }
      >
        Refresh via router key 2
      </div>
      <div
        onClick={() =>
          router.replace(
            `/?key1=${Math.ceil(Math.random() * 300)}&key2=${Math.ceil(
              Math.random() * 300
            )}`
          )
        }
      >
        Refresh via router (both)
      </div>
    </div>
  );
};
