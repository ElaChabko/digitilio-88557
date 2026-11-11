import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ContactForm } from "@/components/ContactForm";

interface ContactFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormDialog = ({ isOpen, onClose }: ContactFormDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        // shadcn/ui daje open:boolean – zamykamy tylko gdy open=false
        if (!open) onClose();
      }}
    >
      <DialogContent className="flex max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-2xl flex-col gap-0 overflow-hidden rounded-[1.75rem] p-0 sm:max-h-[calc(100dvh-4rem)] sm:rounded-[2rem]">
        <DialogHeader className="shrink-0 border-b border-violet/10 p-6 pr-14 text-left">
          <DialogTitle className="text-2xl font-semibold tracking-[-0.03em] text-violet">Skontaktuj się ze mną</DialogTitle>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 pt-5 [-webkit-overflow-scrolling:touch]">
          <ContactForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
