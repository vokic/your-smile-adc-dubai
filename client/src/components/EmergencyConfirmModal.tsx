import { Phone, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-[32px] p-8 max-w-md w-full shadow-2xl animate-in scale-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h3 className="text-2xl font-bold text-secondary">Emergency Contact</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="font-semibold text-foreground text-lg">
            This service is for genuine dental emergencies only.
          </p>
          <p className="text-foreground">
            Please use this line only for urgent dental situations such as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground text-sm">
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
            Emergency Number: <span className="text-red-600 text-xl">{phoneNumber}</span>
          </p>
        </div>

        <div className="flex gap-3">
          <Button onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 rounded-full gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button variant="outline" className="flex-1 rounded-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}