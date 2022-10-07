import { Header } from '@components/header';

const Layout = ({children}) => {
    return (
        <div className='flex flex-col justify-center'>
            <Header/>
            <div className='container-fluid pt-[70px]'>
                <div className='content px-4'>{children}</div>          
            </div>
        </div>
  )
}

export default Layout