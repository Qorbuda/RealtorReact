import textLanguageEn from "./text-languages/textLanguageEn.json"
import textLanguageKa from "./text-languages/textLanguageKa.json"
import textLanguageRu from "./text-languages/textLanguageRu.json"

import { test } from "./LocaleSelector";

var actionText;
function LanguageSwitcher(i = test) {
    if (i == "" && actionText != null) {
        return actionText
    }

    if (i == "ka") {
        actionText = textLanguageKa
    } else if (i == "ru") {
        actionText = textLanguageRu
    } else {
        actionText = textLanguageEn;
    }

    return (actionText);
};

export default LanguageSwitcher;