import { celebrateResumeDownload } from "@/lib/confetti";

export const DOWNLOAD_CELEBRATION_EVENT = "willma:resume-download";

export function triggerDownloadCelebration() {
  celebrateResumeDownload();
  window.dispatchEvent(new CustomEvent(DOWNLOAD_CELEBRATION_EVENT));
}
