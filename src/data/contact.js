import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+1 (555) 287-4371",
    detail: "Daily 10AM-11PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@burgerhub.com",
    detail: "We reply within 2 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "456 Burger Street, Food City",
    detail: "Dine-in & takeout available",
  },
];

export { contactInfo };

const questionsAndANS = [
  {
    question: "What are your operating hours?",
    answer:
      "We're open daily from 10:00 AM to 11:00 PM. Kitchen closes at 10:30 PM for dine-in customers.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes! We deliver within a 5-mile radius. You can order through our website.",
  },
  {
    question: "Can I make reservations?",
    answer:
      "We operate on a first-come, first-served basis, but you can call ahead for large groups (8+ people) and we'll do our best to accommodate you.",
  },
  {
    question: "Do you have vegetarian options?",
    answer:
      "Absolutely! We offer delicious plant-based patties, veggie burgers, and plenty of vegetarian sides and salads.",
  },
  {
    question: "Can I customize my burger?",
    answer:
      "Of course! We love customization. You can add or remove any toppings, change the patty type, or create your own unique burger combination.",
  },
];

export { questionsAndANS };