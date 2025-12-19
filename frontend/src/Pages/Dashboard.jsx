import React from 'react'
import Layout from '../Layout/Layout.jsx'
function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gray-100">
  {/* Header */}
  <header className="bg-pink-700 text-green-500 text-2xl font-bold p-4 text-center">
    This Is My Dashboard
  </header>

  {/* Body */}
  <div className="flex flex-1 flex-col md:flex-row gap-4 p-4">
    {/* Sidebar */}
    <aside className="bg-blue-200 text-blue-700 p-4 rounded-lg md:w-64 flex-shrink-0">
      This Is My Sidebar
    </aside>

    {/* Main content + Article */}
    <div className="flex-1 flex flex-col gap-4">
      <section className="bg-red-200 text-red-700 p-4 rounded-lg flex-1">
        This Is My Main Content
      </section>
      <article className="bg-yellow-200 text-yellow-800 p-4 rounded-lg flex-1">
        This Is My Article
      </article>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Dashboard