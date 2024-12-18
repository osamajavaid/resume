import Link from 'next/link';

const Download = ({ icon }) => {
  return (
    <>
      <Link
        href='https://drive.google.com/file/d/1N2y-ITRCGs6hhkR8wvOoAVTCW2GeMy7W/view?usp=sharing'
        target='_blank'
        className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'
      >
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;

