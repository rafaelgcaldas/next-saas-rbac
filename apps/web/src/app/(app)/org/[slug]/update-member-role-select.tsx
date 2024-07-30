'use client'

import type { Role } from '@saas/auth'
import type { ComponentProps } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { updateMemberAction } from './members/actions'

interface UpdatememberRoleSelectProps extends ComponentProps<typeof Select> {
  memberId: string
}
export default function UpdatememberRoleSelect({
  memberId,
  ...props
}: UpdatememberRoleSelectProps) {
  async function updateMemberRole(role: Role) {
    await updateMemberAction(memberId, role)
  }
  return (
    <Select onValueChange={updateMemberRole} {...props}>
      <SelectTrigger className="h-8 w-32">
        <SelectValue />
        <SelectContent>
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="MEMBER">Member</SelectItem>
          <SelectItem value="BILLING">Billing</SelectItem>
        </SelectContent>
      </SelectTrigger>
    </Select>
  )
}
