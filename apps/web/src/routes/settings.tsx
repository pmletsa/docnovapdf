import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { DashboardLayout } from '~/components/DashboardLayout'

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <header className="bg-white border-b border-gray-100 px-8 py-4">
          <h1 className="text-xl font-bold text-gray-900">Settings</h1>
        </header>

        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-3xl">
            {/* Tabs */}
            <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit">
              {['profile', 'security', 'notifications', 'billing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer capitalize ${
                    activeTab === tab 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h2 className="font-bold text-gray-900 mb-6">Profile Information</h2>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#e53935] to-[#ff8a80] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      A
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-[#e53935] text-white rounded-lg text-sm font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer">
                        Change Photo
                      </button>
                      <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Alex"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Johnson"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="alex.johnson@example.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        defaultValue="Acme Inc."
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h2 className="font-bold text-gray-900 mb-6">Change Password</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="px-6 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h2 className="font-bold text-gray-900 mb-4">Two-Factor Authentication</h2>
                  <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account.</p>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                    Enable 2FA
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Email notifications', description: 'Receive email updates about your account activity' },
                    { label: 'Processing complete', description: 'Get notified when your documents are processed' },
                    { label: 'Weekly digest', description: 'Receive a weekly summary of your activity' },
                    { label: 'Marketing emails', description: 'Receive tips, product updates and offers' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={index < 2} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#e53935]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-bold text-gray-900">Current Plan</h2>
                      <p className="text-sm text-gray-500">You are currently on the Pro plan</p>
                    </div>
                    <span className="px-3 py-1 bg-[#e53935] text-white text-sm font-medium rounded-full">Pro</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/pricing" className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                      Change Plan
                    </Link>
                    <button className="px-4 py-2 text-[#e53935] text-sm font-medium hover:underline cursor-pointer">
                      Cancel Subscription
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h2 className="font-bold text-gray-900 mb-4">Payment Method</h2>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                    <button className="ml-auto text-sm text-[#e53935] font-medium hover:underline cursor-pointer">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}
