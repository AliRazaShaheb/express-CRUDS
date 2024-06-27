export const resData = [
  {
    id: "1",
    label: "nice label",
    value: "nice_label",
    delete: "0",
  },
  {
    id: "2",
    label: "Hellow world",
    value: "hello_world",
    delete: "0",
  },
];
export const resData1 = [
  {
    label: "Unique Text-1",
    value: "nOKI4FT8RL",
  },
  {
    label: "Unique Text-2",
    value: "DDvt9SQnkh",
  },
  {
    label: "Unique Text-3",
    value: "c0OvSMe1d3",
  },
  {
    label: "Unique Text-4",
    value: "EFzZ97Y7XV",
  },
  {
    label: "Unique Text-5",
    value: "XsbNwPsb9N",
  },
  {
    label: "Unique Text-6",
    value: "fjih2cllTa",
  },
  {
    label: "Unique Text-7",
    value: "gmxLFECjcj",
  },
  {
    label: "Unique Text-8",
    value: "cIdh4dnQFt",
  },
  {
    label: "Unique Text-9",
    value: "jNExmYsEtz",
  },
  {
    label: "Unique Text-10",
    value: "rukG5JX3Im",
  },
  {
    label: "Unique Text-11",
    value: "JjX8xIOecl",
  },
  {
    label: "Unique Text-12",
    value: "m417Ab9GMq",
  },
  {
    label: "Unique Text-13",
    value: "ScS4xg93m7",
  },
  {
    label: "Unique Text-14",
    value: "5hOHphtC0g",
  },
  {
    label: "Unique Text-15",
    value: "XjaADn45pf",
  },
  {
    label: "Unique Text-16",
    value: "xH4D6PlSsn",
  },
  {
    label: "Unique Text-17",
    value: "xMFoRfE5JK",
  },
  {
    label: "Unique Text-18",
    value: "gQpUpBZl5z",
  },
  {
    label: "Unique Text-19",
    value: "wiBfH5JRso",
  },
  {
    label: "Unique Text-20",
    value: "IUZQeUPcdI",
  },
];

const count = 20;
let data = [];
const text_small = "abcdefghijklmnopqrstuvwxyz";
const text_upper = text_small.toLocaleUpperCase();
const numbers = "0123456789";
const text = text_small.concat(text_upper, numbers);
const generateRandom = (randomLength = 10) => {
  let uniqueText = "";
  for (let i = 0; i < randomLength; i++) {
    const randomIndex = Math.floor(Math.random() * text.length);
    uniqueText += text[randomIndex];
  }
  return uniqueText;
};

for (let i = 0; i < count; i++) {
  const index = i + 1;
  const uniqueText = generateRandom();
  data.push({
    label: `Unique Text-${index}`,
    value: uniqueText,
  });
}
