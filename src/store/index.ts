import { createStore } from 'vuex'
import {
  store as permission,
  PermissionStore,
  PermissionState,
} from '@/store/modules/permission'
import { store as user, UserState, UserStore } from '@/store/modules/user'
import getters from './getters'

export interface RootState {
  permission: PermissionState
  user: UserState
}

export type Store = PermissionStore<Pick<RootState, 'permission'>> &
  UserStore<Pick<RootState, 'user'>>

export const store = createStore<RootState>({
  modules: {
    permission,
    user,
  },
  getters,
})

export function useStore(): Store {
  return store as Store
}
