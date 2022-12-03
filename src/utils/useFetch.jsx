import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return { isLoading, data, error };
}
