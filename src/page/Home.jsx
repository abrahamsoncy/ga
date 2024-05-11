import React, { Component } from "react";
import MenuBarPanel from "./Home/MenuBar";
import SlideshowPanel  from './Home/SlideshowPanel';
import BishopPanel from './Home/BishopPanel'
import RetreatPanel from'./Home/RetreatPanel';
import EventsPanel from'./Home/EventsPanel';
import MinistriesPanel from './Home/MinistriesPanel'
import WordofGodPanel from './Home/WordofGodPanel'

class HomePanel extends Component {
  render() {
    return (
        <React.Fragment>
       
        <div
          class="menu_mobile_overlay scheme_dark inited_click"
          style={{ display: "none" }}
        ></div>
        <MenuBarPanel />
        <div classname="page_content_wrap">
          <div className="content_wrap_fullscreen">
            <div classname="content">
              <a
                id="content_skip_link_anchor"
                classname="athos_skip_link_anchor"
                href="#"
              />
              <article
                id="post-22873"
                classname="post_item_single post_type_page post-22873 page type-page status-publish has-post-thumbnail hentry"
              >
                <div classname="post_content entry-content">
                <SlideshowPanel/>
                <BishopPanel/>    
                <RetreatPanel/>
                <EventsPanel/>
                <MinistriesPanel/>
                <WordofGodPanel/>
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
