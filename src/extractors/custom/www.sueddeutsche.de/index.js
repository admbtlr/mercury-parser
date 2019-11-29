export const WwwSueddeutscheDeExtractor = {
  domain: 'www.sueddeutsche.de',

  title: {
    selectors: [['meta[name="og:title"]', 'value']],
  },

  author: {
    selectors: [['meta[name="author"]', 'value']],
  },

  date_published: {
    selectors: ['.sz-article-header__time'],
  },

  dek: {
    selectors: [['meta[name="description"]', 'value']],
  },

  lead_image_url: {
    selectors: [['meta[name="og:image"]', 'value']],
  },

  content: {
    selectors: ['.sz-article-body', '.sz-article__body'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [
      '.sz-article__sharing-bar',
      '.sz-article-header__time',
      '.pay-furtherreading',
      '.pay-furtherreading-headline',
      '.pay-furtherreading-body',
    ],
  },
};
