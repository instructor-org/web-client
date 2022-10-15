import Card from '../card/Card';
import './gallery.css';

export default function Gallery(props) {
  const { content } = props;
  const contentList = content.map(category => {
    return <Card
      key={ category.id }
      data={ category }
    />
  })

  return (
    <div className='gallery-container'>
      { contentList }
    </div>
  )
};
