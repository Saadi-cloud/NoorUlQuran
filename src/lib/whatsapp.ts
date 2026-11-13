import {
  ACADEMY,
  FEMALE_FEE_MESSAGE,
  FEMALE_WHATSAPP_MESSAGE,
  MALE_FEE_MESSAGE,
  MALE_WHATSAPP_MESSAGE,
} from "./constants";

export function whatsappUrl(phoneE164: string, message: string) {
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  male: whatsappUrl(ACADEMY.maleTeacher.phoneE164, MALE_WHATSAPP_MESSAGE),
  female: whatsappUrl(ACADEMY.femaleTeacher.phoneE164, FEMALE_WHATSAPP_MESSAGE),
  maleFees: whatsappUrl(ACADEMY.maleTeacher.phoneE164, MALE_FEE_MESSAGE),
  femaleFees: whatsappUrl(ACADEMY.femaleTeacher.phoneE164, FEMALE_FEE_MESSAGE),
};
