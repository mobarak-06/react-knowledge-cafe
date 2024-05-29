import PropTypes from 'prop-types'
const BoiMark = ({boiMark}) => {
    console.log(boiMark);
    const {title} = boiMark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
          <h3 className='text-2xl'>{title}</h3>  
        </div>
    );
};

BoiMark.propTypes = {
    boiMark: PropTypes.object.isRequired
}
export default BoiMark;