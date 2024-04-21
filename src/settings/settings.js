/**
 * Description
 *
 * @type {{ contacts: {}; filter: ''; }}
 * @example const INITIAL_STATE_APP = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
 *
 */
export const INITIAL_STATE_APP = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

/**
 * Description
 *
 * @type {string}
 * @example const LOCAL_STORAGE_KEY = 'contacts';
 *
 */
export const LOCAL_STORAGE_KEY = 'contacts';

/**
 * Description
 *
 * @type {{ name: string; number: string; }}
 * @example const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};
 *
 */
export const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};
