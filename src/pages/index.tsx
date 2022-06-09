import React from 'react'
import { GetServerSideProps } from 'next'

const HomePage = () => {
    return (
        <div>HomePage</div>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    return {
        redirect:{
            destination:'/auth/login',
            permanent:false
        }
    }

}

export default HomePage