import { api } from './api-client'

export async function acceptInvite(inviteId: string) {
  console.log(inviteId)
  await api.post(`invites/${inviteId}/accept`)
}
