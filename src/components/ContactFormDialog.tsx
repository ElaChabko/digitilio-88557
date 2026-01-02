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
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
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
