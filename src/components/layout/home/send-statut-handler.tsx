'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleCheckBigIcon, OctagonAlertIcon } from 'lucide-react';
import { useI18n } from "@/locales/client";

export default function SendStatusHandler({
    successMessage,
    errorMessage,
}: {
    successMessage?: string;
    errorMessage?: string;
}) {
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
        }
    }, [searchParams, router]);

    const t = useI18n();
    if (sendValue === 'success') {
        return (
            <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600 mb-5">
                <CircleCheckBigIcon className="h-4 w-4" />
                <AlertTitle>{t("section.contact.alert.sendMail.success.title")}</AlertTitle>
                <AlertDescription>
                    {successMessage ? successMessage : 'Success: Your action has been processed.'}
                </AlertDescription>
            </Alert>
        );
    }
    
    if (sendValue === 'error') {
        return (
            <Alert
                variant="destructive"
                className="bg-destructive text-destructive-foreground [&>svg]:text-destructive-foreground  mb-5"
            >
                <OctagonAlertIcon className="h-4 w-4" />
                <AlertTitle>{t("section.contact.alert.sendMail.error.title")}</AlertTitle>
                <AlertDescription>
                    {errorMessage ? errorMessage : 'Error: An error occurred.'}
                </AlertDescription>
            </Alert>
        );
    }

    return null;
}
