export interface AreaDetail {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "civil" | "familia" | "previdenciario" | "imobiliario" | "consultoria" | "preventiva";
  keyTopics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  area: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
