const defaultState = {
    currency: localStorage.getItem('currency') || 'gel',
    locale: localStorage.getItem('locale')?.split(',') || ['ka', 'en', 'ru'],
};

export function reducer(state = defaultState, action) {
    switch (action.type) {

        case 'setCurrency':
            localStorage.setItem('currency', action.payload);
            return { ...state, currency: action.payload }

        case 'setLocale':
            localStorage.setItem('currentLocale', action.payload[0]);
            localStorage.setItem('locale', action.payload);
            return { ...state, locale: action.payload }

        default:
            return state;
    }

};