import type { Story } from '@ladle/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../src/components/tabs'

export const Default: Story = () => (
  <div style={{ width: 400 }}>
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div style={{ padding: '16px 0' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500 }}>Account Settings</h3>
          <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginTop: 4 }}>
            Manage your account preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div style={{ padding: '16px 0' }}>
          <h3 style={{ fontSize: 16, fontWeight: 500 }}>Password</h3>
          <p style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginTop: 4 }}>
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  </div>
)

export const LineVariant: Story = () => (
  <div style={{ width: 400 }}>
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div style={{ padding: '16px 0' }}>Overview content</div>
      </TabsContent>
      <TabsContent value="analytics">
        <div style={{ padding: '16px 0' }}>Analytics content</div>
      </TabsContent>
      <TabsContent value="reports">
        <div style={{ padding: '16px 0' }}>Reports content</div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{ padding: '16px 0' }}>Notifications content</div>
      </TabsContent>
    </Tabs>
  </div>
)

export const Vertical: Story = () => (
  <div style={{ display: 'flex', gap: 24 }}>
    <Tabs defaultValue="general" orientation="vertical">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <div>General settings content</div>
      </TabsContent>
      <TabsContent value="security">
        <div>Security settings content</div>
      </TabsContent>
      <TabsContent value="integrations">
        <div>Integrations settings content</div>
      </TabsContent>
      <TabsContent value="advanced">
        <div>Advanced settings content</div>
      </TabsContent>
    </Tabs>
  </div>
)

export const WithDisabledTab: Story = () => (
  <div style={{ width: 400 }}>
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div style={{ padding: '16px 0' }}>Active tab content</div>
      </TabsContent>
      <TabsContent value="another">
        <div style={{ padding: '16px 0' }}>Another tab content</div>
      </TabsContent>
    </Tabs>
  </div>
)
