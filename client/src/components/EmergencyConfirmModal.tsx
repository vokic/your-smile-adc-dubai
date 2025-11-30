import { useState } from "react";
import { AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-lg sm:max-max-w-2xl w-full rounded-3xl animate-in scale-95 duration-200">
        <AlertDialogHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-red-600 shrink-0 mt-1" />
            <AlertDialogTitle className="text-2xl">
              Emergency Dental Care
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-4 text-base">
          <p className="font-semibold text-foreground text-lg">
            This service is for genuine dental emergencies only.
          </p>
          <p className="text-foreground">
            Please use this line only for urgent dental situations such as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-foreground">
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
        </AlertDialogDescription>
        <AlertDialogFooter className="gap-3 sm:gap-0 flex-col-reverse sm:flex-row">
          <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold h-11"
          >
            Call Emergency Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}