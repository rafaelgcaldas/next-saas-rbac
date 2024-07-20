import { api } from './api-client'

interface GetProjectsResponse {
  projetcs: {
    description: string
    slug: string
    id: string
    name: string
    ownerId: string
    avatarUrl: string | null
    organizationId: string
    createdAt: string
    owner: {
      id: string
      name: string | null
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<GetProjectsResponse>()

  return result
}
