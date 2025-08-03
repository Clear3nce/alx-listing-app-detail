import React, { useState } from "react";
import Pill from "./Pill";

const filterOptions = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

const FilteredSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <section className="flex flex-wrap gap-2 md:gap-4 p-4 md:p-6">
      {filterOptions.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          isActive={activeFilter === filter}
          onClick={() =>
            setActiveFilter((prev) => (prev === filter ? null : filter))
          }
        />
      ))}
    </section>
  );
};

export default FilteredSection;
