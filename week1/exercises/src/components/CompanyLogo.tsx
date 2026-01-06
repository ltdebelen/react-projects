const CompanyLogo = ({
  logoUrl,
  altText,
}: {
  logoUrl: string;
  altText: string;
}) => {
  return (
    <>
      <img src={logoUrl} alt={altText} className='h-12 w-12' />
    </>
  );
};

export default CompanyLogo;
