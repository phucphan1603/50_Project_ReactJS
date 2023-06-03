import { Link, useLocation } from "react-router-dom";
import { ExpandingCard } from "../pages/1.Expading Cards/ExpandingCard";
import { RandomChoicePicker } from "../pages/13.Random Choice Picker/RandomChoicePicker";
import { ProgressSteps } from "../pages/2.Progress Steps/ProgressSteps";
import { RotatingNavigation } from "../pages/3.Rotating Navigation/RotatingNavigation";
import { HiddenSearchWidget } from "../pages/4.Hidden Search Widget/HiddenSearchWidget";
import { BlurryLoading } from "../pages/5.Blurry Loading/BlurryLoading";
import { ScrollAnimation } from "../pages/6.Scroll Animation/ScrollAnimation";
import { SplitLadingPage } from "../pages/7.Split Lading Page/SplitLadingPage";
import { FormWaveAnimation } from "../pages/8.Form Wave Animation/FormWaveAnimation";
import { SoundBoard } from "../pages/9.Sound Board/SoundBoard";
import { DadJokes } from "../pages/10.Dad Jokes/DadJokes";
import { EventKeyCodes } from "../pages/11.Event KeyCodes/EventKeyCodes";
import { FAQCollapse } from "../pages/12.FAQ Collapse/FAQCollapse";
import { AnimatedNavigation } from "../pages/14.Animated Navigation/AnimatedNavigation";
import { IncrementCounter } from "../pages/15.Increment Counter/IncrementCounter";
import { DrinkWater } from "../pages/16.Drink Water/DrinkWater";
import { MovieApp } from "../pages/17.Movie App/MovieApp";
import { BackgroundSlider } from "../pages/18.Background Slider/BackgroundSlider";
import { ThemeClock } from "../pages/19.Theme Clock/ThemeClock";
import { ButtonRippleEffect } from "../pages/20.Button Ripple Effect/ButtonRippleEffect";
import { DragNDrop } from "../pages/21.Drag N Drop/DragNDrop";
import { DrawingApp } from "../pages/22.Drawing App/DrawingApp";
import { KineticCSSLoader } from "../pages/23.Kinetic CSS Loader/KineticCSSLoader";
import { ContentPlaceholder } from "../pages/24.Content Placeholder/ContentPlaceholder";
import { StickyNavbar } from "../pages/25.Sticky Navbar/StickyNavbar";
import { DoubleVerticalSlider } from "../pages/26.Double Vertical Slider/DoubleVerticalSlider";
import { ToastNotification } from "../pages/27.Toast Notification/ToastNotification";
import { GitHubProfiles } from "../pages/28.GitHub Profiles/GitHubProfiles";
import { DoubleHeartClick } from "../pages/29.Double Heart Click/DoubleHeartClick";
import { AutoTextEffect } from "../pages/30.Auto Text Effect/AutoTextEffect";
import { PasswordGenerator } from "../pages/31.Password Generator/PasswordGenerator";
import { FastCheckboxes } from "../pages/32.Good, Cheap, Fast Checkboxes/FastCheckboxes";
import { NotesApp } from "../pages/33.Notes App/NotesApp";
import { AnimatedCountdown } from "../pages/34.Animated Countdown/AnimatedCountdown";
import { ImageCarousel } from "../pages/35.Image Carousel/ImageCarousel";
import { Hoverboard } from "../pages/36.Hoverboard/Hoverboard";
import { Pokedex } from "../pages/37.Pokedex/Pokedex";
import { MobileTabNavigation } from "../pages/38.Mobile Tab Navigation/MobileTabNavigation";
import { PasswordStrengthBackground } from "../pages/39.Password Strength Background/PasswordStrengthBackground";
import { BackgroundBoxes } from "../pages/40.3D Background Boxes/BackgroundBoxes";
import { VerifyAccountUI } from "../pages/41.Verify Account UI/VerifyAccountUI";
import { LiveUserFilter } from "../pages/42.Live User Filter/LiveUserFilter";
import { FeedbackUIDesign } from "../pages/43.Feedback UI Design/FeedbackUIDesign";
import { CustomRangeSlider } from "../pages/44.Custom Range Slider/CustomRangeSlider";
import { NetflixNavigation } from "../pages/45.Netflix Navigation/NetflixNavigation";
import { TestimonialBoxSwitcher } from "../pages/47Testimonial Box Switcher/TestimonialBoxSwitcher";
import { QuizApp } from "../pages/46.Quiz App/QuizApp";
import { RandomImageFeed } from "../pages/48.Random Image Feed/RandomImageFeed";
import { TodoList } from "../pages/49.Todo List/TodoList";
import { SillyGame } from "../pages/50.Silly Game/SillyGame";

