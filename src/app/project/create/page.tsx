"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateProject() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

    useEffect(() => {
    router.prefetch("/project");
  }, [router]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/project");
    }, 100);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-onBackground p-6 rounded shadow-lg max-w-lg w-full flex flex-col gap-4"
          >
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-xl text-light font-semibold">Create Project</h2>
              <Image
                alt="Close Icon"
                src="/x.png"
                width={24}
                height={24}
                onClick={handleClose}
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </div>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Project name"
                className="border border-light text-light p-2 w-full mb-4"
              />
              <div className="flex flex-row-reverse justify-between items-center">
                <button
                  type="submit"
                  className="bg-shadow text-white px-4 py-2 rounded self-end"
                >
                  Save
                </button>
                <div className="text-light">
                  <label htmlFor="options">Choose a repository type:</label>
                  <select
                    id="options"
                    value={selectedValue}
                    onChange={handleChange}>
                    <option value="single">Single Repository</option>
                    <option value="multi">Multi Repository</option>
                  </select>
                </div>
              </div>
            </form>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
