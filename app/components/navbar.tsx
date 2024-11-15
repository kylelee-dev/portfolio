import { motion } from "framer-motion";
import Link from "next/link";
export default function Navbar({ sections }) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <Link href="/">KYLE LEE</Link>
          </motion.div>
          {/* Menu selections */}
          <div className="flex space-x-8">
            {sections.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
