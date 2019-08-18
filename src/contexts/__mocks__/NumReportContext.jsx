import context from '../contexts/testHelpers'

export const MyContext = ({
    Consumer(props) {
      return props.children(context)
    } 
})