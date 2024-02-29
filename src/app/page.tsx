import Image from "next/image";
import Health from '../components/component/health';
import techone from '../components/component/techone.svg';
const title = "text-4xl flex justify-center text-[#FEBD10]"
const subtitle = "text-2xl flex justify-center text-white-500"

export default function Home() {
  return (
    <div>
      <div>
        <Image  style={{float: 'left'}} src={techone} alt="techone" width="300" height="150"/>
        <div className={title}>Health Check</div>
        <div className={subtitle}>Monitor the health of your sites and services. (Refresh every 5 minutes)</div>
      </div>
      <Health product="es" serverHealth="healthy" databaseHealth="healthy" title="Exam Scheduler" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="ESDB" lastChecked="3" count="0" />
      <Health product="et" serverHealth="healthy" databaseHealth="warning" title="Enterprise Timetabler" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="SDB2024B" lastChecked="3" count="3" />
      <Health product="swp" serverHealth="healthy" databaseHealth="healthy" title="Staff Workload Planner" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="SWPDB" lastChecked="3" count="0" />
      <Health product="splusapi" serverHealth="warning" databaseHealth="alert" title="Splus API" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="SDB2024B" lastChecked="3" count="7" />
      <Health product="esapi" serverHealth="alert" databaseHealth="healthy" title="Exams API" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="ESDB" lastChecked="3" count="0" />
      <Health product="swpapi" serverHealth="healthy" databaseHealth="healthy" title="SWP API" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="SWPDB" lastChecked="3" count="1" />
      <Health product="splusadaptor" serverHealth="alert" databaseHealth="alert" title="Splus Data Adaptor" url="https://saas-rel-2024a.onespresso.net" server1="SAAS-REL-2024A" database1="SDB2024B" lastChecked="3" count="2" />
    </div>
  );
}
