import { configure } from '@kadira/storybook';

function loadStories() {
  // Old components
  require('../app/components/stories/SideNav');
  require('../app/components/stories/AreaChart');
  require('../app/components/stories/BarChart');
  require('../app/components/stories/ChartCard');

  // New components
  require('../app/components/stories/Header');
}

configure(loadStories, module);
