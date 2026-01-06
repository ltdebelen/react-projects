const FooterComponent = ({
  year,
  companyName,
}: {
  year: number;
  companyName: string;
}) => {
  return (
    <>
      <footer className='w-full bg-gray-800 text-white py-4 flex justify-center'>
        <p className='text-sm'>
          &copy; {year} {companyName}. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
