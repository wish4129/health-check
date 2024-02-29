/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Rrlp4BXZKgv
 */
import { CardContent, Card } from "@/components/ui/card";
import Image from 'next/image';
import es from '../component/examScheduler.ico';
import et from '../component/enterpriseTimetabler.png';
import swp from '../component/swp.ico';
import splusapi from '../component/splus.png';
import esapi from '../component/examScheduler.ico';
import swpapi from '../component/swp.ico';
import splusadaptor from '../component/splus.png';
import { AppProps } from 'next/app';
export default function health({ product, serverHealth, databaseHealth, title, url, server1, database1, lastChecked, count }: { product: string, serverHealth: string, databaseHealth: string, title: string, url: string, server1: string, database1: string, lastChecked: string, count: string }) {
  let serverColor = "green";
  let databaseColor = "green";
  switch (serverHealth) {
    case "healthy":
      serverColor = "green";
      break;
    case "warning":
      serverColor = "yellow";
      break;
    case "alert":
      serverColor = "red";
      break;
  }
  switch (databaseHealth) {
    case "healthy":
      databaseColor = "green";
      break;
    case "warning":
      databaseColor = "yellow";
      break;
    case "alert":
      databaseColor = "red";
      break;
  }
  const sColor = `w-4 h-4 text-${serverColor}-500`;
  const dColor = `w-4 h-4 text-${databaseColor}-500`;
  let issueColor = "w-4 h-4 text-green-500";
  if (+count < 3) {
    issueColor = `w-4 h-4 text-green-500`;
  } else if (+count > 2 && +count < 6) {
    issueColor = `w-4 h-4 text-yellow-500`;
  } else {
    issueColor = `w-4 h-4 text-red-500`;
  }
  return (
    <div>
      <div>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                {product == "es" && <Image src={es} alt="Exam Scheduler" width="20" height="20" />}
                {product == "et" && <Image src={et} alt="Enterprise Timetabler" width="20" height="20" />}
                {product == "swp" && <Image src={swp} alt="Staff Workload Planner" width="20" height="20" />}
                {product == "splusapi" && <Image src={splusapi} alt="Splus API" width="20" height="20" />}
                {product == "esapi" && <Image src={esapi} alt="Exams API" width="20" height="20" />}
                {product == "swpapi" && <Image src={swpapi} alt="SWP API" width="20" height="20" />}
                {product == "splusadaptor" && <Image src={splusadaptor} alt="Splus Data Adaptor" width="20" height="20" />}
                <div>
                  <h3 className="text-lg font-medium leading-none">{title}</h3>
                  <p className="text-sm leading-none text-gray-500">{url}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MailOpenIcon className="w-8 h-8" />
                <div>
                  <h3 className="text-lg font-medium leading-none">Notifications</h3>
                  <p className="text-sm leading-none text-gray-500">Email, SMS</p>
                </div>
              </div>
            </div>
            <div />
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {serverColor == "green" && <CheckCircleIcon className={sColor} />}
                {serverColor == "yellow" && <AlertTriangleIcon className={sColor} />}
                {serverColor == "red" && <AlertTriangleIcon className={sColor} />}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <ServerIcon className="w-4 h-4" />
                    <span>{server1}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {databaseColor == "green" && <CheckCircleIcon className={dColor} />}
                {databaseColor == "yellow" && <AlertTriangleIcon className={dColor} />}
                {databaseColor == "red" && <AlertTriangleIcon className={dColor} />}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <DatabaseIcon className="w-4 h-4" />
                    <span>{database1}</span>
                  </div>
                </div>
              </div>
            </div>
            <div />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <ClockIcon className="w-4 h-4" />
                <span>{lastChecked} minute ago</span>
              </div>
              <div className="flex items-center space-x-2 justify-self-end">
                {issueColor == "w-4 h-4 text-green-500" && <CheckCircleIcon className={issueColor} />}
                {issueColor == "w-4 h-4 text-yellow-500" && <AlertTriangleIcon className={issueColor} />}
                {issueColor == "w-4 h-4 text-red-500" && <AlertTriangleIcon className={issueColor} />}
                <span>{count} issues found</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function MailOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function ServerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function AlertTriangleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function XCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}


function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
