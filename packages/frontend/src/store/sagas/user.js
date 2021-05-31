import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import { updateProfileFailure, updateProfileSuccess, userActions } from '../actions/user'

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data

    const profile = Object.assign(
      {
        name,
        email,
        avatar_id
      },
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile)

    toast.success('Perfil atualizado com sucesso')

    yield put(updateProfileSuccess(response.data))
  } catch (error) {
    console.log(error);
    toast.error('Erro ao atualizar perfil. Verifique seus dados')
    yield put(updateProfileFailure())
  }
}

export default all([takeLatest(userActions.requestUpdateProfile, updateProfile)])
