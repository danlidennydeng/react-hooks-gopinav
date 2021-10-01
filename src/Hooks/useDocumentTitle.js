import { useEffect } from 'react'

function useDocumentTitle(count) {

  useEffect(() => {
    document.title = `Title Count ${count}`
  }, [count])

}

export default useDocumentTitle