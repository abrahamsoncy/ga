import React, { Component } from "react";

class MenuBarPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu_mobile menu_mobile_fullscreen scheme_dark inited_arrows inited_click">
          <div className="menu_mobile_inner with_widgets">
            <div className="menu_mobile_header_wrap">
              <a
                className="sc_layouts_logo"
                href="https://marianretreatcentre.org/"
              >
                <span className="logo_text">Marian Retreat Centre</span>{" "}
              </a>
              <a
                className="menu_mobile_close menu_button_close inited_click"
                tabIndex={0}
              >
                <span className="menu_button_close_text">Close</span>
                <span className="menu_button_close_icon" />
              </a>
            </div>
            <div className="menu_mobile_content_wrap content_wrap">
              <div className="menu_mobile_content_wrap_inner">
                <nav
                  className="menu_mobile_nav_area"
                  itemScope="itemscope"
                  itemType="https://schema.org/SiteNavigationElement"
                >
                  <ul id="menu_mobile" className="menu_mobile_nav prepared">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-22873 menu-item-22886 current-menu-item current_page_item">
                      <a
                        href="https://marianretreatcentre.org/"
                        aria-current="page"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="about-us menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-26108">
                      <a href="#">
                        <span>About</span>
                        <span className="open_child_menu" />
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26107">
                          <a href="https://marianretreatcentre.org/marian-retreat-centre/">
                            <span>Marian Retreat Centre​</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26106">
                          <a href="https://marianretreatcentre.org/rev-fr-dominic-valanmanal/">
                            <span>Rev. Fr. Dominic Valanmanal</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25269">
                      <a href="https://marianretreatcentre.org/world-evangelization/">
                        <span>World Evangelization</span>
                      </a>
                    </li>
                    <li className="ministries menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-26084">
                      <a href="#">
                        <span>Ministries</span>
                        <span className="open_child_menu" />
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-27376">
                          <a href="https://marianretreatcentre.org/services/grace-anointing-bible-convention/">
                            <span>Grace Anointing Bible Convention</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-25690">
                          <a href="https://marianretreatcentre.org/services/healing-deliverance-residential-retreat/">
                            <span>
                              Healing &amp; Deliverance Residential Retreat
                            </span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-cpt_services menu-item-25689">
                          <a href="https://marianretreatcentre.org/services/missionaries-of-grace/">
                            <span>Missionaries of Grace</span>
                          </a>
                        </li>
                        <li className="all-ministries menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-25691">
                          <a
                            href="https://marianretreatcentre.org/#our-ministry"
                            aria-current="page"
                          >
                            <span>All Ministries</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="d-none menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-23963">
                      <a href="#">
                        <span>Virtual Visit</span>
                        <span className="open_child_menu" />
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25192">
                          <a href="https://marianretreatcentre.org/?page_id=25162">
                            <span>Main Chapel</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25191">
                          <a href="https://marianretreatcentre.org/?page_id=25174">
                            <span>Divine Mercy Adoration Chapel</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25190">
                          <a href="https://marianretreatcentre.org/?page_id=25179">
                            <span>Confession Chapel</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25189">
                          <a href="https://marianretreatcentre.org/?page_id=25184">
                            <span>Spiritual Sharing</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-27227">
                      <a href="#">
                        <span>Schedules</span>
                        <span className="open_child_menu" />
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27291">
                          <a href="https://marianretreatcentre.org/residential-retreats/">
                            <span>Residential Retreats</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27292">
                          <a href="https://marianretreatcentre.org/bible-conventions/">
                            <span>Bible Conventions</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28546">
                      <a href="https://marianretreatcentre.org/blog-portfolio/">
                        <span>Blog</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27225">
                      <a href="#contact-section">
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="socials_mobile">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/FrDominicValanmanal"
                    className="social_item social_item_style_icons sc_icon_type_icons social_item_type_icons"
                  >
                    <span
                      className="social_icon social_icon_facebook-1"
                      style={{}}
                    >
                      <span className="icon-facebook-1" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/frdominicvalanmanal/"
                    className="social_item social_item_style_icons sc_icon_type_icons social_item_type_icons"
                  >
                    <span
                      className="social_icon social_icon_instagram-1"
                      style={{}}
                    >
                      <span className="icon-instagram-1" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/c/FRDOMINICVALANMANALOFFICIAL"
                    className="social_item social_item_style_icons sc_icon_type_icons social_item_type_icons"
                  >
                    <span
                      className="social_icon social_icon_youtube"
                      style={{}}
                    >
                      <span className="icon-youtube" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.marianretreatcentre.org"
                    className="social_item social_item_style_icons sc_icon_type_icons social_item_type_icons"
                  >
                    <span className="social_icon social_icon_globe" style={{}}>
                      <span className="icon-globe" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/ShXeek1K2ffFUC9b8"
                    className="social_item social_item_style_icons sc_icon_type_icons social_item_type_icons"
                  >
                    <span className="social_icon social_icon_marker" style={{}}>
                      <span className="icon-marker" />
                    </span>
                  </a>
                </div>{" "}
              </div>
            </div>
            <div className="menu_mobile_widgets_area" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuBarPanel;
