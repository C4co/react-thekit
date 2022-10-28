import { DocPage } from '@/templates'
import { Navbar, NavbarDropdown } from '@/components'
import Link from 'next/link'

function Brand() {
  return (
    <Link href="/">
      <span className="h-full bg-gray-800 text-white flex items-center px-3 rounded">
        TheKit
      </span>
    </Link>
  )
}

export default function NavbarPage({ doc }) {
  return (
    <DocPage title="Navbar" markdown={doc}>
      <p> Navbar is there ☝️ </p>
      <div>
        <Navbar brand={<Brand />}>
          <NavbarDropdown label="Dropdown 1">
            <Link href="/">
              <span> Dropdown item 1</span>
            </Link>

            <Link href="/">
              <span> Dropdown item 2</span>
            </Link>
          </NavbarDropdown>

          <NavbarDropdown label="Dropdown 2">
            <Link href="/">
              <span> Dropdown item 1</span>
            </Link>

            <Link href="/">
              <span> Dropdown item 2</span>
            </Link>
          </NavbarDropdown>

          <Link href="/">
            <span>Internal item</span>
          </Link>

          <a target="_blank" rel="noreferrer" href="https://dev.to">
            External item
          </a>
        </Navbar>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Navbar/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
