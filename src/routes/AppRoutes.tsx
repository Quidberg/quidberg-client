export const PRF = "";
export const ADMIN_PRF = `${PRF}/adminx`;

export const AppRoutes = {
  statistics: {
    analysis: `${PRF}/oracle`,
    registration: {
      setup: `${PRF}/oracle/registration`,
      summary: `${PRF}/oracle/registration/summary`,
    },
  },
  landingPage: {
    index: `${PRF}/`,
  },
  dashboard: {
    index: `${PRF}/my-learning`,
    admin: `${PRF}/adminx`,
  },
  classesAndResources: {
    // index: `${PRF}/classes`,
    learning: `${PRF}/explore-learning`,
    tutorials: `${PRF}/tutorials`,
    solutions: `${PRF}/solutions`,
    classes: `${PRF}/classes`,
    resources: `${PRF}/resources`,
  },
  examinationSimulator: {
    index: `${PRF}/examination-simulator`,
  },
  consultancy: {
    index: `${PRF}/consultancy`,
  },

  schoolNews: {
    index: `${PRF}/schoolNews`,
  },
  subscription: {
    index: `${PRF}/subscription`,
  },
  pricing: {
    index: `${PRF}/pricing`,
  },
  settings: {
    index: `${PRF}/settings`,
  },
  authentication: {
    signin: `${PRF}/signin`,
    login: `${PRF}/login`,
    signup: `${PRF}/signup`,
    adminSignIn: `${PRF}/adminx-signin`,
  },
};

export const AdminAppRoutes = {
  dashboard: {
    index: ADMIN_PRF,
  },
  learning: {
    // index: `${PRF}/classes`,
    index: `${ADMIN_PRF}/learning`,
    create: `${ADMIN_PRF}/learning/create`,
    edit: `${ADMIN_PRF}/learning/edit`,
  },
  oracle: {
    // index: `${PRF}/classes`,
    index: `${ADMIN_PRF}/oracle`,
  },
};
