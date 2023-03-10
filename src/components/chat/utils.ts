import { format } from "date-fns";
import { v4 as uuidFn } from "uuid";

export function uuid(replace = true) {
  if (!replace) return uuidFn();
  return uuidFn().replaceAll("-", "");
}

export function scrollToElement(value: string | HTMLElement, option?: ScrollIntoViewOptions) {
  setTimeout(() => {
    let element;
    if (typeof value === "string") {
      element = document.getElementById(value);
    } else if (value) {
      element = value;
    }
    if (element && element.scrollIntoView) {
      element.scrollIntoView({ behavior: "smooth", block: "center", ...option });
    }
  }, 40);
}

export function getCurrentTime() {
  return format(new Date(), "yyyy-MM-dd HH:mm:ss");
}

export function removeLn(content?: string): string {
  if (!content) return "";
  let result = content;
  while (result.startsWith("\n") || result.endsWith("\n")) {
    if (result.startsWith("\n")) {
      result = result.substring(2);
    }
    if (result.endsWith("\n")) {
      result = result.substring(0, result.length - 2);
    }
  }
  return result;
}
