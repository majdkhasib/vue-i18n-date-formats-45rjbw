import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-browser'

const messages = {
  US: {
    message: {
      hello: 'hello world'
    }
  },
  DE: {
    message: {
      hello: 'Hallo Welt'
    }
  }
}

const i18n = createI18n({
  locale: 'US',
  messages,
  datetimeFormats: {
    US: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    },
    DE: {
      short: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
  }
})

export default i18n
