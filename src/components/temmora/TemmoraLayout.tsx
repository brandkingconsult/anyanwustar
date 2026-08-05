import { Outlet, useLocation } from "react-router-dom";
import { TemmoraNav } from "./TemmoraNav";
import { TemmoraFooter } from "./TemmoraFooter";
import { BundleProvider } from "./BundleContext";
import { BundleCartUI } from "./BundleCartUI";
import { CheckoutModal } from "./CheckoutModal";
import { AnimatePresence, motion } from "framer-motion";

export const TemmoraLayout = () => {
  const location = useLocation();
  
  return (
    <BundleProvider>
      <div className="min-h-screen bg-background text-foreground relative flex flex-col">
        <TemmoraNav />
        <main className="flex-1 w-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, filter: "brightness(0.5)" }}
              animate={{ opacity: 1, filter: "brightness(1)" }}
              exit={{ opacity: 0, filter: "brightness(0.5)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex-1 flex flex-col"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <TemmoraFooter />
        <BundleCartUI />
        <CheckoutModal />
      </div>
    </BundleProvider>
  );
};
