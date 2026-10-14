import { LegalDocument } from "@/components/LegalDocument";
import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_NAME,
  REGULAR_PHONE_DISPLAY,
} from "@/lib/constants";

/**
 * Privacy notice aligned with UAE Federal Decree-Law No. 45 of 2021 (PDPL)
 * and the Dubai Health Authority's patient-confidentiality expectations.
 * Standard template — not legal advice; the owner may have counsel review it.
 * The text itself lives under `privacy.sections` in the locale files.
 */
export default function Privacy() {
  return (
    <LegalDocument
      namespace="privacy"
      path="/privacy"
      vars={{
        clinic: CLINIC_NAME,
        address: CLINIC_ADDRESS,
        email: CLINIC_EMAIL,
        phone: REGULAR_PHONE_DISPLAY,
      }}
    />
  );
}
