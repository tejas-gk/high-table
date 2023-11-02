import { Separator } from '@/components/ui/separator'
import React from 'react'
import { ProfileForm } from './profile-form'

export default function page() {
  return (
      <div className="space-y-6  lg:max-w-2xl">
          <div>
              <h3 className="text-lg font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">
                  This is how others will see you on the site.
              </p>
          </div>
          <Separator />
          <ProfileForm />
      </div>
  )
}
