import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/stories/');
  // Old components
  // require('../app/components/stories/SideNav');
  // require('../app/components/stories/ChartCard');
  // require('../app/components/stories/AreaChart');
  // require('../app/components/stories/BarChart');
  // require('../app/components/stories/LineChart');
  // require('../app/components/stories/StackedLineChart');
  //
  // // New components
  // require('../app/components/stories/Header');
}

configure(loadStories, module);
