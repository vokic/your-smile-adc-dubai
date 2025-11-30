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
          <p className="text-muted-foreground">For urgent dental emergencies, call immediately:</p>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Emergency Hotline (24/7):</p>
            <p className="text-2xl font-bold text-red-600">
              {phoneNumber}
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Available 24/7 for urgent cases</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Severe pain, broken teeth, infections</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">✓</span>
              <span>Experienced emergency team standing by</span>
            </div>
          </div>
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