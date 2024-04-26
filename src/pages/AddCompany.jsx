import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const Addadress = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setadressName] = useState('');
  const [Description, setcompanyDescription] = useState('');
  const [industry, setindustryDescription] = useState('');
  const [adress, setadressPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success('Job Added Successfully');

    return navigate('/jobs');
  };

  return (
    <>
        <Navbar />
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
          <h2 className='text-3xl text-center font-semibold mb-6'>Add Company</h2>
            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                 Description
              </label>
              <textarea
                id='description'
                name='adescription'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='adress'
                className='block text-gray-700 font-bold mb-2'
              >
                Industry
              </label>
              <input
                type='text'
                id='industry'
                name='industry'
                className='border rounded w-full py-2 px-3'
                placeholder='industry'
                value={industry}
                onChange={(e) => setindustry(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='adress'
                className='block text-gray-700 font-bold mb-2'
              >
                Adress
              </label>
              <input
                type='text'
                id='adress'
                name='adress'
                className='border rounded w-full py-2 px-3'
                placeholder='adress'
                value={adress}
                onChange={(e) => setadress(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='numberofemployees'
                className='block text-gray-700 font-bold mb-2'
              >
                number of employees
              </label>
              <input
                type='number'
                id='numberofemployees'
                name='numberofemployees'
                className='border rounded w-full py-2 px-3'
                placeholder='numberofemployees'
                value={companyName}
                onChange={(e) => setnumberofemployee(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add company
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};
export default Addadress;
