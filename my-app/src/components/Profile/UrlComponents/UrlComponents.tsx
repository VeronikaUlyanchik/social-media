import React from 'react';
import { useParams } from 'react-router-dom';

export const UrlComponent = () => {
    let { userId } = useParams();
    return <div>{userId}</div>
}