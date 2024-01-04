import en_US from "@/i18n/en_US.json";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
    fallbackLocale: 'en_US',
    messages: {
        en_US: { ...en_US },
    }
});

export default i18n;
