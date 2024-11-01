import './App.css'
import Feedback from './components/Feedback'
import rating_text from './data/rating.json'


export function App(){

  return (
    
    <div className='frame pd-frame bd-rd-frame-20 fh quesps'>

      <h1 className='mb-20 h1-txt'>Feedback about Your Experience with QNAP </h1>

      {/* 
        id = [citation, rating, openQues, practicality]
        user = user name
        data = [{Questions list}]        
      */}

      <Feedback 
        id="citation"
        user="Justin"
      />

      <Feedback
        id="rating"
        data={rating_text}
      />

      <Feedback
        id="openQues"
        data={{}}
      />
    </div>
  )
}

export default App