"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProject() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/project");
    }, 300);
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
            className="bg-onBackground p-6 rounded shadow-lg max-w-lg w-full flex flex-col"
          >
            <h2 className="text-xl text-light font-semibold mb-4">Create Project</h2>
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
            <button
              onClick={handleClose}
              className="mt-4 text-sm text-gray-600 underline self-end"
            >
              Cancel
            </button>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
