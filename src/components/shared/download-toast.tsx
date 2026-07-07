"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { DOWNLOAD_CELEBRATION_EVENT } from "@/lib/download-celebration";

export function DownloadToast() {
  const { dictionary } = useDictionary();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleDownload = () => {
      setIsVisible(true);
      window.setTimeout(() => setIsVisible(false), 3200);
    };

    window.addEventListener(DOWNLOAD_CELEBRATION_EVENT, handleDownload);
    return () =>
      window.removeEventListener(DOWNLOAD_CELEBRATION_EVENT, handleDownload);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-white px-5 py-3 shadow-soft-lg sm:bottom-8"
        >
          <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
          <p className="text-sm font-medium text-primary">
            {dictionary.ui.downloadToast}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
