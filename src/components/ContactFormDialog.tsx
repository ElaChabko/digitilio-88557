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
      {/* Na telefonie formularz bywa wyższy niż ekran (zwłaszcza przy otwartej klawiaturze),
          więc okno musi mieć własne przewijanie. dvh uwzględnia pasek adresu przeglądarki. */}
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-2xl max-h-[90vh] supports-[height:100dvh]:max-h-[90dvh] overflow-y-auto overscroll-contain rounded-lg p-0 [-webkit-overflow-scrolling:touch]">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Skontaktuj się ze mną</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4">
          <ContactForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
