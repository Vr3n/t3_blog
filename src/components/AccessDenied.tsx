import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const AccessDenied = () => {
  return (
    <motion.section
      layoutId="blog"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
        exit: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col h-[80vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-5">
        Access Denied
      </h2>
      <div>
        <button
          type="button"
          className="text-white
          transition delay-150
            hover:scale-105 hover:shadow-xl hover:shadow-black shadow-lg shadow-black/60
            active:scale-95 active:shadow-black[70]
          bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
          onClick={() => signIn()}
        >
          <span className="ml-2">Sign In to your account</span>
        </button>
      </div>
    </motion.section>
  );
};

export default AccessDenied;
