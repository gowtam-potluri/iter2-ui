import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.jsx';
import IssueEdit from './IssueEdit.jsx';
import PatIssueEdit from './PatIssueEdit.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/issues/:id?', component: IssueList },
  { path: '/edit/:id', component: IssueEdit },
  { path: '/patedit/:id', component: PatIssueEdit },
  { path: '/patients/:id?', component: IssueReport },
  { path: '/about', component: About },
  { path: '*', component: NotFound },
];

export default routes;