"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ProjectRedirectPage() {

  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-xl font-bold text-light">No project found</h2>
        <p className="text-light">You don't have any project yet. Create one now to start!</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => router.push("/project/create", {scroll: true})}
      className="self-end py-2 px-4 bg-secondary rounded-md">Create Project</motion.button>
    </div>
  );
}
