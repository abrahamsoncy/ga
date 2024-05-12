import React, { Component } from "react"; 
import SlideshowPanel from './Home/SlideshowPanel';
import RetreatCentrePanel from './Home/RetreatCentrePanel'; 
import HealingDeliverancePanel from './Home/HealingDeliverancePanel';
import  MinistriesPanel from './Home/MinistriesPanel';
import EventsPanel from './Home/EventsPanel';
import OurMinistriesPanel from './Home/OurMinistriesPanel';
import PrayerRequestPanel from './Home/PrayerRequestPanel';
import DailyWordofGodPanel from './Home/DailyWordofGodPanel'
import DailyWordContentPanel from './Home/DailyWordContentPanel';
import OnlineMinistriesPanel from './Home/OnlineMinistriesPanel';
import WalkThroughPanel from './Home/WalkThroughPanel';

class HomePanel extends Component {
  render() {
    return (
      <React.Fragment>


        <div className="page_content_wrap">
          <div className="content_wrap_fullscreen">
            <div className="content">
              <a
                id="content_skip_link_anchor"
                className="athos_skip_link_anchor"
                href="#"
              />
              <article
                id="post-22873"
                className="post_item_single post_type_page post-22873 page type-page status-publish has-post-thumbnail hentry"
              >
                <div className="post_content entry-content">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id={22873}
                    className="elementor elementor-22873"
                  >
                    <SlideshowPanel />
                    <RetreatCentrePanel/>
                    <HealingDeliverancePanel/>
                    <MinistriesPanel/>
                    <EventsPanel/>
                    <PrayerRequestPanel/>
                    <OurMinistriesPanel/>
                    <DailyWordofGodPanel/>
                    <DailyWordContentPanel/>
                    <OnlineMinistriesPanel/>
                    <WalkThroughPanel/>

                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>



      </React.Fragment>
    );
  }
}

export default HomePanel;
