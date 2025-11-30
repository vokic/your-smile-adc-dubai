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
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="h-6 w-6 text-red-600 shrink-0" />
            <AlertDialogTitle className="text-lg">
              Emergency Call
            </AlertDialogTitle>
          </div>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-3 text-base">
          <p className="font-semibold text-foreground">
            This service is for genuine dental emergencies only.
          </p>
          <p>
            Please use this line only for urgent dental situations such as:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1">
            <li>Severe dental pain</li>
            <li>Broken or knocked-out teeth</li>
            <li>Oral injuries or bleeding</li>
            <li>Swelling or infection symptoms</li>
          </ul>
          <p className="text-sm text-muted-foreground pt-2">
            For routine appointments or consultations, please use the regular booking options.
          </p>
          <p className="pt-3 font-semibold text-foreground">
            Emergency Number: <span className="text-red-600">{phoneNumber}</span>
          </p>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Call Emergency
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
