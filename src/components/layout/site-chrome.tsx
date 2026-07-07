"use client";

import { BackToTop } from "@/components/shared/back-to-top";
import { DownloadToast } from "@/components/shared/download-toast";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <DownloadToast />
    </>
  );
}
