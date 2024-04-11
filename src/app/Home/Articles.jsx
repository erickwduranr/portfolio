import React from "react";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const articles = [
    {
      date: "January 2022 to the present",
      title: "International Student of Software Engineering AS • Ensign College ",
      content: "International student in the process of updating knowledge in Java, JavaScript and Agile Methodology.",
      link: "https://ensign.smartcatalogiq.com/en/2023-2024/academic-catalog/academic-programs/associate-of-science/",
    },
    {
      date: "2015-2019",
      title: "Senior Data Analyst and Management Support [Itaú Bank Chile – Data Analytics]",
      content: "●	GMI Application Testing & support for streamlining Banking/Backoffice Settlements. ",
      link: "https://www.linkedin.com/in/erickwduranr/",
    },
    {
      date: "2007-2013",
      title: "Santander Bank Chile  Senior Risk Systems Analyst (IT) ",
      content:
        "●	As member of a development team, I contributed to the validation and systemic implementation of all Scoring Models for all customer segments. I was responsible for an entire customer segment – young professionals. Manager of survey, analysis, and implementation (development) of new FICO CDA - OMDM tool, replacing StrategyWare. Experience as an analyst-programmer of credit policies and predictive models in FICO StrategyWare and CDA tools.",
      link: "https://www.linkedin.com/in/erickwduranr/",
    },
  ];

  if (!articles.length) {
    return <div>No article data</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <article
          key={index}
          data-testid={"articleCard"}
          className="flex flex-col p-6 border border-gray-300 rounded-lg w-full shadow-md mb-5  "
        >
          <div className="text-xs uppercase text-gray-600 dark:text-gray-300 border-l-4 border-gray-300 pl-2">
            <time data-testid={"articleCardDate"}>{article.date}</time>
            <h2 className="text-2xl capitalize my-4 font-bold" data-testid={"articleCardTitle"}>
              {article.title}
            </h2>
          </div>
          <p
            className="text-base text-gray-700 dark:text-white leading-relaxed mb-4"
            data-testid={"articleCardContent"}
          >
            {article.content}
          </p>
          <a
            className="text-base font-bold text-teal-400 hover:underline"
            data-testid={"articleCardLink"}
            href={article.link}
          >
            Read More
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleCard;
