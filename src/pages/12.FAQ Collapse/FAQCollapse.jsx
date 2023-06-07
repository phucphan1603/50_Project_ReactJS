import { useEffect, useState } from "react";
import styles from "./FAQCollapse.module.css";

const FAQ = [
  {
    id: 1,
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything",
  },
  {
    id: 2,
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything",
  },
];

export const FAQCollapse = () => {
  const [faqSelected, setFaqSelected] = useState(null);

  useEffect(() => {
    document.title = "FAQ Collapse";
  }, []);

  const handleSelectFAQ = (faq) => {
    if (faqSelected?.id === faq.id) {
      setFaqSelected(null);
    } else {
      setFaqSelected(faq);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked QUestions</h1>
      <div className={styles.faq_container}>
        {FAQ.map((item) => {
          return (
            <div
              key={item.id}
              className={`${styles.faq} ${
                faqSelected?.id === item.id ? styles.active : ""
              }`}
            >
              <h3 className={styles.faq_title}>{item.question}</h3>
              <p className={styles.faq_text}>{item.answer}</p>

              <button
                className={styles.faq_toggle}
                onClick={() => {
                  handleSelectFAQ(item);
                }}
              >
                <div
                  className={`fas fa-chevron-down ${styles.fa_chevron_down}`}
                ></div>
                <div
                  className={`fas fa-chevron-up ${styles.fa_chevron_up}`}
                ></div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
