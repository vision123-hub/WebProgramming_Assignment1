function FilterBar({
  technologies,
  selectedTechnology,
  allProjectsFilter,
  onTechnologyChange,
}) {
  const filters = [allProjectsFilter, ...technologies];

  return (
    <div className="filter-bar">
      <span className="filter-bar__label" id="technology-filter-label">
        Filter by technology
      </span>
      <div
        className="filter-bar__options"
        role="group"
        aria-labelledby="technology-filter-label"
      >
        {filters.map((technology) => (
          <button
            className={`filter-bar__button${
              selectedTechnology === technology ? ' is-selected' : ''
            }`}
            key={technology}
            type="button"
            aria-pressed={selectedTechnology === technology}
            onClick={() => onTechnologyChange(technology)}
          >
            {technology}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
