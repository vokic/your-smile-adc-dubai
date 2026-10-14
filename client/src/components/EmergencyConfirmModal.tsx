import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";

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
  const { t, tList } = useLanguage();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-xl p-8" aria-describedby="emergency-description">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-red-500" aria-hidden="true" />
            <DialogTitle id="emergency-title">{t("emergencyModal.title")}</DialogTitle>
          </div>
          <DialogDescription id="emergency-description" className="sr-only">
            {t("emergencyModal.srDescription")}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mb-6">
          <p className="font-semibold text-foreground text-lg">
            {t("emergencyModal.lead")}
          </p>
          <p className="text-foreground">
            {t("emergencyModal.useFor")}
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground text-sm" role="list">
            {tList("emergencyModal.cases").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground pt-3 bg-amber-50 p-3 rounded-lg border border-amber-200">
            {t("emergencyModal.routineNote")}
          </p>
          <p className="pt-4 font-bold text-foreground text-lg">
            {t("emergencyModal.numberLabel")}{" "}
            <span className="text-red-600 text-xl" aria-label={t("emergencyModal.numberAria", { phone: phoneNumber })}>
              {phoneNumber}
            </span>
          </p>
        </div>

        <div className="flex gap-3">
          <Button 
            onClick={onConfirm} 
            className="flex-1 bg-red-600 hover:bg-red-700 rounded-full gap-2"
            aria-label={t("emergencyModal.callAria", { phone: phoneNumber })}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {t("common.callNow")}
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 rounded-full" 
            onClick={onClose}
            aria-label={t("emergencyModal.closeAria")}
          >
            {t("emergencyModal.close")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
