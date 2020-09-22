import axios from 'axios';

export const setFavorite = (payload) => ({ type: 'SET_FAVORITE', payload });
export const deleteFavorite = (payload) => ({ type: 'DELETE_FAVORITE', payload });
export const loginRequest = (payload) => ({ type: 'LOGIN_REQUEST', payload });
export const logoutRequest = (payload) => ({ type: 'LOGOUT_REQUEST', payload });
export const registerRequest = (payload) => ({ type: 'REGISTER_REQUEST', payload });
export const getVideoSource = (payload) => ({ type: 'GET_VIDEO_SOURCE', payload });
export const setError = (payload) => ({ type: 'SET_ERROR', payload });

export const registerUser = (payload, redirectUrl) => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/sign-up', payload);
    dispatch(registerRequest(data));
    window.location.href = redirectUrl;
  } catch (error) {
    dispatch(setError(error));
  }
};

export const loginUser = ({ email, password }, redirectUrl) => async (dispatch) => {
  try {
    const { data } = await axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    });
    document.cookie = `email=${data.user.email}`;
    document.cookie = `name=${data.user.name}`;
    document.cookie = `id=${data.user.id}`;
    // document.cookie = `token=${data.token}`;

    dispatch(loginRequest(data.user));
    window.location.href = redirectUrl;
  } catch (error) {
    dispatch(setError(error));
  }
};
//
