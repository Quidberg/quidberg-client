export const PRF = "";

export const AppRoutes = {
  statistics: {
    analysis: `${PRF}/statistics`,
    registration: {
      setup: `${PRF}/statistics/registration`,
      summary: `${PRF}/statistics/registration/summary`,
    },
  },
  landingPage:{
    index: `${PRF}/`
  },
  dashboard: {
    index: `${PRF}/dashboard`,
  },
  classesAndResources: {
    // index: `${PRF}/classes`,
    classes: `${PRF}/classes`,
    resources: `${PRF}/resources`,
  },
  examination:{
    index: `${PRF}/examination`,

  },
  consultancy:{
    index: `${PRF}/consultancy`,
  },

  schoolNews: {
    index: `${PRF}/schoolNews`,
  },
  subscription: {
    index: `${PRF}/subscription`,
  },
  pricing: {
    index: `${PRF}/pricing`
  },
  settings: {
    index: `${PRF}/settings`,
  },
  authentication: {
    signin: `${PRF}/signin`,
    login: `${PRF}/login`,
    signup: `${PRF}/signup`,

  }
};
