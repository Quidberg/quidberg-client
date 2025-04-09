export const PRF = "";

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
    index: `${PRF}/dashboard`,
    admin: `${PRF}/adminx`,
  },
  classesAndResources: {
    // index: `${PRF}/classes`,
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
    adminSignIn: `${PRF}/adminx-signin`
  },
};
