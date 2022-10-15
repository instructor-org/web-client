import './header.css';

export default function Header(props) {
  const { title } = props;
  return (
    <div className='header-container'>
      <h1 className='header-title'>{ title }</h1>
    </div>
  )
};
