'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SendStatusHandler({ successMessage, errorMessage }: { successMessage?: string, errorMessage?: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [sendValue, setSendValue] = useState<string | null>(null);

    useEffect(() => {
        const send = searchParams.get('send');
        if (send) {
            setSendValue(send);
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.delete('send');
            router.replace(`?${newParams.toString()}`);

            if (send === 'success') {
                alert(successMessage || 'Success: Your action has been processed.');
            } else if (send === 'error') {
                alert(errorMessage || 'Error: An error occurred.');
            }
        }
    }, [searchParams, router]);

    return null;
}
