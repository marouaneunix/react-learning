import { Sidebar } from '@yakinsoft/common-ui'

export default function Layout({children}) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  )
}