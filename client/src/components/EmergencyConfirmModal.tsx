import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EmergencyConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  phoneNumber: string;
}

export function EmergencyConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  phoneNumber,
}: EmergencyConfirmModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-[32px] p-8" aria-describedby="emergency-description">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-red-500" aria-hidden="true" />
            <DialogTitle id="emergency-title">Emergency Contact</DialogTitle>
          </div>
          <DialogDescription id="emergency-description" className="sr-only">
            Emergency dental contact information and guidelines
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mb-6">
          <p className="font-semibold text-foreground text-lg">
            This service is for genuine dental emergencies only.
          </p>
          <p className="text-foreground">
            Please use this line only for urgent dental situations such as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground text-sm" role="list">
            <li>Severe dental pain or toothache</li>
            <li>Broken or knocked-out teeth</li>
            <li>Oral injuries or significant bleeding</li>
            <li>Swelling, infection, or fever symptoms</li>
            <li>Trauma to mouth or jaw</li>
          </ul>
          <p className="text-sm text-muted-foreground pt-3 bg-amber-50 p-3 rounded-lg border border-amber-200">
            For routine appointments, consultations, or non-emergency inquiries, please use the regular booking options available on our website.
          </p>
          <p className="pt-4 font-bold text-foreground text-lg">
            Emergency Number: <span className="text-red-600 text-xl" aria-label={`Emergency phone number ${phoneNumber}`}>{phoneNumber}</span>
          </p>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onConfirm} 
            className="flex-1 bg-red-600 hover:bg-red-700 rounded-full gap-2"
            aria-label={`Call emergency number ${phoneNumber}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 rounded-full" 
            onClick={onClose}
            aria-label="Close emergency contact dialog"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
