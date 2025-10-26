import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What documents do I need to apply for a mortgage loan?",
    answer: "You will need a government-issued ID, proof of income (pay stubs, tax returns), bank statements from the last 2-3 months, a work history for the last 2 years, and documentation of any current debt. I will help you prepare everything needed during our initial consultation.",
  },
  {
    question: "How long does the approval process take?",
    answer: "The pre-approval process can take 1 to 3 business days. Once you find a property and we submit the formal application, the entire process typically takes 30-45 days, depending on various factors. We work to make it as fast and efficient as possible.",
  },
  {
    question: "What credit score do I need to qualify?",
    answer: "While requirements vary by loan type, a minimum score of 580-620 is generally needed. However, even if your score is lower, options are available. I can help you improve your credit and find programs that fit your current situation.",
  },
  {
    question: "How much should I put down as a down payment?",
    answer: "The typical down payment is 20%, but there are programs with as little as 3-3.5% down, especially for first-time buyers. Some programs like VA and USDA even offer 0% down payment. We will evaluate together what the best option is for your financial situation.",
  },
  {
    question: "Can I buy a house if I am an immigrant?",
    answer: "Absolutely! You do not need to be a U.S. citizen to buy a house. If you have an ITIN or SSN, verifiable income history, and meet credit requirements, you can qualify. I have extensive experience helping Latino families in this situation.",
  },
  {
    question: "What is better: fixed rate or adjustable rate?",
    answer: "A fixed rate keeps the same interest throughout the life of the loan, offering stability. An adjustable rate (ARM) may start lower but can change after an initial period. The best option depends on your long-term plans, financial situation, and risk tolerance. I will help you decide what is best for you.",
  },
  {
    question: "When should I refinance my mortgage?",
    answer: "Consider refinancing if interest rates have dropped significantly (at least 0.75-1%), if your credit has improved substantially, if you want to switch from an adjustable rate to a fixed rate, or if you need to access the equity in your home. We will analyze whether refinancing makes sense for your specific situation.",
  },
  {
    question: "Do you charge for the initial consultation?",
    answer: "No, the initial consultation is completely free and without obligation. It is an opportunity to get to know each other, understand your situation, discuss your goals, and explain all the available options. You only pay when we decide to work together and you successfully close your loan.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-blue-900" />
            <span className="text-blue-900">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
            Got Questions? I Have Answers
          </h2>
          <p className="text-xl text-slate-600">
            Here you will find answers to the most common questions about the mortgage process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 px-6 data-[state=open]:bg-white data-[state=open]:border-blue-200 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-slate-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl text-slate-900 mb-3">Can't find what you're looking for?</h3>
            <p className="text-slate-600 mb-6">
              I'm here to answer all your questions personally
            </p>
            <a href="tel:+18138208028">
  <button className="text-blue-900 hover:text-blue-700 transition-colors">
    Contact me directly →
  </button>
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
