import { useHistory, useLocation } from 'react-router-dom'
import { mergeAll } from 'ramda'

export const useRouter = () => mergeAll([useHistory(), useLocation()])
