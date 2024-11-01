import Rating from './Rating'
import OpenQuestion from './OpenQuestion'
import Practicality from './Practicality'
import Citation from './Citation'


export function Feedback({ id, data, user }){

  const Feedback_id = () => {
    switch (id) {
      case 'openQues':
        return <OpenQuestion />
      case 'rating':
        return <Rating listings={data}/>
      case 'practicality':
        return <Practicality />
      case 'citation':
        return <Citation user={user}/>
    }
  }

  return (
    Feedback_id()
  )
}

export default Feedback