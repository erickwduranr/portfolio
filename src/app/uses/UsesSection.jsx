import React from 'react';
import PropTypes from 'prop-types';
import UsesCard from './UsesCard';

const UsesSection = ({ items }) => {
  return (
    <section className="flex flex-col p-4 md:p-8">
      <div className="flex flex-col gap-y-8 md:gap-y-16">
        {items.map((group, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-x-4 md:gap-x-8 pl-2 md:pl-4 border-l-2 border-gray-300">
            <h2 className="text-lg gap-y-6 md:text-xl font-bold min-w-[150px] md:min-w-[250px]">{group.groupName}</h2>
            <div className="flex flex-col py-4 gap-y-4">
              {group.items.map((item, idx) => (
                <UsesCard
                  key={idx}
                  title={item.title}
                  content={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
