import { LegalDocument } from "@/components/LegalDocument";
import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_NAME,
  REGULAR_PHONE_DISPLAY,
} from "@/lib/constants";

/**
 * Website terms for a UAE dental clinic. Standard template — not legal
 * advice. The text lives under `terms.sections` in the locale files.
 */
export default function Terms() {
  return (
    <LegalDocument
      namespace="terms"
      path="/terms"
      vars={{
        clinic: CLINIC_NAME,
        address: CLINIC_ADDRESS,
        email: CLINIC_EMAIL,
        phone: REGULAR_PHONE_DISPLAY,
      }}
    />
  );
}
