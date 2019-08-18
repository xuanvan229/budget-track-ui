import React from 'react';
import Home from '../page'

const router = [
    {
        path : '/',
        exact : true,
        auth: false,
        main : () => <Home />
    },
]

export default router