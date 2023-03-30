

import './App.css';
import Routing from './Routes/index'
import { QueryClient, QueryClientProvider} from 'react-query'
import Todo from './reactQuerry/index'
//import PostTodo from './reactQuerry/postData'


function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    
     {/* <Routing /> */}
     <QueryClientProvider client={queryClient}>
     <Routing />
     </QueryClientProvider>
     
    </div>
  );
}

export default App;
