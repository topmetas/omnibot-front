import pt from "./pt.json";
import en from "./en.json";

const messages = { pt, en };

export function t(key, lang = "pt") {
  return messages[lang][key] || key;
}
