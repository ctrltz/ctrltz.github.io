// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-we-re-live-created-a-website-to-keep-track-of-my-projects-and-share-random-thoughts-it-s-going-to-take-a-while-until-i-add-the-actual-content-though",
          title: 'We’re live! Created a website to keep track of my projects and share...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-we-alina-studenova-mina-jamshidi-idaji-and-i-prepared-the-first-release-of-the-meegsim-toolbox-it-provides-building-blocks-for-simulating-oscillatory-activity-and-connectivity-in-m-eeg-with-a-nice-syntax-on-top-feel-free-to-check-it-out-and-get-in-touch-if-you-have-any-questions-or-feedback",
          title: 'Happy to share that we (Alina Studenova, Mina Jamshidi Idaji and I) prepared...',
          description: "",
          section: "News",},{id: "projects-meegsim",
          title: 'MEEGsim',
          description: "Building blocks (waveforms, SNR, connectivity) for M/EEG simulations with MNE-Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/meegsim/";
            },},{id: "projects-pubtrends",
          title: 'PubTrends',
          description: "Interactive tool for exploring the scientific literature and related research topics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pubtrends/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/willenjoy.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%70%72%61%6C%6F%76@%63%62%73.%6D%70%67.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ctrltz", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UL_9i7kAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
