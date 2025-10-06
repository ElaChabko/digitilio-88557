import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormDialog = ({ isOpen, onClose }: ContactFormDialogProps) => {
  const GOOGLE_FORM_URL = "https://forms.gle/bPNf6bg2DYdy7qDb8";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Skontaktuj się ze mną</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[70vh]">
          <iframe
            src={GOOGLE_FORM_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-b-lg"
          >
            Ładowanie…
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};
