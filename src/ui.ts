const ui = {
  readingTime: (n: number) => `${n} min read`,
  updated: 'Updated',
  relatedProjects: 'Related',
  allProjects: 'All Projects →',
  projectsEyebrow: 'Portfolio',
  projectsTitle: 'All Projects',
  heroTitle: 'Pascal Amaliri',
  heroTitleLine2: 'Software Engineer.',
  viewAll: 'All projects →',
  readLink: 'Read the case study →',
  projectFeed: {
    all: 'All',
    filterLabel: 'Filter projects by tag',
    previousCategories: 'Scroll categories left',
    nextCategories: 'Scroll categories right',
    searchLabel: 'Search projects',
    empty: 'No projects match this filter.',
    more: 'Load more',
    read: 'Read',
  },
};

export function getUiText() {
  return ui;
}
