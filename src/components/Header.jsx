import profile from '../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between p-5  border-b-2 max-w-7xl mx-auto'>
      <h1 className="text-4xl font-bold ">knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
