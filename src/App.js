import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/home/home.js";
import About from "./screens/about/about";
import Approach from "./screens/about/approach";
import People from "./screens/about/people";
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import Contact from "./screens/contact/contact";
import Events from "./screens/events/events";
import PastEvents from "./screens/events/past_events";
import UpcomingEvents from "./screens/events/upcoming_events";
import Speak from "./screens/events/speak";
import Donate from "./screens/involved/donate";
import FundRaising from "./screens/involved/fund_raising";
import Involved from "./screens/involved/involved";
import Jobs from "./screens/involved/jobs";
import Volunteer from "./screens/involved/volunteer";
import Blog from "./screens/media/blog";
import Gallery from "./screens/media/gallery";
import NewsDetails from "./screens/media/news_details";
import News from "./screens/media/news";
import Podcast from "./screens/media/podcast";
import FinancialAccounts from "./screens/resources/financial_accounts";
import Info from "./screens/resources/info";
import Links from "./screens/resources/links";
import Reports from "./screens/resources/reports";
import Shop from "./screens/shop/shop";
import Cart from "./screens/shop/cart";
import Community from "./screens/work/community";
import Equality from "./screens/work/equality";
import Legal from "./screens/work/legal";
import Opportunity from "./screens/work/opportunity";
import Policy from "./screens/work/policy";
import Projects from "./screens/work/projects";
import Strategic from "./screens/work/strategic";
import PrivacyPolicy from "./screens/privacy/privacy_policy";

import Nav from "./components/nav";
import Footer from "./components/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Nav />

        <Switch className="routes">
          <Route path="/" component={Home} exact={true} />

          {/* About */}
          <Route path="/about" component={About} exact={true} />
          <Route path="/approach" component={Approach} exact={true} />
          <Route path="/people" component={People} exact={true} />

          {/* Auth */}
          <Route path="/login" component={Login} exact={true} />
          <Route path="/register" component={Register} exact={true} />

          {/* Contact */}
          <Route path="/contact" component={Contact} exact={true} />

          {/* Events */}
          <Route path="/events" component={Events} exact={true} />
          <Route path="/past-events" component={PastEvents} exact={true} />
          <Route
            path="/upcoming_events"
            component={UpcomingEvents}
            exact={true}
          />
          <Route path="/speak" component={Speak} exact={true} />

          {/* Involved*/}
          <Route path="/donate" component={Donate} exact={true} />
          <Route path="/fund-raising" component={FundRaising} exact={true} />
          <Route path="/involved" component={Involved} exact={true} />
          <Route path="/jobs" component={Jobs} exact={true} />
          <Route path="/volunteer" component={Volunteer} exact={true} />

          {/*Media */}
          <Route path="/blog" component={Blog} exact={true} />
          <Route path="/gallery" component={Gallery} exact={true} />
          <Route
            path="/news-details/:id"
            component={NewsDetails}
            exact={true}
          />
          <Route path="/news" component={News} exact={true} />
          <Route path="/podcast" component={Podcast} exact={true} />

          {/*Resources */}
          <Route
            path="/financial-accounts"
            component={FinancialAccounts}
            exact={true}
          />
          <Route path="/info" component={Info} exact={true} />
          <Route path="/links" component={Links} exact={true} />
          <Route path="/reports" component={Reports} exact={true} />

          {/*Shop */}
          <Route path="/shop" component={Shop} exact={true} />
          <Route path="/cart" component={Cart} exact={true} />

          {/* Work */}
          <Route path="/community" component={Community} exact={true} />
          <Route path="/equality" component={Equality} exact={true} />
          <Route path="/legal" component={Legal} exact={true} />
          <Route path="/opportunity" component={Opportunity} exact={true} />
          <Route path="/policy" component={Policy} exact={true} />
          <Route path="/projects" component={Projects} exact={true} />
          <Route path="/strategic" component={Strategic} exact={true} />

          {/*PRIVACY POLICY*/}
          <Route path="/privacy" component={PrivacyPolicy} exact={true} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