export const menuPath = {
  expandingCards: "expanding-cards",
  progressSteps: "progress-steps",
  rotatingNavigation: "rotating-navigation",
  hiddenSearch: "hidden-search",
  blurringLoading: "blurring-loading",
  scrollAnimation: "scroll-animation",
  splitLadingPage: "split-lading-page",
  FormWaveAnimation: "form-wave-animation",
  SoundBoard: "sound-board",
  DadJokes: "dad-jokes",
  EventKeyCodes: "event-key-codes",
  FAQCollapse: "FAQ-collapse",
  RandomChoicePicker: "random-choice-picker",
  AnimatedNavigation: "animated-navigation",
  IncrementCounter: "increment-counter",
  DrinkWater: "drink-water",
  MovieApp: "movie-app",
  BackgroundSlider: "background-slider",
  ThemeClock: "theme-clock",
  ButtonRippleEffect: "button-ripple-effect",
  DragNDrop: "drag-n-drop",
  DrawingApp: "drawing-app",
  KineticCssLoader: "kinetic-css-loader",
  ContentPlaceholder: "content-placeholder",
  StickyNavbar: "sticky-navbar",
  DoubleVerticalSlider: "double-vertical-slider",
  ToastNotification: "toast-notification",
  GithubProfiles: "github-profiles",
  DoubleHeartClick: "double-heart-click",
  AutoTextEffect: "auto-text-effect",
  PasswordGenerator: "password-generator",
  FastCheckboxes: "fast-checkboxes",
  NotesApp: "notes-app",
  AnimatedCountdown: "animated-countdown",
  ImageCarousel: "image-carousel",
  Hoverboard: "hoverboard",
  Pokedex: "pokedex",
  MobileTabNavigation: "mobile-tab-navigation",
  PasswordStrengthBackground: "password-strength-background",
  BackgroundBoxes: "3d-background-box",
  VerifyAccountUi: "verify-account-ui",
  LiveUserFilter: "live-user-filter",
  FeedbackUiDesign: "feedback-ui-design",
  CustomRangeSlider: "custom-range-slider",
  NetflixNavigation: "netflix-navigation",
  QuizApp: "quiz-app",
  TestimonialBoxSwitcher: "testimonial-box-switcher",
  RandomImageFeed: "random-image-feed",
  TodoList: "todo-list",
  SillyGame: "silly-game",
};

