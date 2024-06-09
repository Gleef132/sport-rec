interface Stage {
  TITLE: string;
  TEXT: string;
  ERROR_TEXT_INCORRECT: string;
  ERROR_TEXT_EMPTY: string;
  BUTTON_SIGN_IN: string;
  BUTTON_SIGN_UP?: string;
  BUTTON_HAVE_ACCOUNT?: string;
}

export interface Stages {
  [key: string]: Stage;
}

export const SIGN_IN_CONSTANTS: Stages = {
  stageOne: {
    TITLE: 'Вход на платформу',
    TEXT: 'Код будет автоматически отправлен на Ваш номер телефона с помощью SMS',
    ERROR_TEXT_INCORRECT: 'Номер телефона введен неверно',
    ERROR_TEXT_EMPTY: 'Это поле обязательное',
    BUTTON_SIGN_IN: 'Получить код',
    BUTTON_SIGN_UP: 'Зарегистрироваться',
    BUTTON_HAVE_ACCOUNT: 'Нет аккаунта?'
  },
  stageTwo: {
    TITLE: 'Подтвердите номер телефона',
    TEXT: 'Отправим сообщение с 6-ти значным кодом на номер',
    ERROR_TEXT_INCORRECT: 'Введен неверный код',
    ERROR_TEXT_EMPTY: 'Это поле обязательное',
    BUTTON_SIGN_IN: 'Подтвердить'
  }
};

export const SIGN_UP_CONSTANTS: Stages = {
  stageOne: {
    TITLE: 'Регистрация ',
    TEXT: 'Код будет автоматически отправлен на Ваш номер телефона с помощью SMS',
    ERROR_TEXT_INCORRECT: 'Номер телефона введен неверно',
    ERROR_TEXT_EMPTY: 'Это поле обязательное',
    BUTTON_SIGN_IN: 'Получить код',
    BUTTON_SIGN_UP: 'Войти',
    BUTTON_HAVE_ACCOUNT: 'Уже зарегистированы?'
  },
  stageTwo: {
    TITLE: 'Подтвердите номер телефона',
    TEXT: 'Отправим сообщение с 6-ти значным кодом на номер',
    ERROR_TEXT_INCORRECT: 'Введен неверный код',
    ERROR_TEXT_EMPTY: 'Это поле обязательное',
    BUTTON_SIGN_IN: 'Подтвердить'
  }
};
