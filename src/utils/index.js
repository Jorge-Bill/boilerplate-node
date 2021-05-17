const fs = require("fs");
const crypto = require("crypto");

export function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export function validateTelephone(number){
  return !!number.match(/\(?\d{2,}\)?[ -]?\d{4,}[\-\s]?\d{4}/);
}

export function normalizeTelephone(telephone) {
  return `55${telephone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '')}`;
}

export function generateHash() {
  let current_date = new Date().valueOf().toString();
  let random = Math.random().toString();
  let hash = crypto.createHash("sha1").update(current_date + random).digest("hex");
  return hash;
}

export function convertToBase64(file) {
  const data = fs.readFileSync(file);
  return data.toString("base64");
}