export const menus = [
  {
    id: 1,
    path: menuPath.expandingCards,
    component: <ExpandingCard />,
  },
  {
    id: 2,
    path: menuPath.progressSteps,
    component: <ProgressSteps />,
  },
  {
    id: 3,
    path: menuPath.rotatingNavigation,
    component: <RotatingNavigation />,
  },
  {
    id: 4,
    path: menuPath.hiddenSearch,
    component: <HiddenSearchWidget />,
  },
  {
    id: 5,
    path: menuPath.blurringLoading,
    component: <BlurryLoading />,
  },
  {
    id: 6,
    path: menuPath.scrollAnimation,
    component: <ScrollAnimation />,
  },
  {
    id: 7,
    path: menuPath.splitLadingPage,
    component: <SplitLadingPage />,
  },
  {
    id: 8,
    path: menuPath.FormWaveAnimation,
    component: <FormWaveAnimation />,
  },
  {
    id: 9,
    path: menuPath.SoundBoard,
    component: <SoundBoard />,
  },
  {
    id: 10,
    path: menuPath.DadJokes,
    component: <DadJokes />,
  },
  {
    id: 11,
    path: menuPath.EventKeyCodes,
    component: <EventKeyCodes />,
  },
  {
    id: 12,
    path: menuPath.FAQCollapse,
    component: <FAQCollapse />,
  },
  {
    id: 13,
    path: menuPath.RandomChoicePicker,
    component: <RandomChoicePicker />,
  },
  {
    id: 14,
    path: menuPath.AnimatedNavigation,
    component: <AnimatedNavigation />,
  },
  {
    id: 15,
    path: menuPath.IncrementCounter,
    component: <IncrementCounter />,
  },
  { id: 16, path: menuPath.DrinkWater, component: <DrinkWater /> },
  { id: 17, path: menuPath.MovieApp, component: <MovieApp /> },
  { id: 18, path: menuPath.BackgroundSlider, component: <BackgroundSlider /> },
  { id: 19, path: menuPath.ThemeClock, component: <ThemeClock /> },
  {
    id: 20,
    path: menuPath.ButtonRippleEffect,
    component: <ButtonRippleEffect />,
  },
  { id: 21, path: menuPath.DragNDrop, component: <DragNDrop /> },
  { id: 22, path: menuPath.DrawingApp, component: <DrawingApp /> },
  { id: 23, path: menuPath.KineticCssLoader, component: <KineticCSSLoader /> },
  {
    id: 24,
    path: menuPath.ContentPlaceholder,
    component: <ContentPlaceholder />,
  },
  { id: 25, path: menuPath.StickyNavbar, component: <StickyNavbar /> },
  {
    id: 26,
    path: menuPath.DoubleVerticalSlider,
    component: <DoubleVerticalSlider />,
  },
  {
    id: 27,
    path: menuPath.ToastNotification,
    component: <ToastNotification />,
  },
  { id: 28, path: menuPath.GithubProfiles, component: <GitHubProfiles /> },
  { id: 29, path: menuPath.DoubleHeartClick, component: <DoubleHeartClick /> },
  { id: 30, path: menuPath.AutoTextEffect, component: <AutoTextEffect /> },
  {
    id: 31,
    path: menuPath.PasswordGenerator,
    component: <PasswordGenerator />,
  },
  { id: 32, path: menuPath.FastCheckboxes, component: <FastCheckboxes /> },
  { id: 33, path: menuPath.NotesApp, component: <NotesApp /> },
  {
    id: 34,
    path: menuPath.AnimatedCountdown,
    component: <AnimatedCountdown />,
  },
  { id: 35, path: menuPath.ImageCarousel, component: <ImageCarousel /> },
  { id: 36, path: menuPath.Hoverboard, component: <Hoverboard /> },
  { id: 37, path: menuPath.Pokedex, component: <Pokedex /> },
  {
    id: 38,
    path: menuPath.MobileTabNavigation,
    component: <MobileTabNavigation />,
  },
  {
    id: 39,
    path: menuPath.PasswordStrengthBackground,
    component: <PasswordStrengthBackground />,
  },
  { id: 40, path: menuPath.BackgroundBoxes, component: <BackgroundBoxes /> },
  { id: 41, path: menuPath.VerifyAccountUi, component: <VerifyAccountUI /> },
  { id: 42, path: menuPath.LiveUserFilter, component: <LiveUserFilter /> },
  { id: 43, path: menuPath.FeedbackUiDesign, component: <FeedbackUIDesign /> },
  {
    id: 44,
    path: menuPath.CustomRangeSlider,
    component: <CustomRangeSlider />,
  },
  {
    id: 45,
    path: menuPath.NetflixNavigation,
    component: <NetflixNavigation />,
  },
  { id: 46, path: menuPath.QuizApp, component: <QuizApp /> },
  {
    id: 47,
    path: menuPath.TestimonialBoxSwitcher,
    component: <TestimonialBoxSwitcher />,
  },
  {
    id: 48,
    path: menuPath.RandomImageFeed,
    component: <RandomImageFeed />,
  },
  { id: 49, path: menuPath.TodoList, component: <TodoList /> },
  { id: 50, path: menuPath.SillyGame, component: <SillyGame /> },
];

export const Menu = () => {
  const location = useLocation();
  return (
    <div className="right-main">
      <h1 className="logo"><span>50</span> Project</h1>
      <div className="menu">
        {menus.map((menu) => {
          return (
            <Link
              to={menu.path}
              key={menu.id}
              className={`menu-item ${
                location?.pathname.includes(menu.path) ? "active" : ""
              }`}
            >
              {menu.id}. {menu?.path?.split("-").join(" ")}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
