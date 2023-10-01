import Image from 'next/image'
import Link from 'next/link';
import StudentInfo from '/app/StudentInfo';


export default function Home() {
  return (
        <div>
          <StudentInfo />
             
            <h2>Weeks</h2>
            <ul>
              <li>
                <Link href="/week2">
                   Week 2
                </Link>
              </li>
              <li>
                <Link href="/week3">
                  Week 3
                </Link>
              </li>
              <li>
                <Link href="/week4">
                  Week 4
                </Link>
              </li>
            </ul>
        </div>
  )
}
