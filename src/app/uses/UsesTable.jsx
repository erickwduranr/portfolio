import UsesSection from "./UsesSection";

const items = [
  {
    groupName: "DEVELOPMENT TOOLS",
    items: [
      {
        title: "COBOL 400 / AS400",
        description:
          "The AS400 or Iseries machine is fantastic! Of course it is not new technology but it refuses to die. Because? One of the notable features of the AS/400 is its robustness and reliability, as well as its ability to run multiple business applications simultaneously. Cobol/400, on the other hand, is a dialect of COBOL (Common Business-Oriented Language) designed specifically for the AS/400 environment. It is a programming language widely used in AS/400 systems to develop business applications, such as accounting, inventory management, and transaction processing systems. The combination of the AS/400 and Cobol/400 machine has been instrumental in enterprise computing for decades, supporting critical operations for businesses in a wide variety of industries, but primarily banking and insurance.",
      },
      {
        title: "OMDM FICO",
        description:
          "OMDM FICO, or Decision Management FICO Optimization Modeler, is a modeling and optimization tool offered by FICO, a leading analytical and decision-making solutions company. This platform provides a set of powerful tools to model and optimize complex business decisions. OMDM FICO enables organizations to build predictive and prescriptive models that aid in strategic decision making, such as pricing, resource allocation, and risk management.",
      },
      {
        title: "SQL",
        description:
          "SQL (Structured Query Language) is a programming language designed to manage and manipulate relational databases. With SQL, users can perform a variety of operations, such as creating and modifying databases, inserting, updating, and deleting data, and querying specific database information. SQL is widely used in the information technology industry and is essential for the development and maintenance of relational database management systems (RDBMS). With its intuitive and powerful syntax, SQL makes it easy to manage and extract data efficiently, making it an essential tool for anyone working with databases. Powerful!!!",
      },
    ],
  },
  {
    groupName: "DESIGN",
    items: [
      {
        title: "WHIMSICAL",
        description:
          "Whimsical is an online collaboration platform that allows teams to quickly and easily create and share diagrams, mind maps, charts, and other types of visualizations. With an intuitive interface and a variety of design tools, Whimsical facilitates visual communication between team members, helping to organize ideas, plan projects, and make decisions effectively!!!",
      },
    ],
  },
];

function UsesTable() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesTable;
