const initialState = {
  concert: false,
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'ON_CONCERT':
      return {
        concert: true
      };
    case 'OUT_CONCERT':
      return {
        concert: false
      };

    default:
      return state;
  }
}
