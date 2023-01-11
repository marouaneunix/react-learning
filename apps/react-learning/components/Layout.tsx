import { Footer, HeaderResponsive as Header } from '@yakinsoft/common-ui'
import { useRouter } from 'next/router'

export default function Layout({children}) {
  const router = useRouter();
  const links = [
    {
      "link": "/react-learning",
      "label": "reactJs"
    },
    {
      "link": "/pricing",
      "label": "Pricing"
    },
    {
      "link": "/learn",
      "label": "Learn"
    },
    {
      "link": "/community",
      "label": "Community"
    }
  ]
  return (
    <>
      <Header links={links} activeLink={router.pathname}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}