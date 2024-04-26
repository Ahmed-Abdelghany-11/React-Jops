import Hero from '../components/Hero';
import ViewAllJobs from '../components/ViewAllJobs';
import NavbarMain from '../components/NavbarMain';
import JobListings from '../components/JobListings';

const Main = () => {
  return (
    <>
      <NavbarMain />
      <Hero />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default Main